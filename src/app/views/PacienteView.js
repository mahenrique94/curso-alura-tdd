import PacienteController from '../controllers/PacienteController.js'
import ListaPacientesView from './ListaPacientesView.js'

export default class PacienteView {
    constructor() {
        this._pacienteForm = document.querySelector('.js-form')
        this._campoNome = document.querySelector('.js-nome')
        this._campoCpf = document.querySelector('.js-cpf')
        this._campoDataNascimento = document.querySelector('.js-dataNascimento')
        this._campoEstadoDoPaciente = document.querySelector('.js-estadoDoPaciente')
        this._listaPacientesView = new ListaPacientesView()
        this._pacienteController = new PacienteController()

        this.lidarComPacienteCriado = this.lidarComPacienteCriado.bind(this)
        this.lidarComPacienteInvalido = this.lidarComPacienteInvalido.bind(this)
    }

    iniciarAplicacao() {
        this._pacienteForm.addEventListener('submit', event => {
            event.preventDefault()
            const novoPaciente = this._pacienteController.criaNovoPaciente(
                this._campoNome.value,
                this._campoCpf.value,
                this._campoDataNascimento.value,
                this._campoEstadoDoPaciente.value
            )
            novoPaciente(this.lidarComPacienteCriado, this.lidarComPacienteInvalido)
        })

        const novoPaciente = this._pacienteController.criaNovoPaciente(
            'Matheus Castiglioni',
            '367.872.198-22',
            '25/05/1994',
            'Fechou a unha na porta do carro'
        )
        novoPaciente(this.lidarComPacienteCriado, this.lidarComPacienteInvalido)
    }

    lidarComPacienteCriado(novoPaciente) {
        this._listaPacientesView.adicionaNaTabela(novoPaciente)
        this.limparFormulario()
        Swal.fire({
            title: 'Atendimento registrado',
            text: `${novoPaciente.nome} foi adicionado na fila de atendimento`,
            type: 'success',
            confirmButtonText: 'Obrigado!'
        })
    }

    lidarComPacienteInvalido() {
        Swal.fire({
            title: 'Paciente inválido',
            text: 'Verifique as informações do paciente, algumas podem estar inválidas',
            type: 'error',
            confirmButtonText: 'Tudo bem, irei verificar!'
        })
    }

    limparFormulario() {
        this._campoNome.value = ''
        this._campoCpf.value = ''
        this._campoDataNascimento.value = ''
        this._campoEstadoDoPaciente.value = ''
    }
}
