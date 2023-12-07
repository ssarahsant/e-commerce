// // armazenamento de funções da pagina home 


// // importação do catalogo
// import { catalogo } from "./dados.js";

// // importação da função for
// import { carregar_produtos, handleClick } from "./funcoes.js";


// // o metodo filter (filtro) recebge uma massa de dados, filtra ela e cria um array com os dados filtrados
// // ex. carrega os produtos conforme as categorias
// // ex. carrega produtos detaques


// // filtra dop catologo tudo que é furadeira
// const categoria_iphone = catalogo.filter(item => item.categoria == "iPhone" && item.home == true)
// const iphone = document.querySelector("div.eletronicos")

// // filtra dop catologo tudo que é furadeira
// const categoria_apple = catalogo.filter(item => item.categoria == "Apple" && item.home == true)
// const apple = document.querySelector("div.eletronicos")

// // filtra dop catologo tudo que é JBL
// const categoria_jbl = catalogo.filter(item => item.categoria == "JBL" && item.home == true)
// const jbl = document.querySelector("div.eletronicos")

// carregar_produtos(categoria_iphone, iphone) // guarda a informação do html
// carregar_produtos(categoria_apple, apple) // guarda a informação do html
// carregar_produtos(categoria_jbl, jbl) // guarda a informação do html

// // importação função do botão
// handleClick()