export default class ListaPacientesController {
    enviarParaProximaSituacao(paciente, proximaSituacaoEsperada) {
        return (onSuccess, onError) => {
            if (paciente.enviarParaAProximaSituacao(proximaSituacaoEsperada)) {
                onSuccess(paciente)
            } else {
                onError(paciente)
            }
        }
    }
}
