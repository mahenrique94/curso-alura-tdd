const buscarElemento = nome => document.querySelector(`.js-${nome}`)

const buscarForm = () => buscarElemento('form')

const buscarCampos = () => ({
    nome: buscarElemento('nome'),
    idade: buscarElemento('idade'),
    sexo: buscarElemento('sexo'),
    peso: buscarElemento('peso'),
    altura: buscarElemento('altura'),
    imc: buscarElemento('imc')
})

export {
    buscarElemento,
    buscarForm,
    buscarCampos
}
