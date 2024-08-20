const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button =>{
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getattribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso). classList.add('ativo');
    })
})