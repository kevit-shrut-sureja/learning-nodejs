const generateMessage = (username, message) => {
    return {
        username,
        text : message,
        createdAt : new Date()
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt : new Date()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}