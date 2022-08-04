export function Escape(
  target: any, 
  propertyKey: string, 
  descriptor: PropertyDescriptor) {
    const metodoAtual = descriptor.value;
    descriptor.value = function(...args: any[]){
      let retorno = metodoAtual.apply(this, args);
      if(typeof retorno === 'string'){
        retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
      }
      return retorno;
    }
    return descriptor;
}