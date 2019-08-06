export default class Html {

    static buscarElemento = nome => document.querySelector(`.js-${nome}`)

    static buscarForm = () => Html.buscarElemento('form')

    static buscarCampos = () => ({
        nome: Html.buscarElemento('nome'),
        peso: Html.buscarElemento('peso'),
        altura: Html.buscarElemento('altura'),
        imc: Html.buscarElemento('imc')
    })

}
