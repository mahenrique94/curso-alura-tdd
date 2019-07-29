import Paciente from './Paciente'

describe('Testando modelo Paciente', () => {
    it('Deve criar um novo objeto sem dar erro', () => {
        const novoPaciente = new Paciente('João', 20, 'M', 91, 1.87)
        expect(novoPaciente.nome).to.equal('João')
    })

    it('Testando situação de peso do cliente', () => {
        const novoPaciente = new Paciente('João', 20, 'M', 91, 1.87)
        expect(novoPaciente.imc).to.equal('26.02')
        expect(novoPaciente.situacao).to.equal('Sobrepeso')
        expect(novoPaciente.pegaCondicaoTabela()).to.equal('warning')
    })
})
