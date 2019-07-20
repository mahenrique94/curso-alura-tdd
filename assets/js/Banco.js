const CHAVE_DB = 'AluraSaude'

class Banco {

    constructor(pacientes = []) {
        this.pacientes = pacientes
    }

    adiciona(paciente) {
        this.pacientes.push(paciente)
        localStorage.setItem(CHAVE_DB, JSON.stringify(this.pacientes))
    }

    remove(indice) {
        this.pacientes.splice(indice, 1)
        localStorage.setItem(CHAVE_DB, JSON.stringify(this.pacientes))
    }

}
