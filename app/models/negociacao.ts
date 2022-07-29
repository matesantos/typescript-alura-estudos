export class Negociacao{
    
    constructor(
        private readonly _data: Date, 
        public readonly _quantidade: number, 
        public readonly _valor:number
    ){}

    public get data(): Date{
        const data = new Date(this._data.getTime())
        return this._data;
    }
    
    public get volume(): number {
        return this._quantidade * this._valor
    }

    public static criaDe(dataString: string, quantidade: string, valor:string): Negociacao{
        const reg = /-/g;
        const data = new Date(dataString.replace(reg, ","));
        return new Negociacao(
          new Date(data),
          Number.parseInt(quantidade),
          Number.parseFloat(valor));
    }
}