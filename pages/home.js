import { buscarProdutos } from "../data/produtos.js"
let produtos = []

export default async function home(){
    produtos = await buscarProdutos()
    return `
    <section id="home">
    <h1>Bem-vindo à nossa loja de produtos!</h1>
    <input type="text" id="search" placeholder="buscar por nome...">

<div id="lista-produtos">
            ${produtos.map(produto => `
                <div id = "div-prod" class="card">
                    <img src="${produto.image}" alt="${produto.title}">
                    <h2>${produto.title}</h2>
                    <p>Preço: $${produto.price}</p>
                    <button id="btnfav" class="favoritar" data-id="${produto.id}">Favoritar</button>
                </div>
            `
        )}
</div>
    </section>`
}