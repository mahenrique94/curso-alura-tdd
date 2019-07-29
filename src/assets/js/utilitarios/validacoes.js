const atributosParaValidar = [
    'min',
    'max',
    'maxlength',
    'required',
    'type'
]

const campoEstaPreenchido = valor => {
    if (valor.trim()) {
        return ''
    }
    return 'Preenchiento obrigatório'
}

const numeroMaiorQueValorMaximo = (valor, maximo) => {
    if (parseFloat(valor || 0) < maximo) {
        return ''
    }
    return `Valor deve ser menor que ${maximo}`
}

const numeroMenorQueValorMinimo = (valor, minimo) => {
    if (parseFloat(valor || 0) > parseFloat(minimo)) {
        return ''
    }
    return `Valor deve ser maior que ${minimo}`
}

const textoMaiorQueValorMaximo = (valor, tamanho) => {
    if (valor.trim().length < tamanho) {
        return ''
    }
    return `Quantidade de letras deve ser menor que ${tamanho}`
}

const valorEhDoTipoCerto = (valor, tipo) => {
    const tiposDeTexto = {
        number: /([aAá-úzZ])/g,
        text: /([\d])/g
    }
    if (tiposDeTexto[tipo].test(valor)) {
        switch (tipo) {
            case 'number':
                return 'O campo não aceita letras'
            case 'text':
                return 'O campo não aceita números'
            default:
                return ''
        }
    }
    return ''
}

const validacoes = {
    required: campoEstaPreenchido,
    min: numeroMenorQueValorMinimo,
    max: numeroMaiorQueValorMaximo,
    maxlength: textoMaiorQueValorMaximo,
    type: valorEhDoTipoCerto
}

const validaCampo = (campo, tipoValidacoes) => {
    let mensagemValidacao = ''
    const ehInvalido = tipoValidacoes.some(tipo => {
        const tipoValidacao = validacoes[tipo]
        const tipoValor = campo.getAttribute(tipo)
        mensagemValidacao = tipoValidacao(campo.value, tipoValor)
        return !!mensagemValidacao
    })
    if (ehInvalido) {
        campo.classList.remove('is-valid')
        campo.classList.add('is-invalid')
        campo.nextElementSibling.classList.remove('d-none')
        campo.nextElementSibling.textContent = mensagemValidacao
    } else {
        campo.classList.remove('is-invalid')
        campo.classList.add('is-valid')
        campo.nextElementSibling.classList.add('d-none')
        campo.nextElementSibling.textContent = ''
    }
}

const validaBotao = formulario => {
    const botao = buscarElemento('salvar')
    if (botao) {
        if (formulario.checkValidity()) {
            botao.removeAttribute('disabled')
        } else {
            botao.setAttribute('disabled', true)
        }
    }
}
