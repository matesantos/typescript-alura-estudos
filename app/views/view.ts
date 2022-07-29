export abstract class View<T> {

  protected element: HTMLElement;
  private escape:boolean = false;

  constructor(seletor: string, escape: boolean = false) {
    this.element = document.querySelector(seletor);
    this.escape = escape;
  }

  public update(model: T): void {
    let template = this.template(model)
    if(this.escape){
      template = template.replace(/<script>[\s\S]*?<\/script>/g,'');
    }
    this.element.innerHTML = this.template(model);

  }

  protected abstract template(model: T): string;

}