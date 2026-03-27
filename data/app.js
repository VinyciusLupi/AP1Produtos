
import header from '../components/header.js'
import home from '../pages/home.js'
import favoritos from '../pages/favoritos.js'
import { buscarProdutos } from './produtos.js'

document.addEventListener('input', async (e) => {
if (e.target.id === 'search') {
        const termo = e.target.value.toLowerCase()

        const produtos = await buscarProdutos()

        const filtrados = produtos.filter(produto =>
            produto.title.toLowerCase().includes(termo)
        )

        const lista = document.getElementById('lista-produtos')

        lista.innerHTML = filtrados.map(produto => `
            <div class="card">
                <img src="${produto.image}" alt="${produto.title}">
                <h2>${produto.title}</h2>
                <p>Preço: $${produto.price}</p>
                <button id = "btnfav" class="favoritar" data-id="${produto.id}">Favoritar</button>
            </div>
        `).join('')
    }
})


const body = document.querySelector('body')

document.body.innerHTML = header();
document.body.innerHTML += await home();

const btnHome = document.getElementById('home')
const btnFavoritos = document.getElementById('favoritos')

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('favoritar')) {
        const id = e.target.dataset.id
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []

        if (!favoritos.includes(id)) {
            favoritos.push(id)
        }

        localStorage.setItem('favoritos', JSON.stringify(favoritos))

        console.log("Favoritos:", favoritos)
    }
})

btnHome.addEventListener('click', async () => {
    const div = document.createElement('div')
    div.innerHTML = await  home()
    Array.from(document.body.children).slice(1).forEach(child => child.remove())
    body.appendChild(div)
})

btnFavoritos.addEventListener('click', async () => {
    const div = document.createElement('div')
    div.innerHTML = await favoritos()
    Array.from(document.body.children).slice(1).forEach(child => child.remove())
    body.appendChild(div)
})