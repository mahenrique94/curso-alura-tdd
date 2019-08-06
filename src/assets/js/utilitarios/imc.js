export default class Imc {

    static calcular = (peso, altura) => (peso / Math.pow(altura, 2)).toFixed(2)

}
