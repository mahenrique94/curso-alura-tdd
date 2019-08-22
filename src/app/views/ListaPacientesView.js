import ListaPacientesController from '../controllers/ListaPacientesController.js'
import { traducoesPaciente, situacoesPaciente } from '../constants/situacoesPaciente.js'

export default class ListaPacientesView {
    constructor() {
        this._pacienteCorpoTabela = document.querySelector('.js-corpoTabela')
        this._listaPacientes = []
        this._listaPacientesController = new ListaPacientesController()
    }

    adicionaNaTabela(paciente) {
        paciente.gerarSenhaDeAtendimento(this._listaPacientes.length + 1)
        this._pacienteCorpoTabela.appendChild(this.criaNovaLinhaNaTabela(paciente))
        this._listaPacientes.push(paciente)
    }

    criaNovaLinhaNaTabela(paciente) {
        const novoPaciente = paciente.converterParaObjeto()
        const novaLinha = document.createElement('tr')
        const colunaSenha = document.createElement('td')
        const colunaNome = document.createElement('td')
        const colunaCPF = document.createElement('td')
        const colunaSituacao = document.createElement('td')
        const colunaAcoes = document.createElement('td')
        const botaoTriagem = document.createElement('button')
        const botaoAtendimento = document.createElement('button')
        const botaoMedicacao = document.createElement('button')
        const botaoLiberado = document.createElement('button')
        const botaoAtualizarSituacao = document.createElement('button')
        const iconeTriagem = document.createElement('i')
        const iconeAtendimento = document.createElement('i')
        const iconeMedicacao = document.createElement('i')
        const iconeLiberado = document.createElement('i')
        const iconeAtualizarSituacao = document.createElement('i')

        colunaSituacao.classList.add(`js-${novoPaciente.senha}`, 'js-situacao')

        iconeTriagem.classList.add('fas', 'fa-user-nurse')
        iconeAtendimento.classList.add('fas', 'fa-user-md')
        iconeMedicacao.classList.add('fas', 'fa-medkit')
        iconeLiberado.classList.add('fas', 'fa-home')
        iconeAtualizarSituacao.classList.add('fas', 'fa-sync')

        colunaSenha.textContent = novoPaciente.senha
        colunaNome.textContent = novoPaciente.nome
        colunaCPF.textContent = novoPaciente.cpf
        colunaSituacao.textContent = novoPaciente.situacao

        botaoTriagem.appendChild(iconeTriagem)
        botaoAtendimento.appendChild(iconeAtendimento)
        botaoMedicacao.appendChild(iconeMedicacao)
        botaoLiberado.appendChild(iconeLiberado)
        botaoAtualizarSituacao.appendChild(iconeAtualizarSituacao)

        botaoTriagem.addEventListener('click', () => {
            const enviarParaProximaSituacao = this._listaPacientesController.enviarParaProximaSituacao(paciente, situacoesPaciente.EM_TRIAGEM)
            enviarParaProximaSituacao(this.lidarComSucessoNaAtualizacaoDaSituacao, this.lidarComErroNaAtualizacaoDaSituacao)
        })

        botaoAtendimento.addEventListener('click', () => {
            const enviarParaProximaSituacao = this._listaPacientesController.enviarParaProximaSituacao(paciente, situacoesPaciente.EM_ATENDIMENTO)
            enviarParaProximaSituacao(this.lidarComSucessoNaAtualizacaoDaSituacao, this.lidarComErroNaAtualizacaoDaSituacao)
        })

        botaoMedicacao.addEventListener('click', () => {
            const enviarParaProximaSituacao = this._listaPacientesController.enviarParaProximaSituacao(paciente, situacoesPaciente.EM_MEDICACAO)
            enviarParaProximaSituacao(this.lidarComSucessoNaAtualizacaoDaSituacao, this.lidarComErroNaAtualizacaoDaSituacao)
        })

        botaoLiberado.addEventListener('click', () => {
            const enviarParaProximaSituacao = this._listaPacientesController.enviarParaProximaSituacao(paciente, situacoesPaciente.LIBERADO)
            enviarParaProximaSituacao(this.lidarComSucessoNaAtualizacaoDaSituacao, this.lidarComErroNaAtualizacaoDaSituacao)
        })

        botaoAtualizarSituacao.addEventListener('click', () => {
            const enviarParaProximaSituacao = this._listaPacientesController.enviarParaProximaSituacao(paciente)
            enviarParaProximaSituacao(this.lidarComSucessoNaAtualizacaoDaSituacao, this.lidarComErroNaAtualizacaoDaSituacao)
        })

        botaoTriagem.classList.add('btn', 'btn-primary', 'mr-1')
        botaoAtendimento.classList.add('btn', 'btn-secondary', 'mr-1')
        botaoMedicacao.classList.add('btn', 'btn-success', 'mr-1')
        botaoLiberado.classList.add('btn', 'btn-info', 'mr-1')
        botaoAtualizarSituacao.classList.add('btn', 'btn-dark')

        botaoTriagem.dataset.toggle = 'tooltip'
        botaoTriagem.dataset.placement = 'top'
        botaoTriagem.title = 'Enviar para triagem'

        botaoAtendimento.dataset.toggle = 'tooltip'
        botaoAtendimento.dataset.placement = 'top'
        botaoAtendimento.title = 'Enviar para atendimento'

        botaoMedicacao.dataset.toggle = 'tooltip'
        botaoMedicacao.dataset.placement = 'top'
        botaoMedicacao.title = 'Enviar para medicação'

        botaoLiberado.dataset.toggle = 'tooltip'
        botaoLiberado.dataset.placement = 'top'
        botaoLiberado.title = 'Enviar para casa'

        botaoAtualizarSituacao.dataset.toggle = 'tooltip'
        botaoAtualizarSituacao.dataset.placement = 'top'
        botaoAtualizarSituacao.title = 'Atualizar situação'

        colunaAcoes.appendChild(botaoTriagem)
        colunaAcoes.appendChild(botaoAtendimento)
        colunaAcoes.appendChild(botaoMedicacao)
        colunaAcoes.appendChild(botaoLiberado)
        colunaAcoes.appendChild(botaoAtualizarSituacao)

        novaLinha.appendChild(colunaSenha)
        novaLinha.appendChild(colunaNome)
        novaLinha.appendChild(colunaCPF)
        novaLinha.appendChild(colunaSituacao)
        novaLinha.appendChild(colunaAcoes)

        return novaLinha
    }

    lidarComSucessoNaAtualizacaoDaSituacao(paciente) {
        const colunaSituacao = document.querySelector(`.js-${paciente.senha}.js-situacao`)
        if (colunaSituacao) {
            const situacaoAnterior = traducoesPaciente[paciente.situacao.estadoAnterior]
            const novaSituacao = traducoesPaciente[paciente.situacao.estadoAtual]
            colunaSituacao.textContent = traducoesPaciente[paciente.situacao.estadoAtual]
            Swal.fire({
                title: 'Situação atualizada',
                text: `A situação de ${paciente.nome} foi atualizada de "${situacaoAnterior}" para "${novaSituacao}"`,
                type: 'success',
                confirmButtonText: 'Obrigado!'
            })
        }
    }

    lidarComErroNaAtualizacaoDaSituacao(paciente) {
        const proximaSituacao = traducoesPaciente[paciente.situacao.proximoEstado]
        Swal.fire({
            title: 'Erro na Situação',
            text: `Ocorreu um erro na hora de atualizar a situação do ${paciente.nome} para "${proximaSituacao}"`,
            type: 'error',
            confirmButtonText: 'Ok, irei verificar!'
        })
    }
}