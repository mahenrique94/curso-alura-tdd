import Paciente from '../models/Paciente.js'

export default class PacienteController {

    criaNovoPaciente(nome, cpf, dataNascimento, estado) {
        return (onSucess, onError) => {
            const novoPaciente = new Paciente(nome, cpf, dataNascimento, estado)
            if (novoPaciente.ehValido()) {
                onSucess(novoPaciente)
            } else {
                onError()
            }
        }
    }

}
