import { calcTotal } from "./funcoes.js"
// para adicionar na pagina do carrinho os produtos desejados


// criação de uma lista de compras (array) 
// incializa a lista para recuperar a informação do lolcastoroge, onde possui os intem selecionados para compra
// permite que exista somente um carrinho de compras, para não criar um toda vez que for recarregada a pagina
let carrinho_compras = JSON.parse(localStorage.getItem('carrinho'))
console.log(carrinho_compras)

// Estrutura de Decisão ( verifica se o carrinho de compra não existi na primeira compra, para ele ser criado)
if (carrinho_compras == null) {
    carrinho_compras = []
}
// se o carrinho de compra já existir existir o procedimento segue normalmente com as informações salvas 




// CRIAÇÃO DA LISTA DE PEDIDOS
// recupera a lista de pedidos do local storoge
let pedidos = JSON.parse(localStorage.getItem("pedidos"))
// se a lista de pedidos ainda é inexistente
if (pedidos == null) {
    // cria a lista
    pedidos = []
}


// a selecionar o local onde será colocado os pedidos deverá (nome da div/HTML do carrinho
let itens_carrinho = document.querySelector('div.compra-produtos')


// carrega os itens do carrinho de compras na página
carrinho_compras.forEach(item => {
    let html_carrinho = 
    `<div class="cart_item" id="${item.id}">
    <div class="imagem-produto" id="${item.id}">
    <img src="${item.imagem}" alt="Produto do Carrinho">
    </div>

    <div class="info-compra">
        <div class="nome-produto">
            <h4>${item.nome}</h4>
        </div>
        
        <div class="valor-prod">
            <h4>R$ ${item.promocao}0</h4>
        </div>
        
        <div class="quantidade">
            <input type="number" value="1"> 
        </div>
    </div>

    <div class="excluir">
    <i class="fa-solid fa-trash"></i> <a href="carrinho.html"></a> 
    </div>
    </div>`

    itens_carrinho.innerHTML += html_carrinho
});


// FUNÇÃO PARA RETIRAR ITEM DO CARRINHO (html e array)

//1. TIRAR O ITEM DO CODIGO HTML
//capturar o clique do item de lata (que ta numa div filha) para alcançar a div mãe e remover todo o código
// seleciona a classe do icone de lixo
let botao_deletar = document.querySelectorAll("div.excluir")


// usar um escutador para todos os incones de lixeira ao serem clicados executar uma função
// pegar a div do icone e a div pai
// Estrutura de Repetição que percorre todos os botões e quando ocorrer o clique uma função é executada 
botao_deletar.forEach(botao => botao.addEventListener('click', (event) => {
    // armazena O html do item selecionado em uma variavel
    let item_excluido = event.target.parentNode.parentNode
    console.log(item_excluido)
    // remove da lista de compras somente o html do item selecionado atraves do icone da lixeira
    itens_carrinho.removeChild(item_excluido)

    //2. TIRAR O ITEM DO HTML
    // determina o id do produto selecionado para ser removido
    // acessa o carrinho de compras para buscar o id do produto que será removido e compara com o id do catalogo
    let index = carrinho_compras.findIndex(produto => produto.id == item_excluido.id)
    

    // para remover do carrinho de compras se usa o splice, que é uma funcionalidade do array
    // receber como parametro o indice do produto buscado anteriormente, remove um item somente
    carrinho_compras.splice(index, 1)

    // atualiza o carrinho de compras na memoria do computador (removendo tambem da memoria)
    localStorage.setItem('carrinho', JSON.stringify(carrinho_compras))
    console.log(carrinho_compras)
}))



// FUNÇÃO DE FINALIZAR E GERAR O PEDIDO
//  quando ocrrer um clique no botão de finalizar pega as informações do cliente e sua compra
// gera as informações do pedido e gera uma nova lista de pedidos

// seleciona a classe do botão
let finalizar = document.querySelectorAll("div.input-botao")
// adicona um evento para fechar o pedido no botão de finalizar 
finalizar.forEach(botao => botao.addEventListener('click', ()=> {
    // quando ocrrer o click a seguinte função

    // captura as informações do fomulário
    // criação um objeto que vai armazenar as informações do endereço
    let endereco = {
        // chave: valor armazenado
        nome: document.querySelector("input#destinatario").value,
        rua: document.querySelector("input#rua").value,
        bairro: document.querySelector("input#bairro").value,
        cidade: document.querySelector("input#cidade").value,
        cep: document.querySelector("input#cep").value,
        numero: document.querySelector("input#numero").value,
        complemento: document.querySelector("input#complemento").value,
        estado: document.querySelector("input#estado").value
    }

    // definição do código do pedido, de acordo com a lista de pediso ja existente
    
    // código do pedido é igual o tamanho da lista de pedido + 1
    let codigo_pedido = (pedidos.length) + 1
    // se a lista de pedidos for nula ou igual a zero (nenhum pedido existente)
    if(pedidos == null || pedidos == 0){
        // o pedido sera igual a 1
        codigo_pedido = 1
    }

    // construção do pedido unitário 
    // objeto que possui {as propriedades: que recebem valores}
    let pedido = {
        itens: carrinho_compras, 
        endereco: endereco,
        id: codigo_pedido
    } // crio um objeto que guarda uma lista de produtos e o endereco do comprador
    pedidos.push(pedido) // adiciona o pedido na lista de pedidos
    localStorage.setItem('pedidos',JSON.stringify(pedidos)) // salva na memoria a lista de pedidos para recuperar futuramente
   
    alert('pedido concluido com sucesso')
    localStorage.removeItem('prodID')
    localStorage.removeItem('carrinho')
    location.reload()
}))

calcTotal(carrinho_compras)