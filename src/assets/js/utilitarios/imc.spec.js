import { calcularIMC } from './imc'

describe('Tests do IMC', () => {
    it('Calculando IMC', () => {
        expect(calcularIMC(80, 1.75)).to.equal('26.12')
    })
})
