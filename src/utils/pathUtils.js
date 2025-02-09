const Folders = require('../services/model/Folder')
const Files = require('../services/model/File')

const urlraiz = 'https://api-estudos.onrender.com'
const urlHTML = 'https://api-estudos.onrender.com/static/'


function teste(){
    objectReturn = {file: `${urlHTML}SENAI-2024-2025/2- Front-end 2° semestre/7- layout_figma-bb/index.html`}
    return objectReturn
}

function pathTransformedLink(path) {
    let link = path.replace('../study-material/', urlHTML)
    link = path.replace('study-material/', urlHTML)
    return link === path ? false : link
}

module.exports = {
    pathTransformedLink
}
