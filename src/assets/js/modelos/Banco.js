const CHAVE_DB = 'AluraSaude'

class Banco {

    constructor(pacientes = []) {
        this.pacientes = pacientes
    }

    connect() {
        const pacientesSalvos = localStorage.getItem(CHAVE_DB)
        const pacientesConvertidos = pacientesSalvos ? JSON.parse(pacientesSalvos).map(paciente => new Paciente(...Object.values(paciente))) : []
        this.pacientes = pacientesConvertidos
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
