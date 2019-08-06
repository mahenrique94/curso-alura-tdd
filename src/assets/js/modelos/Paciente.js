import Imc from '../utilitarios/Imc.js'

export default class Paciente {
    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
        this.imc = Imc.calcular(peso, altura)
        this.situacaoIMC = {
            18.5: 'Abaixo do peso',
            25: 'Peso normal',
            30: 'Sobrepeso',
            35: 'Obesidade grau 1',
            40: 'Obesidade grau 2',
            100: 'Obesidade grau 3'
        }
    }

    get situacao() {
        for (let key in this.situacaoIMC) {
            if (this.imc < key) {
                return this.situacaoIMC[key]
            }
        }
        return ''
    }

    get situacaoTipo() {
        if (this.situacao === 'Sobrepeso') {
            return 'Atenção'
        } else if (this.situacao.startsWith('Obesidade')) {
            return 'Perigo'
        } else {
            return ''
        }
    }
}
