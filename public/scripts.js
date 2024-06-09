// modal equipe

btnCadastro = document.querySelector('.btn-primary')
modal = document.querySelector('#modal-equipe')
btnCancel = document.querySelector('.botao-cancel')

btnCadastro.addEventListener('click', () => {
    modal.showModal()
    modal.classList.add('translate')
})

btnCancel.addEventListener('click', () => {
    modal.close()
    modal.classList.remove('translate')
})