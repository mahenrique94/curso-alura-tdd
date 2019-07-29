const buscarElemento = nome => document.querySelector(`.js-${nome}`)

const buscarForm = () => buscarElemento('form')

const buscarCampos = () => ({
    nome: buscarElemento('nome'),
    peso: buscarElemento('peso'),
    altura: buscarElemento('altura'),
    imc: buscarElemento('imc')
})
