const fs = require('fs')
const path = require('path')

class File {
    constructor(filePath, name) {
        this.path = filePath
        this.name = name
    }

    fileExtension() {
        return path.extname(this.name)
    }

    fileContent() {
        return fs.readFileSync(this.path, 'utf-8')
    }
}

module.exports = File
