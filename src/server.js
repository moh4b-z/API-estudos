const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const path = require('path')

const functionsClass = require('./services/class')
const root =  new functionsClass.Folder('./study-material/') 


const app = express()

const functions = require('./services/functions')

app.use('/static', express.static('./study-material/'))
app.use((request, response, next) =>{

    response.header('Access-Control-Allow-Origin', '*');
    response.header('Acces-Control-Allow-Methods', 'GET')

    app.use(cors()) 

    next()
})

app.get('/v1/inside/root/file/', cors(), async function(request, response){
    let file = request.query.f
    let exception = request.query.e
    let dados = root.singleFolderSearch(file, exception)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})
app.get('/v1/root/all/file/', cors(), async function(request, response){
    let file = request.query.f
    let exception = request.query.e
    let dados = root.searchAllFiles(file, exception)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})


app.get('/v1/file/', cors(), async function(request, response){
    let path = request.query.p
    let dados = functions.pathTransformedLink(path)

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