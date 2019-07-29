const corpoTabela = buscarElemento('corpoTabela')
const banco = new Banco()
const situacaoTabela = new Map()

banco.connect()
situacaoTabela.set('Atenção', 'warning')
situacaoTabela.set('Perigo', 'danger')

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
        const classeDaLinha = situacaoTabela.get(paciente.situacaoTipo)
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
