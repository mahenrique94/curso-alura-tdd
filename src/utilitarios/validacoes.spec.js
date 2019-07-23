import * as validacoes from './validacoes'

describe('Testando validações', () => {
    it('Deve retornar mensagem de campo obrigatório quando não tem valor', () => {
        expect(validacoes.validaObrigatorio('')).to.equal('Preenchiento obrigatório')
    })

    it('Deve retornar mensagem mensagem vazia quando tem valor', () => {
        expect(validacoes.validaObrigatorio('Tem valor')).to.equal('')
    })

    it('Deve retornar mensagem de valor mínimo quando valor passar o máximo', () => {
        expect(validacoes.validaMaximo(30, 3)).to.equal('Valor deve ser menor que 3')
    })

    it('Deve retornar mensagem vazia quando valor não passar o máximo', () => {
        expect(validacoes.validaMaximo(30, 120)).to.equal('')
    })

    it('Deve retornar mensagem de valor máximo quando valor passar o mínimo', () => {
        expect(validacoes.validaMinimo(30, 50)).to.equal('Valor deve ser maior que 50')
    })

    it('Deve retornar mensagem vazia quando valor não passar o mínimo', () => {
        expect(validacoes.validaMinimo(120, 30)).to.equal('')
    })

    it('Deve retornar mensagem de tamanho quando valor passar o permitido', () => {
        expect(validacoes.validaTamanho('Testando', 5)).to.equal('Quantidade de letras deve ser menor que 5')
    })

    it('Deve retornar mensagem vazia quando valor não passar o permitido', () => {
        expect(validacoes.validaTamanho('Testando', 120)).to.equal('')
    })

    it('Deve retornar mensagem de letras quando numero conter letras', () => {
        expect(validacoes.validaTipo('abc123', 'number')).to.equal('O campo não aceita letras')
    })

    it('Deve retornar mensagem vazia quando o numero não tiver letras', () => {
        expect(validacoes.validaTipo('123', 'number')).to.equal('')
    })

    it('Deve retornar mensagem de letras quando letra conter numeros', () => {
        expect(validacoes.validaTipo('abc123', 'text')).to.equal('O campo não aceita números')
    })

    it('Deve retornar mensagem vazia quando o numero não tiver números', () => {
        expect(validacoes.validaTipo('abc', 'text')).to.equal('')
    })
})