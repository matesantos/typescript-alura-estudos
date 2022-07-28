export abstract class View<T> {

  protected element: HTMLElement;

  constructor(seletor: string) {
    this.element = document.querySelector(seletor);
  }

  public update(model: T): void {
    this.element.innerHTML = this.template(model);
  }

  protected abstract template(model: T): string;

}