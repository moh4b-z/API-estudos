const SearchService = require('../services/SearchService')


function getSearchWith (request, response) {
    let Path = request.query.pa
    let File = request.query.fi
    let Folder = request.query.fo
    let Exception = request.query.e
    let Name = request.query.name
    // console.log(Folder) 
    let dados = SearchService.searchWith(Path, File, Folder, Exception, Name)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
}
function getSearchAll (request, response) {
    let Path = request.query.pa
    let File = request.query.fi
    let Folder = request.query.fo
    let Exception = request.query.e
    let Name = request.query.name
    // console.log(Folder) 
    let dados = SearchService.searchAll(Path, File, Folder, Exception, Name)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
}
function getSingleSearch (request, response) {
    let Path = request.query.pa
    let File = request.query.fi
    let Folder = request.query.fo
    let Exception = request.query.e
    let Name = request.query.name
    // console.log(Folder) 
    let dados = SearchService.singleSearch(Path, File, Folder, Exception, Name)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': "Not found"})
    }
}


module.exports = {
    getSearchWith,
    getSearchAll,
    getSingleSearch
}