import { View } from "./view.js";
export class NegociacaoView extends View {
    constructor() {
        super(...arguments);
        this.formatarData = (data) => new Intl.DateTimeFormat().format(data);
    }
    template(model) {
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
              <td>${this.formatarData(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
            <tr/>
          `;
        }).join('')}
        </tbody>
      </table>
    `;
    }
}
