import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dadosApi) => {
            return dadosApi.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante));
        });
    }
}
