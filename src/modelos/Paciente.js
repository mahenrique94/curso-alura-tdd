import { calcularIMC } from '../utilitarios/imc'

class Paciente {
    constructor(nome, idade, sexo, peso, altura, imc) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
        this.imc = imc ? imc : calcularIMC(peso, altura)
    }

    get situacao() {
        if (this.imc < 18.5) {
            return 'Abaixo do peso'
        } else if (this.imc >= 18.5 && this.imc <= 24.9) {
            return 'Peso normal'
        } else if (this.imc >= 25 && this.imc <= 29.9) {
            return 'Sobrepeso'
        } else if (this.imc >= 30 && this.imc <= 34.9) {
            return 'Obesidade grau 1'
        } else if (this.imc >= 35 && this.imc <= 39.9) {
            return 'Obesidade grau 2'
        } else if (this.imc > 40) {
            return 'Obesidade grau 3'
        }
    }

    pegaCondicaoTabela() {
        if (this.situacao === 'Sobrepeso') {
            return 'warning'
        } else if (this.situacao.startsWith('Obesidade')) {
            return 'danger'
        } else {
            return ''
        }
    }
}

export default Paciente
