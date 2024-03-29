import CPF from '../utils/CPF.js'
import Data from '../utils/Data.js'

import { maquinaDeEstado, traducoesPaciente, situacoesPaciente } from '../constants/situacoesPaciente.js'

export default class Paciente {
    constructor(nome = '', cpf = '', dataNascimento = '', estado = '', situacao = maquinaDeEstado.AGUARDANDO_TRIAGEM) {
        this._nome = nome
        this._cpf = new CPF(cpf)
        this._dataNascimento = new Data(dataNascimento)
        this._estado = estado
        this._senha = null
        this._situacao = situacao
    }

    get nome() {
        return this._nome
    }

    get cpf() {
        return this._cpf
    }

    get dataNascimento() {
        return this._dataNascimento
    }

    get estado() {
        return this._estado
    }

    get senha() {
        return this._senha
    }

    get situacao() {
        return this._situacao
    }

    ehValido() {
        return this.nome.trim().length > 0 &&
            this.cpf.ehValido() &&
            this.dataNascimento.ehValida() &&
            this.estado.trim().length > 0
    }

    gerarSenhaDeAtendimento(novaSenha) {
        this._senha = novaSenha.toString().padStart(10, '0')
    }

    converterParaObjeto() {
        return {
            senha: this.senha,
            nome: this.nome,
            cpf: this.cpf.value,
            dataNascimento: this.dataNascimento.value,
            estado: this.estado,
            situacao: traducoesPaciente[this.situacao.estadoAtual]
        }
    }

    enviarParaAProximaSituacao(proximaSituacaoEsperada) {
        if (proximaSituacaoEsperada) {
            if (this.situacao.proximoEstado === proximaSituacaoEsperada) {
                this._situacao = maquinaDeEstado[this.situacao.proximoEstado]
                return true
            }
            return false
        } else {
            if ([situacoesPaciente.EM_ATENDIMENTO, situacoesPaciente.EM_MEDICACAO, situacoesPaciente.EM_TRIAGEM].includes(this.situacao.estadoAtual)) {
                this._situacao = maquinaDeEstado[this.situacao.proximoEstado]
                return true
            }
            return false
        }
    }
}