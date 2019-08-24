import Paciente from './Paciente'
import { maquinaDeEstado, traducoesPaciente } from '../constants/situacoesPaciente'

describe('Testes para a clase de modelo Paciente', () => {

    const informacoesPaciente = {
        nome: 'João',
        cpf: '027.707.290-55',
        dataNascimento: '01/01/2010',
        estado: 'Dor de cabeça muito forte'
    }

    let paciente = null

    beforeEach(() => {
        paciente = new Paciente(
            informacoesPaciente.nome,
            informacoesPaciente.cpf,
            informacoesPaciente.dataNascimento,
            informacoesPaciente.estado
        )
    })

    it('Deve criar um novo objeto sem dar erro', () => {
        expect(paciente).to.be.not.undefined
    })

    it('Deve criar um novo objeto válido', () => {
        expect(paciente.ehValido()).to.be.true
    })

    it('Deve criar um novo objeto inválido', () => {
        expect(new Paciente(
            '',
            '111.111.111-11',
            '01/01/10',
            null
        ).ehValido()).to.be.false
    })

    it('Todos os atributos devem possuir valor inicial corretos', () => {
        expect(paciente.nome).to.be.equal(informacoesPaciente.nome)
        expect(paciente.cpf.value).to.be.equal(informacoesPaciente.cpf)
        expect(paciente.dataNascimento.value).to.be.equal(informacoesPaciente.dataNascimento)
        expect(paciente.estado).to.be.equal(informacoesPaciente.estado)
        expect(paciente.senha).to.be.null
        expect(paciente.situacao).to.be.equal(maquinaDeEstado.AGUARDANDO_TRIAGEM)
    })

    it('Deve gerar uma nova senha de atendimento', () => {
        paciente.gerarSenhaDeAtendimento(1)
        expect(paciente.senha).to.be.equal('0000000001')
    })

    it('Deve converter uma instância da classe Paciente para um objeto puro', () => {
        paciente.gerarSenhaDeAtendimento(1)
        expect(paciente.converterParaObjeto()).to.deep.equal({
            senha: '0000000001',
            nome: informacoesPaciente.nome,
            cpf: informacoesPaciente.cpf,
            dataNascimento: informacoesPaciente.dataNascimento,
            estado: informacoesPaciente.estado,
            situacao: traducoesPaciente[maquinaDeEstado.AGUARDANDO_TRIAGEM.estadoAtual]
        })
    })

    it('Máquina de estado deve funcionar corretamente', () => {
        expect(paciente.enviarParaAProximaSituacao(maquinaDeEstado.AGUARDANDO_TRIAGEM.proximoEstado)).to.be.true
        expect(paciente.situacao).to.be.equal(maquinaDeEstado.EM_TRIAGEM)
        expect(paciente.enviarParaAProximaSituacao()).to.be.true
        expect(paciente.situacao).to.be.equal(maquinaDeEstado.AGUARDANDO_ATENDIMENTO)
        expect(paciente.enviarParaAProximaSituacao(maquinaDeEstado.AGUARDANDO_ATENDIMENTO.proximoEstado)).to.be.true
        expect(paciente.situacao).to.be.equal(maquinaDeEstado.EM_ATENDIMENTO)
        expect(paciente.enviarParaAProximaSituacao()).to.be.true
        expect(paciente.situacao).to.be.equal(maquinaDeEstado.AGUARDANDO_MEDICACAO)
        expect(paciente.enviarParaAProximaSituacao(maquinaDeEstado.AGUARDANDO_MEDICACAO.proximoEstado)).to.be.true
        expect(paciente.situacao).to.be.equal(maquinaDeEstado.EM_MEDICACAO)
        expect(paciente.enviarParaAProximaSituacao()).to.be.true
        expect(paciente.situacao).to.be.equal(maquinaDeEstado.LIBERADO)
    })

})