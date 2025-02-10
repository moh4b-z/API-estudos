'use sticpt'

import {produtos} from "./produtos.js"

const disciplinas = [
    {name: 'PPDM', img: 'icons_facebook.png', color: '#ffc0cb'},
    {name: 'PRO', img: 'icons_google.png', color: '#ff0000'},
    {name: 'PWBE', img: 'icons_instagram.png', color: '#0000ff'},
    {name: 'PWFE', img: 'icons_mail.png', color: '#8a2be2'}
]

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

    lista.appendChild(novoItem)

}

function criarCards(dados){
    const listaProdutos = document.getElementById('produtos')
    const novoCard = document.createElement('div')
    novoCard.classList.add("card")

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


    h2Card.textContent = dados.name
    spanCard.textContent = dados.description
    imgCard.src = `./img/${dados.image}`
    spanDivCard.textContent= `R$: ${dados.price}`
    novoCard.style = `--cor-card: #${dados.color};`
    h4DivCard.textContent = 'Size'
    buttonCard.textContent = 'ADD TO CART'

    listaProdutos.appendChild(novoCard)
}

disciplinas.forEach(criarMenu)
produtos.products.forEach(criarCards)