import CPF from './CPF'

describe('Testes para a classe utilitária CPF', () => {

    const cpfDeTeste = '027.707.290-55'

    it('Deve criar um novo objeto sem dar erro', () => {
        expect(new CPF(cpfDeTeste)).to.be.not.undefined
    })

    it('Deve criar um novo objeto válido', () => {
        expect(new CPF(cpfDeTeste).ehValido()).to.be.true
    })

    it('Deve criar um novo objeto inválido', () => {
        expect(new CPF('02770729055').ehValido()).to.be.false
    })

    it('CPF deve ser válido', () => {
        expect(new CPF(cpfDeTeste).validarCPF()).to.be.true
    })

    it('CPF sem formatação deve ser válido', () => {
        expect(new CPF('02770729055').validarCPF()).to.be.true
    })

    it('CPF deve ser inválido', () => {
        expect(new CPF('111.111.111-11').validarCPF()).to.be.false
    })

    it('CPF sem formatação deve ser inválido', () => {
        expect(new CPF('11111111111').validarCPF()).to.be.false
    })

    it('Atributo valor deve ser igual ao CPF informado', () => {
        expect(new CPF(cpfDeTeste).value).to.be.equal(cpfDeTeste)
    })

})