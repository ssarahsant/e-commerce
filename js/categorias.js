// importação do catalogo
import { catalogo } from "./dados.js";

// importação da função for
import { carregar_produtos, handleClick } from "./funcoes.js";


// filtra dop catologo tudo que é furadeira
const lista_iphone = catalogo.filter(item => item.categoria == "iPhone" && item.home == false)
const ip = document.querySelector("#iphone")

// filtra dop catologo tudo que é JBL
const lista_apple = catalogo.filter(item => item.categoria == "Apple" && item.home == false)
const ap = document.querySelector("#apple")

// filtra dop catologo tudo que é JBL
const lista_jbl = catalogo.filter(item => item.categoria == "JBL" && item.home == false)
const jb = document.querySelector("#jbl")

carregar_produtos(lista_iphone, ip) // guarda a informação do html
carregar_produtos(lista_apple, ap) // guarda a informação do html
carregar_produtos(lista_jbl, jb) // guarda a informação do html


// importação função do botão
handleClick()