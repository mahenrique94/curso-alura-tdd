import Data from './Data'

describe('Testes para a classe utilitária Data', () => {

    const dataDeTeste = '01/01/2010'

    it('Deve criar um novo objeto sem dar erro', () => {
        expect(new Data(dataDeTeste)).to.be.not.undefined
    })

    it('O atributo date deve ser do tipo Date', () => {
        expect(new Data(dataDeTeste).date).to.be.a('Date')
    })

    it('O atributo value deve ser igual a data passada', () => {
        expect(new Data(dataDeTeste).value).to.be.equal(dataDeTeste)
    })

    it('Deve criar um novo objeto válido', () => {
        expect(new Data(dataDeTeste).ehValida()).to.be.true
    })

    it('Deve criar um novo objeto inválido', () => {
        expect(new Data('01/01/10').ehValida()).to.be.false
    })

    it('Deve calcular a idade correta', () => {
        expect(new Data(dataDeTeste).calcularIdade()).to.be.equal(9)
    })

})