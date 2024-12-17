const fs = require('fs')
const path = require('path')
const objectClass = require('./class')

const urlraiz = 'https://api-estudos.onrender.com'
const urlHTML = 'https://api-estudos.onrender.com/static/'

function teste(){
    objectReturn = {file: `${urlHTML}SENAI-2024-2025/2- Front-end 2° semestre/7- layout_figma-bb/index.html`}
    return objectReturn
}

function searchWith(Path, File, Folder, Exception, Tex){
    let path = Path ? Path : './study-material/'
    let root = new objectClass.Folder(path)
    let file = File
    let folder =  Folder
    let exception = Exception
    let tex = Tex
    let objectReturn = false
    if(file && folder){
        objectReturn = root.searchAllWith(tex, exception)
    }else if(file){
        objectReturn = root.searchAllFilesWith(tex, exception)
    }else if(folder){
        objectReturn = root.searchAllFolderWith(tex, exception)
    }else{
        objectReturn = false
    }
    

    return objectReturn
}

function pathTransformedLink(path){
    let link = path.replace('./study-material/', urlHTML)
    return link == path ? false : link
}
function DirectoryOrFile(namePath){

}


module.exports = {
    searchWith,
    pathTransformedLink
}