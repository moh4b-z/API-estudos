var chavePix = document.querySelector(".chavepix")
var avisoCopiado = document.querySelector(".copiado")

var entregas = document.querySelectorAll(".diaEntrega");



// adicionarDataAtributo(chavePix, "chave", "deu certo")

chavePix.addEventListener("click", function () {
    copiarDataAtributo(chavePix, "data-chave").then((copiado) => {
        if (copiado) {
            avisoCopiado.classList.add("mostrar")
            
            setTimeout(() => {
                avisoCopiado.classList.remove("mostrar")
            }, 500)
        }
    })
})





entregas.forEach(entrega => {
    let video = entrega.querySelector(".video-player");
    let source = video.querySelector("source");
    let mensagem = entrega.querySelector(".mensagem");

    // Verifica se o 'src' do vídeo está vazio
    if (source.src) {
        video.style.display = "block"; // Mostra o vídeo
        mensagem.style.display = "none"; // Esconde a mensagem
    } else {
        video.style.display = "none"; // Esconde o vídeo
        mensagem.style.display = "block"; // Mostra a mensagem
    }
});





// // Função para copiar o valor
// function copiarDataAtributo(elemento, nomeAtributo) {
//     let valorAtributo = elemento.getAttribute(nomeAtributo)
    
//     return navigator.clipboard.writeText(valorAtributo)
//         .then(() => true)
//         .catch((err) => {
//             console.error("Erro ao copiar:", err)
//             return false
//         })
// }

// // Função para criar e adicionar um data attribute
// function adicionarDataAtributo(elemento, nomeAtributo, valor) {
//     elemento.setAttribute(`data-${nomeAtributo}`, valor)
// }
