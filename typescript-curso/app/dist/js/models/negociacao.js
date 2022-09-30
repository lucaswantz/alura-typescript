export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(data, quantidade, valor) {
        return new Negociacao(new Date(data.replace(/-/g, ',')), parseInt(quantidade), parseFloat(valor));
    }
    paraTexto() {
        return `
			Data: ${this.data},
			Quantidade: ${this.quantidade},
			Valor: ${this.valor}
		`;
    }
    ehIgual(negociacao) {
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear()
            && this.quantidade == negociacao.quantidade
            && this.valor == negociacao.valor;
    }
}
//# sourceMappingURL=negociacao.js.map