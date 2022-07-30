export abstract class View<T> {

  protected element: HTMLElement;
  private escapar:boolean = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if(elemento) {
     this.element = elemento as HTMLElement;
    } else{
      throw Error(`Seletor ${elemento} não existe no documento!`);
    }  
      
    escapar && (this.escapar = escapar);
  }

  public update(model: T): void {
    let template = this.template(model)
    if(this.escapar){
      template = template.replace(/<script>[\s\S]*?<\/script>/g,'');
    }
    this.element.innerHTML = this.template(model);

  }

  protected abstract template(model: T): string;

}