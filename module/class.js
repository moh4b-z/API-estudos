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
        items.forEach(function(Dirent){
            if(Dirent[typeSymbol] !== 1 ){
                objectReturn = `${this.path}${Dirent.name}/`
                if(Dirent.name === name){
                    return objectReturn
                }else{
                    foldersThatWillBeChecked.push(objectReturn)
                }
            }
        })
    }
}
const raiz = new Folder('../study-material/')

// console.log(raiz.inside())

module.exports = {
    Folder,
    raiz
}