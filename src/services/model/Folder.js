const fs = require('fs')
const path = require('path')
const urlraiz = 'https://api-estudos.onrender.com'
const urlHTML = 'https://api-estudos.onrender.com/static/'

class Folder{
    constructor(path){
        this.path = path
    }

    #pathTransformedLink(path) {
        let normalizedPath = path.replace(/\\/g, "/") // Converte "\" para "/"
        let link = normalizedPath.replace("./study-material/", urlHTML).replace("study-material/", urlHTML)
        return link !== normalizedPath ? link : false
    }
    #fileExtension(pathFile) {
        return path.extname(pathFile)
    }

    #fileContent(path) {
        return fs.readFileSync(path, 'utf-8')
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
                let folderPath = path.normalize(path.join(this.path, Dirent.name))
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
                let folderPath = path.normalize(path.join(this.path, Dirent.name))
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
    



    singleFileSearch(nameFile, exception){
        let name = nameFile
        let objectReturn = false
        let items = this.inside()
        let foldersThatWillBeChecked = []
        items.forEach((Dirent) => {
            if(Dirent.isFile()){
                let filePath = path.normalize(path.join(this.path, Dirent.name))
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
                let filePath = path.normalize(path.join(this.path, Dirent.name))
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


    #searchAllFolderWith(letterFolder, exception){
        let letter = letterFolder
        let objectReturn = {excerpt: letter, paths: []}
        let items = this.inside()
        let foldersThatWillBeChecked = []
        let regex = new RegExp(letter, "i")
        items.forEach((Dirent) => {
            if(Dirent.isDirectory()){
                let folderPath = path.normalize(path.join(this.path, Dirent.name))
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
                let newRootObjectReturn = newRoot.#searchAllFolderWith(letter, exception)
                if (newRootObjectReturn){
                    objectReturn.paths = objectReturn.paths.concat(newRootObjectReturn.paths)
                } 
            }
        }
        return objectReturn.paths.length > 0 ? objectReturn : false
    }
    #searchAllFilesWith(letterFolder, exception){
        let letter = letterFolder
        let objectReturn = {excerpt: letter, paths: []}
        let items = this.inside()
        let foldersThatWillBeChecked = []
        let regex = new RegExp(letter, "i")
        items.forEach((Dirent) => {
            if(Dirent.isFile()){
                let filePath = path.normalize(path.join(this.path, Dirent.name))
                let ext = this.#fileExtension(Dirent.name)
                let filePathObject = {
                    name: Dirent.name,
                    path: filePath,
                    extname: ext,
                    link: ext === ".html" ? this.#pathTransformedLink(fullPath) : false,
                    tipe: "file"
                }
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
                let newRootObjectReturn = newRoot.#searchAllFilesWith(letter, exception)
                if (newRootObjectReturn){
                    objectReturn.paths = objectReturn.paths.concat(newRootObjectReturn.paths)
                } 
            }
        }
        return objectReturn.paths.length > 0 ? objectReturn : false
    }
    #searchAllWith(letterFolder, exception) {
        let letter = letterFolder
        let objectReturn = { excerpt: letter, paths: [] }
        let items = this.inside()
        let regex = new RegExp(letter, "i")
    
        items.forEach((Dirent) => {
            let fullPath = path.join(this.path, Dirent.name)
    
            if (Dirent.isFile()) {
                let ext = this.#fileExtension(Dirent.name)
                let filePathObject = {
                    name: Dirent.name,
                    path: fullPath,
                    extname: ext,
                    link: ext == ".html" ? this.#pathTransformedLink(fullPath) : false,
                    tipe: "file"
                }
    
                if (regex.test(Dirent.name)) {
                    objectReturn.paths.push(filePathObject)
                }
            } else if (Dirent.isDirectory()) {
                let folderPathObject = {
                    name: Dirent.name,
                    path: fullPath,
                    tipe: "folder"
                }
    
                if (regex.test(Dirent.name)) {
                    objectReturn.paths.push(folderPathObject)
                }
    
                if (!exception || Dirent.name !== exception) {
                    let newRoot = new Folder(fullPath)
                    let newRootObjectReturn = newRoot.#searchAllWith(letter, exception)
    
                    if (newRootObjectReturn) {
                        objectReturn.paths = objectReturn.paths.concat(newRootObjectReturn.paths)
                    }
                }
            }
        })
    
        return objectReturn.paths.length > 0 ? objectReturn : false
    }

    searchWith(File, Folder, Exception, Name){
        let file = File
        let folder =  Folder
        let exception = Exception
        let name = Name
        let objectReturn = false
        if(file && folder){
            objectReturn = this.#searchAllWith(name, exception)
        }else if(file){
            objectReturn = this.#searchAllFilesWith(name, exception)
        }else if(folder){
            objectReturn = this.#searchAllFolderWith(name, exception)
        }else{
            objectReturn = false
        }
        return objectReturn
    }
    
}

module.exports = Folder
