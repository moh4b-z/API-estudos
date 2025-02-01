/*************************************************************************
Objetiv: API para manipular dados de contatos como fosse para o whats
Data: 30/01/2025
Autor: Mohammmad
Versão: 1.0
************************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const functionsContatos = require('./module/functions')

app.use((request, response, next) =>{

    response.header('Acces-Control-Allow-Origin', '*')
    response.header('Acces-Control-Allow-Methods', 'GET')
    app.use(cors())

    next()
})


app.get('/v1/whatsapp/data/user/unalterable/', cors(), async function(request, response){
    let number = request.query.nu
    let dados = functionsContatos.getListAllUserPersonalData(number)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})

app.get('/v1/whatsapp/data/user/editable/', cors(), async function(request, response){
    let number = request.query.nu
    let dados = functionsContatos.getListUserProfileAccountData(number)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})

app.get('/v1/whatsapp/data/contact/user/', cors(), async function(request, response){
    let number = request.query.nu
    let dados = functionsContatos.getListContactDetailsForEachUser(number)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})

app.get('/v1/whatsapp/filter/', cors(), async function(request, response){
    let number = request.query.nu
    let name = request.query.na
    let word = request.query.wo
    let dados = functionsContatos.fetFilterAll(number, name, word)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})


app.listen('8080', function(){
    console.log('API aguardando requisição ...')
})