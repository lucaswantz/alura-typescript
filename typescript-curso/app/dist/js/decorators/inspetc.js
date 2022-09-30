export function inspect(target, propertKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método: ${propertKey}`);
        console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
        const retorno = originalMethod.apply(this, args);
        console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=inspetc.js.map