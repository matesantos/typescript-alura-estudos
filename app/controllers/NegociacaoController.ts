import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";

export class NegociacaoControler {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacaoView = new NegociacaoView("#negociacaoView");
  private mensagemView = new MensagemView("#mensagemView")

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacaoView.update(this.negociacoes);
  }

  adiciona():void {
    const negociacao = this.criarNegociacao();
    this.negociacoes.adicionar(negociacao);
    this.negociacaoView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso.")
    this.limparFormulario();
  }

  criarNegociacao(): Negociacao {
    const reg = /-/g;
    const data = new Date(this.inputData.value.replace(reg, ","))
    return new Negociacao(
      new Date(data),
      Number.parseInt(this.inputQuantidade.value),
      Number.parseFloat(this.inputValor.value));
  }
  
  limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}