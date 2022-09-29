export function domInjector(seletor: string) {
	return function (target: any, propertyKey: string) {
		let elemento: HTMLElement | null = null;

		const getter = function () {
			if (elemento) return elemento;

			console.log(`Buscando ${seletor} para injetar em ${propertyKey}`);
			elemento = document.querySelector(seletor);
			return elemento;
		}

		Object.defineProperty(target, propertyKey, {
			get: getter
		});
	}
}
