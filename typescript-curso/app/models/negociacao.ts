export class Negociacao {
	constructor(
		private _data: Date,
		public readonly quantidade: number,
		public readonly valor: number
	) {}

	get volume(): number {
		return this.quantidade * this.valor;
	}

	get data(): Date {
		const data = new Date(this._data.getTime());
		return data;
	}

	public static criaDe(data: string, quantidade: string, valor: string): Negociacao {
		return new Negociacao(
			new Date(data.replace(/-/g, ',')),
			parseInt(quantidade),
			parseFloat(valor)
		);
	}
}
