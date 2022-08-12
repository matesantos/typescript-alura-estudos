export function Escape(target, propertyKey, descriptor) {
    const metodoAtual = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoAtual.apply(this, args);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=Escape.js.map