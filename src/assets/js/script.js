$(document).ready(() => {
    $('.js-cpf').mask('000.000.000-00')
    $('.js-dataNascimento').mask('00/00/0000')

    $('.js-form').validate({
        errorPlacement: (errors, elements) => {
            const [error] = errors
            const [element] = elements
            $(element)
                .addClass('is-invalid')
                .next()
                .removeClass('d-none')
                .text($(error).text())
        },
        focusCleanup: true,
        messages: {
            nome: {
                maxlength: 'Nome do paciente não pode ter mais de 120 letras',
                required: 'Nome do paciente é obrigatório'
            },
            cpf: {
                minlength: 'CPF deve estar no formato XXX.XXX.XXX-XX',
                maxlength: 'CPF deve estar no formato XXX.XXX.XXX-XX',
                required: 'CPF do paciente é obrigatório'
            },
            dataNascimento: {
                minlength: 'Data de Nascimento deve estar no formato XX/XX/XXXX',
                maxlength: 'Data de Nascimento deve estar no formato XX/XX/XXXX',
                required: 'Data de Nascimento é obrigatória'
            },
            estadoDoPaciente: {
                required: 'Descrição do estado do paciente é obrigatória'
            }
        },
        rules: {
            nome: {
                maxlength: 120,
                required: true
            },
            cpf: {
                minlength: 14,
                maxlength: 14,
                required: true
            },
            dataNascimento: {
                minlength: 10,
                maxlength: 10,
                required: true
            },
            estadoDoPaciente: {
                required: true
            }
        },
        success: (_, element) => {
            $(element)
                .removeClass('is-invalid')
                .next()
                .addClass('d-none')
                .empty()
        }
    })

    $('.js-corpoTabela').on('DOMSubtreeModified', () => $('[data-toggle="tooltip"]').tooltip())
})
