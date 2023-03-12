// passo1 - dar um jeito de pegar o elemento html dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
// passo2 - identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo3 -desmarcar o botao selecionado anteriormente
        desativarBotaoSelecionado();
        // passo4 - marcar o botão como selecionado
        botao.classList.add('selecionado');
        // passo5 - esconder a imagem de fundo anterior
        esconderImagemAtiva();
        
        //passo6 - fazer aparecer a imagem de fundo correspodente ao click
        imagens[indice].classList.add('ativa');
    })
})

function  esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
