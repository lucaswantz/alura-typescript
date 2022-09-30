import { Imprimivel } from "../interfaces/imprimivel.js";

export function imprimir(...objetos: Array<Imprimivel>): void {
	objetos.forEach(objeto => console.log(objeto.paraTexto()));
}
