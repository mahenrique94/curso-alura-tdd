import PacienteController from './PacienteController'
import sinon from 'sinon'

describe('Teste para o controlador PacienteController', () => {

    const pacienteController = new PacienteController()
    let lidarComSucesso = null
    let lidarComErro = null

    beforeEach(() => {
        lidarComSucesso = sinon.fake()
        lidarComErro = sinon.fake()
    })

    it('Deve criar um novo controlador sem erro', () => {
        expect(pacienteController).to.be.not.undefined
    })

    it('Deve criar um novo paciente com sucesso', () => {
        const retorno = pacienteController.criaNovoPaciente('João', '027.707.290-55', '01/01/2010', 'Dor de cabeça')
        expect(retorno).to.be.a('function')
        retorno(lidarComSucesso, lidarComErro)
        expect(lidarComSucesso.calledOnce).to.be.true
        expect(lidarComErro.calledOnce).to.be.false
    })

    it('Deve criar um novo paciente com erro', () => {
        const retorno = pacienteController.criaNovoPaciente('', '111.111.111-11', '01/01/10', null)
        expect(retorno).to.be.a('function')
        retorno(lidarComSucesso, lidarComErro)
        expect(lidarComSucesso.calledOnce).to.be.false
        expect(lidarComErro.calledOnce).to.be.true
    })

})
