
const getProfileData = () => {
    return MessageArray
}

let MessageArray = [
    { message: 'First post' },
    { message: 'Second post' }
]

const getDialogData = () => {
    return ({
        userData: dialogsData,
        messageData: messageData
    })
}

let dialogsData = [
    { id: 0, userName: 'Vova' },
    { id: 1, userName: 'Vasyl' },
    { id: 2, userName: 'Ivan' }
]

let messageData = [
    { messageText: 'Hi' },
    { messageText: 'Shakal' },
    { messageText: 'WTF' }

]

 let state = {
    Profile: getProfileData(),
    Dialogs: getDialogData()
}

export let addPost = (postMessage) => {
    let post = {message : postMessage }
    MessageArray.push(post);
}

export default state;