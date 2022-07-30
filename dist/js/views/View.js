export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.element = elemento;
        }
        else {
            throw Error(`Seletor ${elemento} não existe no documento!`);
        }
        escapar && (this.escapar = escapar);
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        }
        this.element.innerHTML = this.template(model);
    }
}
