'use script'


async function pesquisarFotos(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    
    const response = await fetch(url)
    const data = await response.json()
    const fotos = data.message

    console.log(fotos)
    
    return fotos
}


async function preencherFotos (){
    const raca = document.getElementById('raca').value
    const Fotos = await pesquisarFotos(raca)
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