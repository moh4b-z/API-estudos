'use sticpt'

import {produtos} from "./produtos.js"

const disciplinas = [
    {name: 'Touca', img: 'icons_facebook.png', tag: "Touca", color: '#ffffff'},
    {name: 'Camisa', img: 'icons_google.png', tag: "Camisa", color: '#ffffff'},
    {name: 'Calça', img: 'icons_instagram.png', tag: "Calca", color: '#ffffff'},
    {name: 'Tênis', img: 'icons_mail.png', tag: "Tenis", color: '#ffffff'}
]
const sizes = ["XS", "S", "M", "L", "XL"]

function criarSize(tamanhoQueExite, tamanhosQueTem, listaQueVaicolocar) {
    const ul = listaQueVaicolocar

    tamanhoQueExite.forEach(texto => {
        const li = document.createElement("li")
        li.textContent = texto
        if (tamanhosQueTem.includes(texto)) {
            li.style.fontWeight = "bold"
        }

        ul.appendChild(li)
    })
}

function criarMenu(disciplina){
    const novoItem = document.createElement('li')
    const novoImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novoImagem.src = `./icon/${disciplina.img}`
    novoSpan.textContent = disciplina.name

    novoItem.appendChild(novoImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-houver: ${disciplina.color}9d;`

    novoItem.addEventListener('click', () => filtrarCards(disciplina.tag))

    lista.appendChild(novoItem)

}
let foiClidao = ""
function filtrarCards(tag) {
    const cards = document.querySelectorAll('.card')

    if(foiClidao == "" || foiClidao != tag){
        cards.forEach(card => {
            const tagCard = card.dataset.tag
    
            if (tagCard === tag) {
                card.style.display = "flex"
            } else {
                card.style.display = "none"
            }
        })
        foiClidao = tag
    }else if(foiClidao == tag){
        cards.forEach(card => {
            card.style.display = "flex"  
        })
        foiClidao = ""
    }
    
}


function criarCards(produto){
    const listaProdutos = document.getElementById('produtos')
    const novoCard = document.createElement('div')
    novoCard.classList.add("card")

    novoCard.dataset.tag = produto.tag

    const conteudoCard = document.createElement('div')
    conteudoCard.classList.add("conteudo")
    novoCard.appendChild(conteudoCard)
    const buttonCard = document.createElement('button')
    novoCard.appendChild(buttonCard)

    const h2Card = document.createElement('h2')
    conteudoCard.appendChild(h2Card)
    const spanCard = document.createElement('span')
    conteudoCard.appendChild(spanCard)
    const imgCard = document.createElement('img')
    conteudoCard.appendChild(imgCard)
    const divCard = document.createElement('div')
    conteudoCard.appendChild(divCard)

    const spanDivCard = document.createElement('span')
    divCard.appendChild(spanDivCard)
    const h4DivCard = document.createElement('h4')
    divCard.appendChild(h4DivCard)
    const ulDivCard = document.createElement('ul')
    divCard.appendChild(ulDivCard)

    criarSize(sizes, produto.size, ulDivCard)


    h2Card.textContent = produto.name
    spanCard.textContent = produto.description
    imgCard.src = `./img/${produto.image}`
    spanDivCard.textContent= `R$: ${produto.price}`
    novoCard.style = `--cor-card: #${produto.color};`
    h4DivCard.textContent = 'Size'
    buttonCard.textContent = 'ADD TO CART'

    listaProdutos.appendChild(novoCard)
}

disciplinas.forEach(criarMenu)
produtos.products.forEach(criarCards)