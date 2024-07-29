const users = [];

const addUser = ({ id, username, room }) => {
    // Clear the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate the Data
    if(!username || !room) {
        return {
            error : 'Username and room are required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // validate Username 
    if(existingUser){
        return {
            error : 'Username is in use!!'
        }
    }

    // Store the User
    const user = { id, username, room };
    users.push(user)

    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => {
    return users.find(user => user.id === id);
}

const getUsers = (room) => {
    room = room.trim().toLowerCase()
    const roomUsers = users.filter((user) => user.room === room);
    return roomUsers
}

module.exports = {
    addUser, getUser, getUsers, removeUser
}