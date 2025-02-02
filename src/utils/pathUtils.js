const urlHTML = 'https://api-estudos.onrender.com/static/'

function pathTransformedLink(path) {
    let link = path.replace('../study-material/', urlHTML)
    link = path.replace('study-material/', urlHTML)
    return link === path ? false : link
}

module.exports = {
    pathTransformedLink
}
