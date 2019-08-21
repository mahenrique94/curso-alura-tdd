export default class CPF {
    constructor(cpf) {
        this._cpf = cpf
    }

    get value() {
        return this._cpf
    }

    validarCPF() {
        const cpfSemFormatacao = this.value.replace(/[.-]/g, '')
        const invalidCpfs = [
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999',
            '00000000000'
        ]

        if (invalidCpfs.filter(current => current === cpfSemFormatacao).length > 0) {
            return false
        }

        let sum = 0
        let remainder = 0
        let i = 0
        if (cpfSemFormatacao === '00000000000') {
            return false
        }

        for (i = 1; i <= 9; i++) {
            sum = sum + parseInt(cpfSemFormatacao.substring(i - 1, i), 10) * (11 - i)
        }

        remainder = (sum * 10) % 11

        if (remainder === 10 || remainder === 11) {
            remainder = 0
        }
        if (remainder !== parseInt(cpfSemFormatacao.substring(9, 10), 10)) {
            return false
        }

        sum = 0
        for (i = 1; i <= 10; i++) {
            sum = sum + parseInt(cpfSemFormatacao.substring(i - 1, i), 10) * (12 - i)
        }

        remainder = (sum * 10) % 11

        if (remainder === 10 || remainder === 11) {
            remainder = 0
        }
        if (remainder !== parseInt(cpfSemFormatacao.substring(10, 11), 10)) {
            return false
        }

        return true
    }

    ehValido() {
        return !!this.value && this.value.trim().length === 14 && this.validarCPF()
    }
}
