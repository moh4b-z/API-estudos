const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const functionsClass = require('./module/class')
const root =  new functionsClass.Folder('./study-material/') 


const app = express()

const functions = require('./module/functions')

app.use('/static', express.static('./study-material/'))
app.use((request, response, next) =>{

    response.header('Access-Control-Allow-Origin', '*');
    response.header('Acces-Control-Allow-Methods', 'GET')

    app.use(cors()) 

    next()
})

app.get('/v1/inside/root', cors(), async function(request, response){
    let dados = root.inside()

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})
app.get('/v1/inside/root/file/:file', cors(), async function(request, response){
    let file = request.params.file
    let dados = root.singleFolderSearch(file)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})
app.get('/v1/root/all/file/:file', cors(), async function(request, response){
    let file = request.params.file
    let dados = root.searchAllFiles(file)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})
app.get('/v1/inside/root/folder/:folder', cors(), async function(request, response){
    let folder = request.params.folder
    let dados = root.singleFolderSearch(folder)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})
app.get('/v1/root/all/folder/:folder', cors(), async function(request, response){
    let folder = request.params.folder
    let dados = root.searchAllFolder(folder)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})

const port = process.env.PORT || 8080
app.listen(port, function(){
    console.log('API aguardando requisição ...')
})