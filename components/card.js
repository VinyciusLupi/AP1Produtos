
export default  function card(produto) {
    return `<div class="card">
    <img src="${produto.image}" alt="${produto.title}">
    <h2>${produto.title}</h2>
    <p>Preço: $${produto.price}</p>
    <button id ="favoritar" data-id="${produto.id}">Favoritar</button>
</div>`
}