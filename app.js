const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

const functions = require('./module/functions')

app.use((request, response, next) =>{

    response.header('Acces-Control-Allow-Origin', '*')
    response.header('Acces-Control-Allow-Methods', 'GET')

    app.use(cors()) 

    next()
})

app.get('/v1/teste', cors(), async function(request, response){
    let dados = functions.teste()

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
})
app.get('/v1/teste', cors(), async function(request, response){
    let statusAC = request.query.sac
    let nCurso = request.query.nc
    let statusA = request.query.sa
    let anoDC = request.query.adc

    let dados = LionSchool.filtro(statusAC, nCurso, statusA, anoDC)


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