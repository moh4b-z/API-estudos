const whatsControllers = require('../services/utils/functions')

function getListAllUserPersonalData (request, response){
    let number = request.query.nu
    let dados = whatsControllers.getListAllUserPersonalData(number)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
}
function getListUserProfileAccountData (request, response){
    let number = request.query.nu
    let dados = whatsControllers.getListUserProfileAccountData(number)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
}
function getListContactDetailsForEachUser (request, response){
    let number = request.query.nu
    let dados = functionsContatos.getListContactDetailsForEachUser(number)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
}
function getFilterAll (request, response){
    let number = request.query.nu
    let name = request.query.na
    let word = request.query.wo
    let dados = functionsContatos.getFilterAll(number, name, word)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
}


module.exports = {
    getListAllUserPersonalData,
    getListContactDetailsForEachUser,
    getListUserProfileAccountData,
    getFilterAll
}
