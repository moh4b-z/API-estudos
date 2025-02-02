const fs = require('fs')
const path = require('path')

class Folder {
    constructor(folderPath) {
        this.path = folderPath
    }

    inside() {
        return fs.readdirSync(this.path, { withFileTypes: true })
    }

    singleFolderSearch(nameFolder, exception) {
        let objectReturn = false
        let foldersToCheck = []
        let items = this.inside()

        items.forEach((Dirent) => {
            if (Dirent.isDirectory()) {
                let folderPath = path.join(this.path, Dirent.name)
                
                if (Dirent.name === nameFolder) {
                    objectReturn = { name: Dirent.name, path: folderPath }
                } else if (!exception || Dirent.name !== exception) {
                    foldersToCheck.push(folderPath)
                }
            }
        })

        if (!objectReturn && foldersToCheck.length > 0) {
            for (let folder of foldersToCheck) {
                let newRoot = new Folder(folder)
                objectReturn = newRoot.singleFolderSearch(nameFolder, exception)
                if (objectReturn) break
            }
        }
        return objectReturn
    }
}

module.exports = Folder
