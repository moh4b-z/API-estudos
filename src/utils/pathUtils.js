const Folders = require('../services/FolderService')
const Files = require('../services/FileService')

const urlraiz = 'https://api-estudos.onrender.com'
const urlHTML = 'https://api-estudos.onrender.com/static/'


function teste(){
    objectReturn = {file: `${urlHTML}SENAI-2024-2025/2- Front-end 2° semestre/7- layout_figma-bb/index.html`}
    return objectReturn
}

function searchWith(Path, File, Folder, Exception, Name){
    let path = Path ? Path : './study-material/'
    let root = new Folders(path)
    let file = File
    let folder =  Folder
    let exception = Exception
    let name = Name
    let objectReturn = false
    if(file && folder){
        objectReturn = root.searchAllWith(name, exception)
    }else if(file){
        objectReturn = root.searchAllFilesWith(name, exception)
    }else if(folder){
        objectReturn = root.searchAllFolderWith(name, exception)
    }else{
        objectReturn = false
    }
    

    return objectReturn
}

function pathTransformedLink(path) {
    let link = path.replace('../study-material/', urlHTML)
    link = path.replace('study-material/', urlHTML)
    return link === path ? false : link
}

module.exports = {
    searchWith,
    pathTransformedLink
}
