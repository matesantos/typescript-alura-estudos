export class View {
    constructor(seletor, escape = false) {
        this.escape = false;
        this.element = document.querySelector(seletor);
        this.escape = escape;
    }
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        }
        this.element.innerHTML = this.template(model);
    }
}
