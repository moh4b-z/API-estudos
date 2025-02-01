const arrContatos = require('./simulando-banco-de-dados/contatos')
const arrUsers = arrContatos.contatos['whats-users']

function getListAllUserPersonalData(number){
    let numberUser = number
    let objetoRetorno = {id: 0, account:"", dateStart: "", dateEnd: "", number: numberUser}

    arrUsers.forEach(function(user){
        if(user.number == numberUser){
            objetoRetorno.id = user.id
            objetoRetorno.account = user.account
            objetoRetorno.dateStart = user['created-since'].start
            objetoRetorno.dateEnd = user['created-since'].end
        }
    })

    return objetoRetorno
}

// console.log(listAllUserPersonalData("11987876567"))

function getListUserProfileAccountData(number){
    let numberUser = number
    let objetoRetorno = {nickname:"", profileImage: "", background: ""}

    arrUsers.forEach(function(user){
        if(user.number == numberUser){
            objetoRetorno.background = user.background
            objetoRetorno.nickname = user.nickname
            objetoRetorno.profileImage = user['profile-image']
        }
    })

    return objetoRetorno
}

// console.log(listUserProfileAccountData("11987876567"))

function getListContactDetailsForEachUser(number){
    let numberUser = number
    let objetoRetorno = {number: numberUser, contacts: []}

    arrUsers.forEach(function(user){
        if(user.number == numberUser){
            user.contacts.forEach(function(contact){
                let objetoRetornoB = {name: "", description: "", image: ""}
                objetoRetornoB.name = contact.name
                objetoRetornoB.description = contact.description
                objetoRetornoB.image = contact.image
                objetoRetorno.contacts.push(objetoRetornoB)
            })
        }
    })

    return objetoRetorno
}

// console.log(getListContactDetailsForEachUser("11987876567"))

function getListsEachUsersConversations(number){
    let numberUser = number
    let objetoRetorno = {number: numberUser, contacts:[]}

    arrUsers.forEach(function(user){
        if(user.number == numberUser){
            objetoRetorno.contacts = user.contacts
        }
    })

    return objetoRetorno
}

// console.log(listsEachUsersConversations("11987876567"))

function getFilterByUsernameAndContactName(number, name){
    let numberUser = number
    let nameContact = name
    let objetoRetorno = {number: numberUser, messages:[]}

    arrUsers.forEach(function(user){
        if(user.number == numberUser){
            user.contacts.forEach(function(contact){
                if(nameContact == contact.name){
                    objetoRetorno.messages = contact.messages
                }
            })
        }
    })

    return objetoRetorno
}

// console.log(getFilterByUsernameAndContactName("11987876567", "Ana Maria"))

function getFilterKeywordResearch(number, name){
    let numberUser = number
    let nameContact = name
    let objetoRetorno = {number: numberUser, messages:[]}

    arrUsers.forEach(function(user){
        if(user.number == numberUser){
            user.contacts.forEach(function(contact){
                if(nameContact == contact.name){
                    objetoRetorno.messages = contact.messages
                }
            })
        }
    })

    return objetoRetorno
}

// console.log(getFilterKeywordResearch("11987876567", "Ana Maria", "Great"))