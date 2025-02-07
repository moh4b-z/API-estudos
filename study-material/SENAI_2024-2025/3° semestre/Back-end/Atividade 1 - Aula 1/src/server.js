/*************************************************************************
Objetiv: API para manipular dados de contatos como fosse para o whats
Data: 30/01/2025
Autor: Mohammmad
Versão: 1.0
************************************************************************/

const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const whatsRoutes = require("./routes/whatsRoutes")
app.use("/v1/whatsapp", whatsRoutes)


const PORT = process.env.PORT || 8080
app.listen(PORT, function(){
  console.log(`Servidor rodando na porta ${PORT}`)
})