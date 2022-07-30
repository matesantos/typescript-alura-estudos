export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return this._data;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    static criaDe(dataString, quantidade, valor) {
        const reg = /-/g;
        const data = new Date(dataString.replace(reg, ","));
        return new Negociacao(new Date(data), Number.parseInt(quantidade), Number.parseFloat(valor));
    }
}
