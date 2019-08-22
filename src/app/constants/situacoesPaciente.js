const situacoesPaciente = {
    AGUARDANDO_ATENDIMENTO: 'AGUARDANDO_ATENDIMENTO',
    AGUARDANDO_MEDICACAO: 'AGUARDANDO_MEDICACAO',
    AGUARDANDO_TRIAGEM: 'AGUARDANDO_TRIAGEM',
    EM_ATENDIMENTO: 'EM_ATENDIMENTO',
    EM_MEDICACAO: 'EM_MEDICACAO',
    EM_TRIAGEM: 'EM_TRIAGEM',
    LIBERADO: 'LIBERADO'
}

const traducoesPaciente = {
    AGUARDANDO_ATENDIMENTO: 'Aguardando Atendimento',
    AGUARDANDO_MEDICACAO: 'Aguardando Medicação',
    AGUARDANDO_TRIAGEM: 'Aguardando Triagem',
    EM_ATENDIMENTO: 'Em atendimento',
    EM_MEDICACAO: 'Em Medicação',
    EM_TRIAGEM: 'Em Triagem',
    LIBERADO: 'Liberado'
}

const maquinaDeEstado = {
    AGUARDANDO_ATENDIMENTO: {
        estadoAnterior: situacoesPaciente.EM_TRIAGEM,
        estadoAtual: situacoesPaciente.AGUARDANDO_ATENDIMENTO,
        proximoEstado: situacoesPaciente.EM_ATENDIMENTO
    },
    AGUARDANDO_MEDICACAO: {
        estadoAnterior: situacoesPaciente.EM_ATENDIMENTO,
        estadoAtual: situacoesPaciente.AGUARDANDO_MEDICACAO,
        proximoEstado: situacoesPaciente.EM_MEDICACAO
    },
    AGUARDANDO_TRIAGEM: {
        estadoAnterior: null,
        estadoAtual: situacoesPaciente.AGUARDANDO_TRIAGEM,
        proximoEstado: situacoesPaciente.EM_TRIAGEM
    },
    EM_ATENDIMENTO: {
        estadoAnterior: situacoesPaciente.AGUARDANDO_ATENDIMENTO,
        estadoAtual: situacoesPaciente.EM_ATENDIMENTO,
        proximoEstado: situacoesPaciente.AGUARDANDO_MEDICACAO
    },
    EM_MEDICACAO: {
        estadoAnterior: situacoesPaciente.AGUARDANDO_MEDICACAO,
        estadoAtual: situacoesPaciente.EM_MEDICACAO,
        proximoEstado: situacoesPaciente.LIBERADO
    },
    EM_TRIAGEM: {
        estadoAnterior: situacoesPaciente.AGUARDANDO_TRIAGEM,
        estadoAtual: situacoesPaciente.EM_TRIAGEM,
        proximoEstado: situacoesPaciente.AGUARDANDO_ATENDIMENTO
    },
    LIBERADO: {
        estadoAnterior: situacoesPaciente.EM_MEDICACAO,
        estadoAtual: situacoesPaciente.LIBERADO,
        proximoEstado: null
    }
}

export { maquinaDeEstado, traducoesPaciente, situacoesPaciente }
