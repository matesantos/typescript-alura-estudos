import { DomInjector } from '../decorators/DomInjector.js';
import { Inspect } from '../decorators/Inspect.js';
import { LogarTempoDeExecucao } from '../decorators/logarTempoDeExecucao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesService } from '../services/NegociacoesServices.js';
import { imprimir } from '../utils/imprimir.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacaoView } from '../views/negociacao-view.js';

export class NegociacaoController {
  @DomInjector("#data")
  private inputData: HTMLInputElement;
  @DomInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;
  @DomInjector("#valor")
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacaoView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');
  private negociacaoServiço = new NegociacoesService();

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  @LogarTempoDeExecucao()
  @Inspect()
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView
        .update('Apenas negociações em dias úteis são aceitas');
      return;
    }

    this.negociacoes.adiciona(negociacao);
    imprimir(negociacao, this.negociacoes);
    this.limparFormulario();
    this.atualizaView();
  }

  public importarDados(): void {
    this.negociacaoServiço
      .obterNegociacoes()
      .then(negociacoesDeHoje => {
        return negociacoesDeHoje.filter(negociacoesDeHoje => {
          return !this.negociacoes
                     .lista()
                     .some(negociacao =>
                       negociacao.ehIgual(negociacoesDeHoje)
                      )
        })
      })
      .then(negociacoesDeHoje => {
        for (let negociacao of negociacoesDeHoje) {
          this.negociacoes.adiciona(negociacao);
        }
        this.negociacoesView.update(this.negociacoes);
      })
  }

  private ehDiaUtil(data: Date) {
    return data.getDay() > DiasDaSemana.DOMINGO
      && data.getDay() < DiasDaSemana.SABADO;
  }

  private limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso');
  }
}
