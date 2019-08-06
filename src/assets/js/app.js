import Html from './utilitarios/html.js'
import Http from './utilitarios/http.js'
import Pagina from './utilitarios/Pagina.js'
import Paciente from './modelos/Paciente.js'
import Validacao from './utilitarios/Validacao.js'

export default class App {

    constructor() {
        this.campos = Html.buscarCampos()
        this.form = Html.buscarForm()
        this.importar = Html.buscarElemento('importar')
        this.atributosParaValidar = [
            'min',
            'max',
            'maxlength',
            'required',
            'type'
        ]
        this.pagina = new Pagina()
    }

    validarCampos = () => {
        Object.values(this.campos).forEach(campo => {
            if (!campo.readOnly) {
                const atributos = campo.getAttributeNames()
                const atributosDeValidacao = atributos.filter(atributo => this.atributosParaValidar.includes(atributo))
                if (atributosDeValidacao.length) {
                    campo.addEventListener('blur', () => {
                        Validacao.validaCampo(campo, atributosDeValidacao)
                        Validacao.validaBotao(this.form)
                    })
                }
            }
        })
    }

    verificarAtualizacaoImc = () => {
        if (this.campos.peso && this.campos.altura) {
            this.campos.altura.addEventListener('input', () => this.pagina.atualizarIMC(this.campos.altura, this.campos.peso, this.campos.imc))
            this.campos.peso.addEventListener('input', () => this.pagina.atualizarIMC(this.campos.altura, this.campos.peso, this.campos.imc))
        }
    }

    adicionarListenerNoFormulario = () => {
        if (this.form) {
            this.form.addEventListener('submit', event => {
                event.preventDefault()
                const novoPaciente = new Paciente(
                    this.campos.nome.value,
                    this.campos.peso.value,
                    this.campos.altura.value
                )
                this.pagina.adicionarPaciente(novoPaciente)
                this.pagina.limpaFormulario(this.campos)
            })
        }
    }

    adicionarListenerNoImportar = () => {
        if (this.importar) {
            this.importar.addEventListener('click', () => {
                Http.importarPacientes()
                    .then(json => {
                        json.result.forEach(registro => {
                            const pacienteImportado = new Paciente(registro.nome, registro.peso, registro.altura)
                            this.pagina.adicionarPaciente(pacienteImportado)
                        })
                    })
            })
        }
    }

    iniciarPagina = () => {
        this.validarCampos()
        this.verificarAtualizacaoImc()
        this.adicionarListenerNoFormulario()
        this.adicionarListenerNoImportar()
        this.pagina.iniciar()
    }

}
