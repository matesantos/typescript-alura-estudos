export class Negociacao{
    
    constructor(
        public readonly _data: Date, 
        public readonly _quantidade: number, 
        public readonly _valor:number
    ){}

    get data(): Date{
        const data = new Date(this._data.getTime())
        return this._data;
    }
    
    get volume(): number {
        return this._quantidade * this._valor
    }
}