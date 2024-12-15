const fs = require('fs')
const path = require('path')

const typeSymbol = Symbol.for('type')

const urlraiz = 'https://api-estudos.onrender.com'
const urlHTML = 'https://api-estudos.onrender.com/static/'


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
                console.log(folderPath)
                
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
        return fs.readFileSync('./functions.js', 'utf-8')
    }
}
// const root = new Folder('../study-material')

// console.log(root.singleFolderSearch('Java'))
// let java = root.singleFolderSearch('C')
// let JJ = new Folder(java.path)
// console.log(JJ.singleFolderSearch('POO'))
// console.log(root.singleFileSearch('index.html'))
// console.log(teste.inside())
module.exports = {
    Folder,
    File
}