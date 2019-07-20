import { buscarElemento } from './html'
import Banco, { CHAVE_DB } from '../modelos/Banco'
import Paciente from '../modelos/Paciente'
import { calcularIMC } from './imc'

const corpoTabela = buscarElemento('corpoTabela')
const pacientesSalvos = localStorage.getItem(CHAVE_DB)
const pacientesConvertidos = pacientesSalvos ? JSON.parse(pacientesSalvos).map(paciente => new Paciente(...Object.values(paciente))) : undefined
const banco = new Banco(pacientesConvertidos)

const removerPaciente = indice => banco.remove(indice)

const adicionarPaciente = paciente => {
    banco.adiciona(paciente)
    atualizarTabela()
}

const atualizarTabela = () => {
    corpoTabela.innerHTML = ''
    banco.pacientes.forEach((paciente, indice) => {
        const novaLinha = document.createElement('tr')
        const colunaBotao = document.createElement('td')
        const btnRemover = document.createElement('button')
        novaLinha.className = `table-${paciente.pegaCondicaoTabela()}`
        novaLinha.innerHTML = `
            <td>${indice + 1}</td>
            <td>${paciente.nome}</td>
            <td>${paciente.idade}</td>
            <td>${paciente.sexo}</td>
            <td>${paciente.peso}</td>
            <td>${paciente.altura}</td>
            <td>${paciente.imc}</td>
        `
        btnRemover.className = 'btn btn-danger btn-sm'
        btnRemover.textContent = 'Remover'
        btnRemover.addEventListener('click', function() {
            removerPaciente(indice)
            this.parentNode.parentNode.remove()
        })
        colunaBotao.appendChild(btnRemover)
        novaLinha.appendChild(colunaBotao)
        corpoTabela.appendChild(novaLinha)
    })
}

const atualizarIMC = (campoAltura, campoPeso, campoIMC) => {
    const valorAlura = campoAltura.value
    const valorPeso = campoPeso.value
    if (valorAlura && valorPeso) {
        const altura = parseFloat(valorAlura)
        const peso = parseFloat(valorPeso)
        campoIMC.value = calcularIMC(peso, altura)
    }
}

const limpaFormulario = campos => Object.values(campos).forEach(campo => {
    campo.value = ''
    campo.classList.remove('is-valid')
})

const init = () => atualizarTabela()

export {
    adicionarPaciente,
    limpaFormulario,
    init,
    atualizarIMC
}