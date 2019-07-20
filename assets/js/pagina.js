const corpoTabela = buscarElemento('corpoTabela')
const pacientesSalvos = localStorage.getItem(CHAVE_DB)
const pacientesConvertidos = pacientesSalvos ? JSON.parse(pacientesSalvos).map(paciente => new Paciente(...Object.values(paciente))) : undefined
const banco = new Banco(pacientesConvertidos)

const adicionarPaciente = paciente => {
    banco.add(paciente)
    atualizarTabela()
}

const atualizarTabela = () => {
    corpoTabela.innerHTML = banco.pacientes.map((paciente, indice) => `
        <tr class="table-${paciente.pegaCondicaoTabela()}">
            <td>${indice + 1}</td>
            <td>${paciente.nome}</td>
            <td>${paciente.idade}</td>
            <td>${paciente.sexo}</td>
            <td>${paciente.peso}</td>
            <td>${paciente.altura}</td>
            <td>${paciente.imc}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="removerPaciente(${indice})">Remover</button>
            </td>
        </tr>
    `).join('')
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

const limpaFormulario = campos => Object.values(campos).forEach(campo => campo.value = '')

const init = () => atualizarTabela()

const removerPaciente = indice => {
    banco.remove(indice)
    atualizarTabela()
}
