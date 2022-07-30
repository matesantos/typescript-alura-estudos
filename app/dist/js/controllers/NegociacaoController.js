import { DiaDaSemana } from "../enuns/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";
export class NegociacaoControler {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacaoView = new NegociacaoView("#negociacaoView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.atualizaView = () => {
            this.negociacaoView.update(this.negociacoes);
            this.mensagemView.update("Negociação adicionada com sucesso.");
        };
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacaoView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociações em dias úteis!");
            return;
        }
        this.negociacoes.adicionar(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    ehDiaUtil(data) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
