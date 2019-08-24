import { maquinaDeEstado, traducoesPaciente, situacoesPaciente } from './situacoesPaciente'

describe('Testes para as constantes do Paciente', () => {

    it('Verificando se todas as situações estão corretas', () => {
        expect(situacoesPaciente.AGUARDANDO_ATENDIMENTO).to.be.equal('AGUARDANDO_ATENDIMENTO')
        expect(situacoesPaciente.AGUARDANDO_MEDICACAO).to.be.equal('AGUARDANDO_MEDICACAO')
        expect(situacoesPaciente.AGUARDANDO_TRIAGEM).to.be.equal('AGUARDANDO_TRIAGEM')
        expect(situacoesPaciente.EM_ATENDIMENTO).to.be.equal('EM_ATENDIMENTO')
        expect(situacoesPaciente.EM_MEDICACAO).to.be.equal('EM_MEDICACAO')
        expect(situacoesPaciente.EM_TRIAGEM).to.be.equal('EM_TRIAGEM')
        expect(situacoesPaciente.LIBERADO).to.be.equal('LIBERADO')
    })

    it('Verificando se todas as traduções estão corretas', () => {
        expect(traducoesPaciente.AGUARDANDO_ATENDIMENTO).to.be.equal('Aguardando Atendimento')
        expect(traducoesPaciente.AGUARDANDO_MEDICACAO).to.be.equal('Aguardando Medicação')
        expect(traducoesPaciente.AGUARDANDO_TRIAGEM).to.be.equal('Aguardando Triagem')
        expect(traducoesPaciente.EM_ATENDIMENTO).to.be.equal('Em atendimento')
        expect(traducoesPaciente.EM_MEDICACAO).to.be.equal('Em Medicação')
        expect(traducoesPaciente.EM_TRIAGEM).to.be.equal('Em Triagem')
        expect(traducoesPaciente.LIBERADO).to.be.equal('Liberado')
    })

    it('Verificando se a máquina de estado está com os estados corretos', () => {
        expect(maquinaDeEstado.AGUARDANDO_ATENDIMENTO.estadoAnterior).to.be.equal('EM_TRIAGEM')
        expect(maquinaDeEstado.AGUARDANDO_ATENDIMENTO.estadoAtual).to.be.equal('AGUARDANDO_ATENDIMENTO')
        expect(maquinaDeEstado.AGUARDANDO_ATENDIMENTO.proximoEstado).to.be.equal('EM_ATENDIMENTO')

        expect(maquinaDeEstado.AGUARDANDO_MEDICACAO.estadoAnterior).to.be.equal('EM_ATENDIMENTO')
        expect(maquinaDeEstado.AGUARDANDO_MEDICACAO.estadoAtual).to.be.equal('AGUARDANDO_MEDICACAO')
        expect(maquinaDeEstado.AGUARDANDO_MEDICACAO.proximoEstado).to.be.equal('EM_MEDICACAO')

        expect(maquinaDeEstado.AGUARDANDO_TRIAGEM.estadoAnterior).to.be.null
        expect(maquinaDeEstado.AGUARDANDO_TRIAGEM.estadoAtual).to.be.equal('AGUARDANDO_TRIAGEM')
        expect(maquinaDeEstado.AGUARDANDO_TRIAGEM.proximoEstado).to.be.equal('EM_TRIAGEM')

        expect(maquinaDeEstado.EM_ATENDIMENTO.estadoAnterior).to.be.equal('AGUARDANDO_ATENDIMENTO')
        expect(maquinaDeEstado.EM_ATENDIMENTO.estadoAtual).to.be.equal('EM_ATENDIMENTO')
        expect(maquinaDeEstado.EM_ATENDIMENTO.proximoEstado).to.be.equal('AGUARDANDO_MEDICACAO')

        expect(maquinaDeEstado.EM_MEDICACAO.estadoAnterior).to.be.equal('AGUARDANDO_MEDICACAO')
        expect(maquinaDeEstado.EM_MEDICACAO.estadoAtual).to.be.equal('EM_MEDICACAO')
        expect(maquinaDeEstado.EM_MEDICACAO.proximoEstado).to.be.equal('LIBERADO')

        expect(maquinaDeEstado.EM_TRIAGEM.estadoAnterior).to.be.equal('AGUARDANDO_TRIAGEM')
        expect(maquinaDeEstado.EM_TRIAGEM.estadoAtual).to.be.equal('EM_TRIAGEM')
        expect(maquinaDeEstado.EM_TRIAGEM.proximoEstado).to.be.equal('AGUARDANDO_ATENDIMENTO')

        expect(maquinaDeEstado.LIBERADO.estadoAnterior).to.be.equal('EM_MEDICACAO')
        expect(maquinaDeEstado.LIBERADO.estadoAtual).to.be.equal('LIBERADO')
        expect(maquinaDeEstado.LIBERADO.proximoEstado).to.be.null
    })
})
