const Folder = require('../services/model/Folder')

const root = new Folder('../study-material/')

function getInsideRoot (request, response){
    let data = root.inside()
    if (data) {
        response.status(200).json(data)
    } else {
        response.status(404).json(
            { status: 404, message: "Not found" }
        )
    }
}

function getSearchSingleFolder (request, response){
    let folderName = request.query.f
    let exception = request.query.e
    let data = root.singleFolderSearch(folderName, exception)

    if (data) {
        response.status(200).json(data)
    } else {
        response.status(404).json(
            { status: 404, message: "Not found" }
        )
    }
}

function getSearchAllFolder (request, response){
    let Folder = request.query.f
    let exception = request.query.e
    // console.log(Folder)
    let dados = root.searchAllFolder(Folder, exception)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
}

module.exports = {
    getInsideRoot,
    getSearchSingleFolder,
    getSearchAllFolder
}