document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões com a classe 'btn-proximo'
    const buttons = document.querySelectorAll(".btn-proximo");

    buttons.forEach(function (button) {
        // Adiciona um evento de clique a cada botão
        button.addEventListener("click", function () {
            // Recupera o valor do atributo data-proximo do botão clicado
            const proximo = this.getAttribute("data-proximo");

            // Encontra o passo atual (ativo)
            const passoAtual = document.querySelector(".passo.ativo");

            // Remove a classe 'ativo' do passo atual para escondê-lo
            passoAtual.classList.remove("ativo");

            // Encontra o próximo passo pelo ID usando o valor de data-proximo
            const proximoPasso = document.getElementById("passo-" + proximo);

            // Adiciona a classe 'ativo' ao próximo passo para mostrá-lo
            proximoPasso.classList.add("ativo");
        });
    });
});