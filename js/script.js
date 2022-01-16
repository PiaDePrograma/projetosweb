/*
    quando clicar em avançar ,temos que mostrar
    a próxima imagem e esconder as outras.

        a imagem atual começa em 0 pq é a primeira imagem 
        assim que for clicado em avançar preciso mais 1 ao contador de imagem 
        pra poder saber que agora eu vou mostrar a segunda imagem

        esconder todas as imagens
            pegar todas as imagens usando o DOM e tirar a classe mostrar
        
        mostrar a próxima imagem 
            pegar todas as imagens, descobrir qual é a proxima e adicionar a classe 
            mostrar á ela 
*/


const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens(){
    imagensPainel.forEach(imagem=>{
        imagem.classList.remove("mostrar")
    });
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}


setaAvancar.addEventListener('click', function(){
    
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens){
        return;
    }
    
    imagemAtual++;

    esconderImagens();
    mostrarImagem();
});


setaVoltar.addEventListener('click', function(){
    if (imagemAtual===0){
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
});