export class View<T> {

  protected element: HTMLElement;

  constructor(seletor: string) {
    this.element = document.querySelector(seletor);
  }

  update(model: T): void {
    this.element.innerHTML = this.template(model);
  }

  template(model: T): string {
    throw Error("Classe filha precisa implementar o método template.")
  }

}