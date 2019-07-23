import sinon from 'sinon'
import { importarPacientes } from './integracao'
import fetch from 'node-fetch'

describe('Testanado integrações', () => {
    before(() => {
        global.fetch = fetch
    })

    it('Deve retornar uma lista de clientes', async () => {
        const stub = sinon.stub(global, 'fetch')
            .returns(Promise.resolve({
                json: () => Promise.resolve([
                    { nome: 'Test', peso: 81, altura: 1.75 }
                ])
            }))
        const pacientes = await importarPacientes()
        expect(stub).to.have.been.calledOnce
        expect(JSON.stringify(pacientes)).to.be.equal(JSON.stringify([{ nome: 'Test', peso: 81, altura: 1.75 }]))
    })
})
