export function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento = null;
        const getter = function () {
            if (elemento)
                return elemento;
            console.log(`Buscando ${seletor} para injetar em ${propertyKey}`);
            elemento = document.querySelector(seletor);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
