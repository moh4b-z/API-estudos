const arrContatos = require('../simulando-banco-de-dados/contatos')
const arrUsers = arrContatos.contatos['whats-users']

function getListAllUserPersonalData(number){
    let numberUser = number
    let objetoRetorno = {id: 0, account:"", dateStart: "", dateEnd: "", number: numberUser}
    let status = false

    arrUsers.forEach(function(user){
        if(user.number == numberUser){
            status = true
            objetoRetorno.id = user.id
            objetoRetorno.account = user.account
            objetoRetorno.dateStart = user['created-since'].start
            objetoRetorno.dateEnd = user['created-since'].end
        }
    })

    return status ? objetoRetorno : status
}
// console.log(listAllUserPersonalData("11987876567"))

function getListUserProfileAccountData(number){
    let numberUser = number
    let objetoRetorno = {nickname:"", profileImage: "", background: ""}
    let status = false

    arrUsers.forEach(function(user){
        if(user.number == numberUser){
            status = true
            objetoRetorno.background = user.background
            objetoRetorno.nickname = user.nickname
            objetoRetorno.profileImage = user['profile-image']
        }
    })

    return status ? objetoRetorno : status
}
// console.log(listUserProfileAccountData("11987876567"))

function getListContactDetailsForEachUser(number){
    let numberUser = number
    let objetoRetorno = {number: numberUser, contacts: []}
    let status = false

    arrUsers.forEach(function(user){
        if(user.number == numberUser){
            status = true
            user.contacts.forEach(function(contact){
                let objetoRetornoB = {name: "", description: "", image: ""}
                objetoRetornoB.name = contact.name
                objetoRetornoB.description = contact.description
                objetoRetornoB.image = contact.image
                objetoRetorno.contacts.push(objetoRetornoB)
            })
        }
    })

    return status ? objetoRetorno : status
}
// console.log(getListContactDetailsForEachUser("11987876567"))

function getListsEachUsersConversations(number){
    let numberUser = number
    let objetoRetorno = {number: numberUser, contacts:[]}
    let status = false

    arrUsers.forEach(function(user){
        if(user.number == numberUser){
            status = true
            objetoRetorno.contacts = user.contacts
        }
    })

    return status ? objetoRetorno : status
}
// console.log(getListsEachUsersConversations("11987876567"))

function getFilterByUsernameAndContactName(number, name){
    let numberUser = number
    let nameContact = name
    let objetoRetorno = {number: numberUser, messages:[]}
    let status = false

    arrUsers.forEach(function(user){
        if(user.number == numberUser){
            user.contacts.forEach(function(contact){
                if(nameContact == contact.name){
                    status = true
                    objetoRetorno.messages = contact.messages
                }
            })
        }
    })

    return status ? objetoRetorno : status
}
// console.log(getFilterByUsernameAndContactName("11987876567", "Ana Maria"))

function getFilterKeywordResearch(number, name, word){
    let numberUser = number
    let nameContact = name
    let conversationWord = word.toLowerCase()
    let objetoRetorno = {number: numberUser, contact: nameContact, messages:[]}
    let status = false

    arrUsers.forEach(function(user){
        if(user.number == numberUser){
            user.contacts.forEach(function(contact){
                if(nameContact == contact.name){
                    contact.messages.forEach(function(message){
                        if(message.content.toLowerCase().includes(conversationWord)){
                            status = true
                            objetoRetorno.messages.push(message)
                        }
                    })
                }
            })
        }
    })

    return status ? objetoRetorno : status
}
// console.log(getFilterKeywordResearch("11987876567", "Ana Maria", "You"))

function getFilterAll(number, name, word){
    let retorno = false
    if(number && name && word){
        retorno = getFilterKeywordResearch(number, name, word)
    }else if(number && name && !word){
        retorno = getFilterByUsernameAndContactName(number, name)
    }else if(number && !name && !word){
        retorno = getListsEachUsersConversations(number)
    }
    return retorno
}

module.exports = {
    getListAllUserPersonalData,
    getListContactDetailsForEachUser,
    getListUserProfileAccountData,
    getFilterAll
}