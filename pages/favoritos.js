import { buscarProdutos } from "../data/produtos.js"

export default async function favoritos() {
    const favoritosIds = JSON.parse(localStorage.getItem('favoritos')) || []
    const produtos = await buscarProdutos()
    const produtosFavoritos = produtos.filter(produto =>
        favoritosIds.includes(String(produto.id))
    )

    return `
    <section id="favoritos">
        <h1>Meus Favoritos</h1>
                    ${produtosFavoritos.map(produto => `
                <div class="card">
                    <img src="${produto.image}" alt="${produto.title}">
                    <h2>${produto.title}</h2>
                    <p>Preço: $${produto.price}</p>
                </div>
            `)}
    </section>`
}