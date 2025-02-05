const File = require('../services/model/File')


function getPathAndLink (request, response) {
    let path = request.query.p
    let fileLink = new File(path)
    let dados = fileLink.pathTransformedLink()

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
}


module.exports = {
    getPathAndLink
}