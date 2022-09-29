import { inspect } from "../decorators/inspetc.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {

	protected elemento: HTMLElement;

	constructor(seletor: string) {
		const elemento = document.querySelector(seletor);

		if (!elemento) {
			throw Error(`Seletor ${elemento} não encontrado!`);
		}

		this.elemento = elemento as HTMLElement;
	}

	@logarTempoDeExecucao()
	@inspect
	public update(model: T): void {
		this.elemento.innerHTML = this.template(model);
	}

	protected abstract template(model: T): string;

}
