// importra o catogolo
import { catalogo } from "./dados.js";

// importa as função de buscar o produto e importa a função que carrega os produtos de acordo com o catalogo
import {encontra_produto, carrega_pagina, addCarrinho, handleClick} from "./funcoes.js";

import {carregar_relacionados} from "./relacionados.js";

// variavel que armazena na memória  local - vai manter a informação do produto porque guarda a informação 
// na memoria do computador, para que quando a página for recgarregada não se perca o coteudo da variavel
// em outras palavras essa variavel irá salvar as informações dos produtos selecionados na memoria do computador (guarda a id do produto)
let produto_pagina = localStorage.getItem('prodID')
console.log(produto_pagina)

 // função para buscar o produto selecionado pelo usuario em uma página atráves da função botão
let item = encontra_produto(catalogo, produto_pagina)

// carrega o produto desejado (clicado) na página do usuário - semelhante ao link de acesso
// armazena as informações do produto desejado
carrega_pagina(item)

// criação de uma lista de compras (array) 
// incializa a lista para recuperar a informação do lolcastoroge, onde possui os intem selecionados para compra
// permite que exista somente um carrinho de compras, para não criar um toda vez que for recarregada a pagina
let carrinho_compras = JSON.parse(localStorage.getItem('carrinho'))


// Estrutura de Decisão ( verifica se o carrinho de compra não existi na primeira compra, para ele ser criado)
if (carrinho_compras == null) {
    carrinho_compras = []
}
// se o carrinho de compra já existir existir o procedimento segue normalmente com as informações salvas 


// FUNÇÃO QUE ADICIONA NO CARRINHO 
addCarrinho(item, carrinho_compras )


// ARRUMAR OS PRODUTOS ALEATÓRIOS



