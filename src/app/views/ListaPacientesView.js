export default class ListaPacientesView {
    constructor() {
        this._pacienteCorpoTabela = document.querySelector('.js-corpoTabela')
        this._listaPacientes = []
    }

    adicionaNaTabela(paciente) {
        paciente.gerarSenhaDeAtendimento(this._listaPacientes.length + 1)
        this._pacienteCorpoTabela.appendChild(this.criaNovaLinhaNaTabela(paciente.converterParaObjeto()))
        this._listaPacientes.push(paciente)
    }

    criaNovaLinhaNaTabela(paciente) {
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
        const iconeTriagem = document.createElement('i')
        const iconeAtendimento = document.createElement('i')
        const iconeMedicacao = document.createElement('i')
        const iconeLiberado = document.createElement('i')

        iconeTriagem.classList.add('fas', 'fa-user-nurse')
        iconeAtendimento.classList.add('fas', 'fa-user-md')
        iconeMedicacao.classList.add('fas', 'fa-medkit')
        iconeLiberado.classList.add('fas', 'fa-home')

        colunaSenha.textContent = paciente.senha
        colunaNome.textContent = paciente.nome
        colunaCPF.textContent = paciente.cpf
        colunaSituacao.textContent = paciente.situacao

        botaoTriagem.appendChild(iconeTriagem)
        botaoAtendimento.appendChild(iconeAtendimento)
        botaoMedicacao.appendChild(iconeMedicacao)
        botaoLiberado.appendChild(iconeLiberado)

        botaoTriagem.classList.add('btn', 'btn-primary', 'mr-1')
        botaoAtendimento.classList.add('btn', 'btn-secondary', 'mr-1')
        botaoMedicacao.classList.add('btn', 'btn-success', 'mr-1')
        botaoLiberado.classList.add('btn', 'btn-info')

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

        colunaAcoes.appendChild(botaoTriagem)
        colunaAcoes.appendChild(botaoAtendimento)
        colunaAcoes.appendChild(botaoMedicacao)
        colunaAcoes.appendChild(botaoLiberado)

        novaLinha.appendChild(colunaSenha)
        novaLinha.appendChild(colunaNome)
        novaLinha.appendChild(colunaCPF)
        novaLinha.appendChild(colunaSituacao)
        novaLinha.appendChild(colunaAcoes)

        return novaLinha
    }
}