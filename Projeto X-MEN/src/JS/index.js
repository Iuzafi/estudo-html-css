//OBJETIVO 1- Pegar os elementos das listas de personagens

// passo 1- verificar quando o usuário passar o mouse em um deles
const personagens = document.querySelectorAll('.personagem')

// passo 2- adicionar a classe selecionado no personagem que o usuário clicar
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        // passo 3- verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        //OBJETIVO 2 - Modificar o nome, descrição e a imagem quando passar o mouse

        //passo 1- pegar o elemento do personagem grande para adicionar informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande')

        //passo 2- Alterar a imagem grande
        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        //passo 3- Alterar o nome do personagem
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //passo 4- Alterar a descrição do personagem
        const descricaoPersonagem = document.getElementById('descricao-personagem');

        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})