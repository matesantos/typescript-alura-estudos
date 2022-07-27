import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacaoView extends View<Negociacoes>{

  private elemento:HTMLElement;

  template(model: Negociacoes): string {
    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </thead>
                <tbody>
                ${model.lista().map(negociacao => {
                  return `
                    <tr>
                      <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                      <td>${negociacao._quantidade}</td>
                      <td>${negociacao._valor}</td>
                    <tr/>
                  `
                }).join('')}
                </tbody>
            </table>
        `;
  }

}