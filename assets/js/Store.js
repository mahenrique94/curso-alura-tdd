const CHAVE_DB = 'AluraSaude'

class Store {

    constructor(pacientes = []) {
        this.pacientes = pacientes
    }

    add(paciente) {
        this.pacientes.push(paciente)
        localStorage.setItem(CHAVE_DB, JSON.stringify(this.pacientes))
    }

    remove(indice) {
        this.pacientes.splice(indice, 1)
        localStorage.setItem(CHAVE_DB, JSON.stringify(this.pacientes))
    }

}
