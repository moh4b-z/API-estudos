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

const functionsContatos = require('./module/functions.js')

app.use((request, response, next) =>{

    response.header('Acces-Control-Allow-Origin', '*')
    response.header('Acces-Control-Allow-Methods', 'GET')
    app.use(cors())

    next()
})


app.listen('8080', function(){
    console.log('API aguardando requisição ...')
})