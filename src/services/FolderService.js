const fs = require('fs')
const path = require('path')

class Folder{
    constructor(path){
        this.path = path
    }
    inside(){
        let items = fs.readdirSync(this.path, { withFileTypes: true })
        
        return items
    }
    
    singleFolderSearch(nameFolder, exception){
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
                }else {
                    if (!exception || Dirent.name !== exception) {
                        foldersThatWillBeChecked.push(folderPath)
                    }
                }
            }
        })
        if (!objectReturn && foldersThatWillBeChecked.length > 0) {
            for (let folder of foldersThatWillBeChecked) {
                let newRoot = new Folder(folder)
                objectReturn = newRoot.singleFolderSearch(name, exception)
                if (objectReturn) break 
            }
        }
        return objectReturn
    }
    searchAllFolder(nameFolder, exception){
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
                }else {
                    if (!exception || Dirent.name !== exception) {
                        foldersThatWillBeChecked.push(folderPath)
                    }
                }
            }
        })
        if (foldersThatWillBeChecked.length > 0) {
            for (let folder of foldersThatWillBeChecked) {
                let newRoot = new Folder(folder)
                let newRootObjectReturn = newRoot.searchAllFolder(name, exception)
                if (newRootObjectReturn){
                    objectReturn.paths = objectReturn.paths.concat(newRootObjectReturn.paths)
                } 
            }
        }
        return objectReturn.paths.length > 0 ? objectReturn : false
    }
    searchAllFolderWith(letterFolder, exception){
        let letter = letterFolder
        let objectReturn = {excerpt: letter, paths: []}
        let items = this.inside()
        let foldersThatWillBeChecked = []
        let regex = new RegExp(letter, "i")
        items.forEach((Dirent) => {
            if(Dirent.isDirectory()){
                let folderPath = path.join(this.path, Dirent.name)
                let folderPathObject = {name: Dirent.name, path: folderPath}
                // console.log(folderPath)
                if(regex.test(Dirent.name)){
                    objectReturn.paths.push(folderPathObject)
                }else {
                    if (!exception || Dirent.name !== exception) {
                        foldersThatWillBeChecked.push(folderPath)
                    }
                }
            }
        })
        if (foldersThatWillBeChecked.length > 0) {
            for (let folder of foldersThatWillBeChecked) {
                let newRoot = new Folder(folder)
                let newRootObjectReturn = newRoot.searchAllFolderWith(letter, exception)
                if (newRootObjectReturn){
                    objectReturn.paths = objectReturn.paths.concat(newRootObjectReturn.paths)
                } 
            }
        }
        return objectReturn.paths.length > 0 ? objectReturn : false
    }



    singleFileSearch(nameFile, exception){
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
                if (!exception || Dirent.name !== exception) {
                    foldersThatWillBeChecked.push(folderPath)
                }
            }
        })
        if (!objectReturn && foldersThatWillBeChecked.length > 0) {
            for (let folder of foldersThatWillBeChecked) {
                let newRoot = new Folder(folder)
                objectReturn = newRoot.singleFileSearch(name, exception)
                if (objectReturn) break 
            }
        }
        return objectReturn
    }
    searchAllFiles(nameFile, exception){
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
                if (!exception || Dirent.name !== exception) {
                    foldersThatWillBeChecked.push(folderPath)
                }
            }
        })
        if (foldersThatWillBeChecked.length > 0) {
            for (let folder of foldersThatWillBeChecked) {
                let newRoot = new Folder(folder)
                let newRootObjectReturn = newRoot.searchAllFiles(name, exception)
                if (newRootObjectReturn){
                    objectReturn.paths = objectReturn.paths.concat(newRootObjectReturn.paths)
                } 
            }
        }
        return objectReturn.paths.length > 0 ? objectReturn : false
    }
    searchAllFilesWith(letterFolder, exception){
        let letter = letterFolder
        let objectReturn = {excerpt: letter, paths: []}
        let items = this.inside()
        let foldersThatWillBeChecked = []
        let regex = new RegExp(letter, "i")
        items.forEach((Dirent) => {
            if(Dirent.isFile()){
                let filePath = path.join(this.path, Dirent.name)
                let filePathObject = {name: Dirent.name, path: filePath}
                // console.log(filePath)
                if(regex.test(Dirent.name)){
                    objectReturn.paths.push(filePathObject)
                }
            }else if(Dirent.isDirectory()){
                let folderPath = path.join(this.path, Dirent.name)
                if (!exception || Dirent.name !== exception) {
                    foldersThatWillBeChecked.push(folderPath)
                }
            }
        })
        if (foldersThatWillBeChecked.length > 0) {
            for (let folder of foldersThatWillBeChecked) {
                let newRoot = new Folder(folder)
                let newRootObjectReturn = newRoot.searchAllFilesWith(letter, exception)
                if (newRootObjectReturn){
                    objectReturn.paths = objectReturn.paths.concat(newRootObjectReturn.paths)
                } 
            }
        }
        return objectReturn.paths.length > 0 ? objectReturn : false
    }


    searchAllWith(letterFolder, exception){
        let letter = letterFolder
        let objectReturn = {excerpt: letter, paths: []}
        let items = this.inside()
        let foldersThatWillBeChecked = []
        let regex = new RegExp(letter, "i")

        items.forEach((Dirent) => {
            if(Dirent.isFile()){
                let filePath = path.join(this.path, Dirent.name)
                let filePathObject = {name: Dirent.name, path: filePath, tipe: 'file'}
                // console.log(filePath)
                if(regex.test(Dirent.name)){
                    objectReturn.paths.push(filePathObject)
                }
            }else if(Dirent.isDirectory()){
                let folderPath = path.join(this.path, Dirent.name)
                let folderPathObject = {name: Dirent.name, path: folderPath, tipe: 'folder'}
                if(regex.test(Dirent.name)){
                    objectReturn.paths.push(folderPathObject)
                }
                if (!exception || Dirent.name !== exception) {
                    foldersThatWillBeChecked.push(folderPath)
                }
            }
        })
        if (foldersThatWillBeChecked.length > 0) {
            for (let folder of foldersThatWillBeChecked) {
                let newRoot = new Folder(folder)
                let newRootObjectReturn = newRoot.searchAllWith(letter, exception)
                if (newRootObjectReturn){
                    objectReturn.paths = objectReturn.paths.concat(newRootObjectReturn.paths)
                } 
            }
        }
        return objectReturn.paths.length > 0 ? objectReturn : false
    }
}

module.exports = Folder
