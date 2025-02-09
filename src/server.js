const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')

const app = express()

// Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use('/static', express.static('./study-material/'))

// Rotas
// const folderRoutes = require("./routes/folderRoutes")
// const fileRoutes = require("./routes/fileRoutes")
const searchRoutes = require('./routes/searchRoutes')

// app.use("/v1/folders", folderRoutes)
// app.use("/v1/files", fileRoutes)
app.use("/v1/search", searchRoutes)

// Inicia o servidor
const PORT = process.env.PORT || 8080
app.listen(PORT, function(){
  console.log(`Servidor rodando na porta ${PORT}`)
})
