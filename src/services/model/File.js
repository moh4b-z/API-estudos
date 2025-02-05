const fs = require('fs')
const path = require('path')

class File {
    constructor(filePath) {
        this.path = filePath
    }

    fileExtension() {
        return path.extname(this.path)
    }

    fileContent() {
        return fs.readFileSync(this.path, 'utf-8')
    }
    pathTransformedLink() {
        let urlHTML = 'https://api-estudos.onrender.com/static/'
        let link = this.path.replace('../study-material/', urlHTML)
        link = this.path.replace('study-material/', urlHTML)
        return link === path ? false : link
    }
}

module.exports = File
