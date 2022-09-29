export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = emSegundos ? 1000 : 1;
            let undidade = emSegundos ? "segundos" : "milisegundos";
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tempo de execução do método ${propertyKey}: ${(t2 - t1) / divisor} ${undidade}`);
            return retorno;
        };
        return descriptor;
    };
}
