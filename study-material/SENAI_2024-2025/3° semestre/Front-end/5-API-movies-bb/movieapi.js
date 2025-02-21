'use script'


async function pesquisarFotos(movie){
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${movie}`
    
    const response = await fetch(url)
    const data = await response.json()
    const Movies = data.description
    const movieIMG = []
    Movies.forEach(function(filmes){
        movieIMG.push(filmes['#IMG_POSTER'])
    })

    console.log(movieIMG)
    
    return movieIMG
}


async function preencherFotos (){
    const filme = document.getElementById('filme').value
    const Fotos = await pesquisarFotos(filme)
    const galeriaFotos = document.getElementById('galeria')
    galeriaFotos.replaceChildren('')
    Fotos.forEach(criarImg)    
}

function criarImg(url){
    const galeriaFotos = document.getElementById('galeria')
    const novaImagem = document.createElement('img')
    novaImagem.src = url

    galeriaFotos.appendChild(novaImagem)
}

document.getElementById('pesquisar')
        .addEventListener('click', preencherFotos)