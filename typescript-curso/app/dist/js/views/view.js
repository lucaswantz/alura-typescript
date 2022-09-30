export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (!elemento) {
            throw Error(`Seletor ${elemento} não encontrado!`);
        }
        this.elemento = elemento;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
//# sourceMappingURL=view.js.map