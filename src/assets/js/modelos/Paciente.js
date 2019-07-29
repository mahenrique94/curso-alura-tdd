const situacaoIMC = {
    18.5: 'Abaixo do peso',
    25: 'Peso normal',
    30: 'Sobrepeso',
    35: 'Obesidade grau 1',
    40: 'Obesidade grau 2',
    100: 'Obesidade grau 3'
}

class Paciente {
    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
        this.imc = calcularIMC(peso, altura)
    }

    get situacao() {
        for (let key in situacaoIMC) {
            if (this.imc < key) {
                return situacaoIMC[key]
            }
        }
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
