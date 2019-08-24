import ListaPacientesController from './ListaPacientesController'
import sinon from 'sinon'
import Paciente from '../models/Paciente'
import { maquinaDeEstado } from '../constants/situacoesPaciente'

describe('Teste para o controlador ListaPacientesController', () => {

    const listaPacientesController = new ListaPacientesController()
    const informacoesPaciente = {
        nome: 'João',
        cpf: '027.707.290-55',
        dataNascimento: '01/01/2010',
        estado: 'Dor de cabeça muito forte'
    }

    let lidarComSucesso = null
    let lidarComErro = null
    let paciente = null

    beforeEach(() => {
        lidarComSucesso = sinon.fake()
        lidarComErro = sinon.fake()
        paciente = new Paciente(
            informacoesPaciente.nome,
            informacoesPaciente.cpf,
            informacoesPaciente.dataNascimento,
            informacoesPaciente.estado
        )
    })

    it('Deve criar um novo controlador sem erro', () => {
        expect(listaPacientesController).to.be.not.undefined
    })

    it('Deve enviar para a proxima situação com sucesso', () => {
        const retorno = listaPacientesController.enviarParaProximaSituacao(paciente, maquinaDeEstado.AGUARDANDO_TRIAGEM.proximoEstado)
        expect(retorno).to.be.a('function')
        retorno(lidarComSucesso, lidarComErro)
        expect(lidarComSucesso.calledOnce).to.be.true
        expect(lidarComErro.calledOnce).to.be.false
    })

    it('Deve dar erro ao tentar enviar para a proxima situação', () => {
        const retorno = listaPacientesController.enviarParaProximaSituacao(paciente, maquinaDeEstado.LIBERADO.estadoAtual)
        expect(retorno).to.be.a('function')
        retorno(lidarComSucesso, lidarComErro)
        expect(lidarComSucesso.calledOnce).to.be.false
        expect(lidarComErro.calledOnce).to.be.true
    })

})
