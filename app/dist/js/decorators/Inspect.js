export function Inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoAtual = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`\n-------------------------------------------`);
            console.log(`----- Método ${propertyKey} -----`);
            console.log(`----- Parâmetros ${JSON.stringify(args)} -----`);
            const retorno = metodoAtual.apply(this, args);
            console.log(`---- retorno: ${JSON.stringify(retorno)} -----`);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=Inspect.js.map