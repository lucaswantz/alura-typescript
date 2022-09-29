export function inspect(
	target: any,
	propertKey: string,
	descriptor: PropertyDescriptor
) {
	const originalMethod = descriptor.value;

	descriptor.value = function (...args: any[]) {
		console.log(`--- Método: ${propertKey}`);
		console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
		const retorno = originalMethod.apply(this, args);
		console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
		return retorno;
	};

	return descriptor;
}
