const Folders = require('./model/Folder')

const FolderRoot = './study-material/'

function searchWith(Path, File, Folder, Exception, Name){
    let path = Path ? Path : FolderRoot
    let root = new Folders(path)
    let file = File
    let folder =  Folder
    let exception = Exception
    let name = Name
    let objectReturn = root.searchWith(file, folder, exception, name)
    return objectReturn
}

function singleSearch(Path, File, Folder, Exception, Name){
    let path = Path ? Path : FolderRoot
    let root = new Folders(path)
    let file = File
    let folder =  Folder
    let exception = Exception
    let name = Name
    let objectReturn = root.singleSearch(file, folder, exception, name)
    return objectReturn
}

function searchAll(Path, File, Folder, Exception, Name){
    let path = Path ? Path : FolderRoot
    let root = new Folders(path)
    let file = File
    let folder =  Folder
    let exception = Exception
    let name = Name
    let objectReturn = root.searchAll(file, folder, exception, name)
    return objectReturn
}


module.exports = {
    searchWith,
    singleSearch,
    searchAll
}