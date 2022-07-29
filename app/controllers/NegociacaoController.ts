import { DiaDaSemana } from "../enuns/dias-da-semana.js";
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

  public adiciona():void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value, 
      this.inputQuantidade.value, this.inputValor.value
    );
   
    if(!this.ehDiaUtil(negociacao.data)){
      this.mensagemView.update("Apenas negociações em dias úteis!");
      return;
    }
    this.negociacoes.adicionar(negociacao);
    this.limparFormulario();
    this.atualizaView();
  }

  private ehDiaUtil(data: Date): boolean{
    return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO; 
  }

  
  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizaView = ():void => {
    this.negociacaoView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso.")
  }
}