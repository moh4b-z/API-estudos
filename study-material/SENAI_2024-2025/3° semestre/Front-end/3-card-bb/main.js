'use sticpt'

// import {produtos} from "./produtos.js"

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

disciplinas.forEach(criarMenu)