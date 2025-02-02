const pathUtils = require('../utils/pathUtils')


function getPathAndLink (request, response) {
    let path = request.query.p
    let dados = pathUtils.pathTransformedLink(path)

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