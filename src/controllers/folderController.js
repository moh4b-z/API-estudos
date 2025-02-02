const Folder = require('../services/FolderService')

const root = new Folder('../study-material/')

const getInsideRoot = (request, response) => {
    let data = root.inside()
    if (data) {
        response.status(200).json(data)
    } else {
        response.status(404).json(
            { status: 404, message: "Not found" }
        )
    }
}

const searchSingleFolder = (request, response) => {
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
};

module.exports = {
    getInsideRoot,
    searchSingleFolder
}