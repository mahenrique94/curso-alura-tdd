import chai from 'chai'
import { calcularIMC } from './imc'

describe('Tests do IMC', () => {
    it('Calculando IMC', () => {
        chai.expect(calcularIMC(80, 1.75)).to.equal('26.12')
    })
})