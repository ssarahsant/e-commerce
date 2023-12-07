// FUNÇÕES DESENVOLVIDAS PARA TODAS AS PÁGINAS DO PROJETO


// CARREGAMENTO DE PRODUTOS (HOME E PRODUTOS)
// função que exporta para o projeto e possui dois parametros (lista de produtos e local para armazenar o html)
export function carregar_produtos(lista_produtos, local) {
    // for each simplifica o processo de percorrer o catalogo de produto, dispnesandos os indices
    // recebe o catalogo de produtos e para cada item da lista pega o codigo html com as
    // informações desejadas, adiciona no codigo html executando o mesmo procedimento
    lista_produtos.forEach(produto => {
    
        // variavel que armazena o codigo de cada produto que o for percorre
        let html = 
        `<div class="card">
            <div  class="produto-x" id=${produto.id}>
                <a href="produto_01.html"><img src="${produto.imagem}" alt="" id=${produto.id}> </a>
            </div>
                <a href="produto_01.html" id=${produto.id} <p>${produto.nome}</p> </a>
        </div>` 

        // carrega o coódigo na variavel que será apresenta ao usuário
        local.innerHTML += html
    
    });
}



// BOTÃO INTELIGENTE (PRODUTO)
// função de botão para buscar o id do produto 
export function handleClick(){
    // o produto na tela é carregado com a sua identificação unica estabelecida no array
    // ao clicar em qualquer parte do elemento (seja na imagem, botão ou preço) o código
    // do produto será capturado e buscará as informações do mesmo
    let produtos = document.querySelectorAll ("div.card")
    console.log(produtos)
    // alerta de click (escuta os clicks), que dispara a função de capturar a id dos produtos
    produtos.forEach(prod => prod.addEventListener('click', (evento) => {
        let idProduto = evento.target.id
        console.log(idProduto)
        // guarda a informação de qual elemento foi seleciuonado (clicado)
        localStorage.setItem('prodID', idProduto)
    }))

}



// FUNÇÃO FIND (ENCONTRA_PRODUTO)
// recebe o catalogo do produtos e o codigo do produto desejado e retorna o produto que está sendo acessado conforme a informações do catologo
// (retorna o elemento, encontrado no array conforme os critérios)
export function encontra_produto(produtos, codigo){
    // percorre o array para rerornar o valor desejado - busca no catalogo o produto desejado
    // uma especie de for
    let produto = produtos.find(prod => prod.id == codigo )
    console.log(produto)
    return produto 
}


// FUNÇÃO CARREGA PRODUTO (CARREGA_PRODUTO_PAGINA)
// carrega o produto localizado no html através da função find
export function carrega_pagina(item){
    // comentar o html original
    const info_produto = document.querySelector("#product_container")
    let html = 
    `<div class="imagem" >
    <img src="${item.imagem}" alt="${item.id}">
    </div>

    <div class="produto-info">
    <div class="nome">
        <h1>${item.nome}</h1>
    </div>

    <div class="valor-antigo">
        <p>${item.valor}</p>
    </div>
        
    <div class="valor">
        <p>por R$ ${item.promocao}0</p>
    </div>

    <div class="produto-desc">
        <div class="titulo-descricao">    
            <h3>Descrição</h3>
            <div class="texto">
                <p>${item.descricao}</p>
            </div>
        </div>
    </div>
              
    <div class="botao">
                    
        <div class="quantidade">
            <input type="number" value="1"> 
        </div>
        
       <button type="submit"> ADICIONAR AO CARRINHO </button>

        <div class="icons">
            <i href="#" class="fas fa-heart"></i>
        </div>

    </div> `

info_produto.innerHTML = html

}




// FUNÇÃO QUE ADICIONA NO CARRINHO (recebe o item recebido atraves da página de produto)
export function addCarrinho (item, carrinho_compras) {
  
    // função para pegar o item selecionado que será adicionado na lista de compras
    // o item ao ser crregado anteriormente deve ser adcionada na lista de compras

    // seleção do botão comoprar ( toda vez que clicar no botão será realizada a função.
    // querry selector) *se tiver mais de um botão usa o querryselector.All
    let botao_comprar = document.querySelector('button')


    // Escutador de Eveneto (passagem do evento de clique para o botão realizar um eveneto ou procedimento
    // parametro (evento, funçao_realizada) o evento, será considerado como um objeto que escuta o que aconrteceu que foi o clique => produto + quantidade e adiciona no carrinho
    botao_comprar.addEventListener('click', () => {
        // PARA CAPTURAR O VALOR QUE ESTÁ DENTRO DE UM CAMPO DE INPUT e seu valor
        // o value serve para tranformar o clique em uma quantidade numeral
        // PARSE INT converta o valor capturado para o tipo de dado numero
        // essa quantidade é armazenada na variavel
        let quantidade = parseInt(document.querySelector('input[type="number"]').value)
        console.log(quantidade)
        // para adicionar o valor capturado
        // o item vai ser igual a um novo objeto que armazena o item e a quantidadade em uma só variavel
        // ao junta a informação do produto e sua quantidade  uma variavel
        let novo_produto = {...item, quantidade}
       
        // outra forma de fazer     // item.quant = quantidade
        

        // adiciona o produto desejado no carrinho
        carrinho_compras.push(novo_produto)
        // mensagem 
        alert("O produto foi adicionado no seu carrinho de compras")

        // salvando a lista no localstoroge através dE JSON (chave e valor) para que o objeto fique salvo na memória do PC do usuario
        // uma vez que somente a seuqencia de caracteres podem ser armazenadas com a função locastoroge
        localStorage.setItem('carrinho', JSON.stringify(carrinho_compras))
    })
        
    // adiciona uma propriedade ao objeto nome_objeto.proriedade = valor da propriedade
}

//função para calcular o preço total
export function calcTotal(carrinhoCompras){
    let total = 0;
 
    const totalCarrinho = document.querySelector('.result-total')
 
    totalCarrinho.innerHTML = '';
 
    console.log(totalCarrinho)
 
    carrinhoCompras.forEach(item =>{

        total += (item.promocao * item.quantidade);

        console.log(total)

    })
 
    let totCarrinho = `<h4>R$ ${total.toFixed(2)}</h4>`;

    totalCarrinho.innerHTML += totCarrinho;
 
}