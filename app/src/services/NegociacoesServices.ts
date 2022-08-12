import { NegociacoesDoDia } from "../interfaces/negociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

  public async obterNegociacoes(): Promise<Negociacao[]> {
    const respose = await fetch('http://localhost:8080/dados');
    const dados = await respose.json() as NegociacoesDoDia[];
    return dados.map(dado => new Negociacao(
      new Date(),
      dado.vezes,
      dado.montante
    )
    );
  }
}