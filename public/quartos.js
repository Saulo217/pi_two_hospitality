// modal quartos

btnCadastrar = document.querySelector('#btn-quartos')
modal2 = document.querySelector('#modal-quartos')
btnCancelar = document.querySelector('#botao-cancelar')

btnCadastrar.addEventListener('click', () => {
    modal2.showModal()
    modal2.classList.add('translate2')
})

btnCancelar.addEventListener('click', () => {
    modal2.close()
   
    modal2.classList.remove('translate2')
})