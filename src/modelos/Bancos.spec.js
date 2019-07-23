import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { LocalStorage } from 'node-localstorage'

import Paciente from './Paciente'
import Banco from './Banco'

chai.use(sinonChai)

describe('Testando modelo Banco', () => {
    before(() => {
        global.localStorage = new LocalStorage('')
    })

    it('Deve criar um novo objeto com um array de pacientes vázio', () => {
        const novoBanco = new Banco()
        expect(novoBanco.pacientes.length).to.equal(0)
    })

    it('Deve criar um novo objeto com um array de pacientes existente', () => {
        const pacienteExistente = new Paciente('João', 20, 'M', 91, 1.87)
        const bancoExistente = new Banco([pacienteExistente])
        expect(bancoExistente.pacientes.length).to.equal(1)
    })

    it('Deve adicionar um novo paciente quando chamamos a função adiciona', () => {
        const spy = sinon.spy(localStorage, 'setItem')
        const banco = new Banco()
        const novoPaciente = new Paciente('João', 20, 'M', 91, 1.87)
        banco.adiciona(novoPaciente)
        expect(banco.pacientes.length).to.equal(1)
        expect(spy).to.have.been.calledOnce
        spy.restore()
    })

    it('Deve remover um novo paciente quando chamamos a função adiciona', () => {
        const spy = sinon.spy(localStorage, 'setItem')
        const novoPaciente = new Paciente('João', 20, 'M', 91, 1.87)
        const banco = new Banco([novoPaciente])
        banco.remove(0)
        expect(banco.pacientes.length).to.equal(0)
        expect(spy).to.have.been.calledOnce
        spy.restore()
    })
})
