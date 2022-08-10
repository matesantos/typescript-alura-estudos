import { Negociacao } from "../models/negociacao.js";

export function imprimir(...objetos:Negociacao[]){
    for(let obj of objetos){
        console.log(obj.paraTexto());
    }
}