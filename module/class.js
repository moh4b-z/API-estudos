const fs = require('fs')
const path = require('path')
const typeSymbol = Symbol.for('type')

class Folder{
    constructor(path){
        this.path = path
    }
    inside(){
        let items = fs.readdirSync(this.path, { withFileTypes: true })
        
        return items
    }
    singleFolderSearch(nameFolder){
        let name = nameFolder
        let objectReturn = false
        let items = this.inside()
        let foldersThatWillBeChecked = []
        items.forEach((Dirent) => {
            if(Dirent.isDirectory()){
                let folderPath = path.join(this.path, Dirent.name)
                // console.log(folderPath)
                
                if((Dirent.name) === name){
                    objectReturn = {name: Dirent.name, path: folderPath}
                }else{
                    foldersThatWillBeChecked.push(folderPath)
                }
            }
        })
        if (!objectReturn && foldersThatWillBeChecked.length > 0) {
            for (let folder of foldersThatWillBeChecked) {
                let newRoot = new Folder(folder)
                objectReturn = newRoot.singleFolderSearch(name)
                if (objectReturn) break 
            }
        }
        return objectReturn
    }
    searchAllFolder(nameFolder){
        let name = nameFolder
        let objectReturn = {names: name, paths: []}
        let items = this.inside()
        let foldersThatWillBeChecked = []
        items.forEach((Dirent) => {
            if(Dirent.isDirectory()){
                let folderPath = path.join(this.path, Dirent.name)
                let folderPathObject = {name: Dirent.name, path: folderPath}
                // console.log(folderPath)
                if((Dirent.name) === name){
                    objectReturn.paths.push(folderPathObject)
                }else{
                    foldersThatWillBeChecked.push(folderPath)
                }
            }
        })
        if (foldersThatWillBeChecked.length > 0) {
            for (let folder of foldersThatWillBeChecked) {
                let newRoot = new Folder(folder)
                let newRootObjectReturn = newRoot.searchAllFolder(name)
                if (newRootObjectReturn){
                    objectReturn.paths = objectReturn.paths.concat(newRootObjectReturn.paths)
                } 
            }
        }
        return objectReturn.paths.length > 0 ? objectReturn : false
    }
    singleFileSearch(nameFile){
        let name = nameFile
        let objectReturn = false
        let items = this.inside()
        let foldersThatWillBeChecked = []
        items.forEach((Dirent) => {
            if(Dirent.isFile()){
                let filePath = path.join(this.path, Dirent.name)
                // console.log(filePath)
                
                if(Dirent.name === name){
                    objectReturn = {name: Dirent.name, path: filePath}
                }
            }else if(Dirent.isDirectory()){
                let folderPath = path.join(this.path, Dirent.name)
                // console.log(folderPath)
                foldersThatWillBeChecked.push(folderPath)
            }
        })
        if (!objectReturn && foldersThatWillBeChecked.length > 0) {
            for (let folder of foldersThatWillBeChecked) {
                let newRoot = new Folder(folder)
                objectReturn = newRoot.singleFileSearch(name)
                if (objectReturn) break 
            }
        }
        return objectReturn
    }
    searchAllFiles(nameFile){
        let name = nameFile
        let objectReturn = {names: name, paths: []}
        let items = this.inside()
        let foldersThatWillBeChecked = []
        items.forEach((Dirent) => {
            if(Dirent.isFile()){
                let filePath = path.join(this.path, Dirent.name)
                let filePathObject = {name: Dirent.name, path: filePath}
                // console.log(filePath)
                if(Dirent.name === name){
                    objectReturn.paths.push(filePathObject)
                }
            }else if(Dirent.isDirectory()){
                let folderPath = path.join(this.path, Dirent.name)
                foldersThatWillBeChecked.push(folderPath)
            }
        })
        if (foldersThatWillBeChecked.length > 0) {
            for (let folder of foldersThatWillBeChecked) {
                let newRoot = new Folder(folder)
                let newRootObjectReturn = newRoot.searchAllFiles(name)
                if (newRootObjectReturn){
                    objectReturn.paths = objectReturn.paths.concat(newRootObjectReturn.paths)
                } 
            }
        }
        return objectReturn.paths.length > 0 ? objectReturn : false
    }
}

class File{
    constructor(path, name){
        this.path = path
        this.name = name
    }
    fileExtension(){
        return path.extname(this.name)
    }
    fileContent(){
        return fs.readFileSync(this.path, 'utf-8')
    }
}
// const root = new Folder('../study-material')

// console.log(root.searchAllFiles('index.html'))
// let java = root.singleFolderSearch('C')
// let JJ = new Folder(java.path)
// console.log(JJ.singleFolderSearch('POO'))
// console.log(root.singleFileSearch('index.html'))
// console.log(teste.inside())
module.exports = {
    Folder,
    File
}