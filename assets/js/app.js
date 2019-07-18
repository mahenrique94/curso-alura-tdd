const form = buscarForm()
const campos = buscarCampos()
const importar = buscarElemento('importar')

if (campos.peso && campos.altura) {
    campos.altura.addEventListener('input', () => atualizarIMC(campos.altura, campos.peso, campos.imc))
    campos.peso.addEventListener('input', () => atualizarIMC(campos.altura, campos.peso, campos.imc))
}

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        const novoPaciente = new Paciente(
            campos.nome.value,
            campos.idade.value,
            campos.sexo.value,
            campos.peso.value,
            campos.altura.value,
            campos.imc.value
        )
        adicionarPaciente(novoPaciente)
        limpaFormulario(campos)
    })
}

if (importar) {
    importar.addEventListener('click', () => {
        fetch('http://www.mocky.io/v2/5d2fd6193400003eb664d99a')
            .then(resp => resp.json())
            .then(json => {
                json.result.forEach(registro => {
                    const pacienteImportado = new Paciente(...Object.values(registro))
                    adicionarPaciente(pacienteImportado)
                })
            })
    })
}

init()
