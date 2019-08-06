import Html from './Html.js'
import Banco from '../modelos/Banco.js'
import Imc from './Imc.js'

export default class Pagina {

    constructor() {
        this.corpoTabela = Html.buscarElemento('corpoTabela')
        this.situacaoTabela = {
            'Atenção': 'warning',
            'Perigo': 'danger'
        }
        this.banco = new Banco()
        this.banco.conectar()
    }

    removerPaciente = indice => this.banco.remove(indice)

    adicionarPaciente = paciente => {
        this.banco.adiciona(paciente)
        this.atualizarTabela()
    }

    atualizarTabela = () => {
        this.corpoTabela.innerHTML = ''
        this.banco.pacientes.forEach((paciente, indice) => {
            const self = this
            const novaLinha = document.createElement('tr')
            const colunaBotao = document.createElement('td')
            const btnRemover = document.createElement('button')
            const classeDaLinha = this.situacaoTabela[paciente.situacaoTipo]
            novaLinha.className = `table-${classeDaLinha}`
            novaLinha.innerHTML = `
                <td>${indice + 1}</td>
                <td>${paciente.nome}</td>
                <td>${paciente.peso}</td>
                <td>${paciente.altura}</td>
                <td>${paciente.imc}</td>
            `
            btnRemover.className = 'btn btn-danger btn-sm'
            btnRemover.textContent = 'Remover'
            btnRemover.addEventListener('click', function() {
                self.removerPaciente(indice)
                this.parentNode.parentNode.remove()
            })
            colunaBotao.appendChild(btnRemover)
            novaLinha.appendChild(colunaBotao)
            this.corpoTabela.appendChild(novaLinha)
        })
    }

    atualizarIMC = (campoAltura, campoPeso, campoIMC) => {
        const valorAlura = campoAltura.value
        const valorPeso = campoPeso.value
        if (valorAlura && valorPeso) {
            const altura = parseFloat(valorAlura)
            const peso = parseFloat(valorPeso)
            campoIMC.value = Imc.calcular(peso, altura)
        }
    }

    limpaFormulario = campos => Object.values(campos).forEach(campo => {
        campo.value = ''
        campo.classList.remove('is-valid')
    })

    iniciar = () => this.atualizarTabela()
}


