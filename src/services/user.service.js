const { userProvider } = require('../providers')

const createUserService = async (user) => {
    return await userProvider.createUser(user);
};

const getUserService = async (userId) => {
    const user = await userProvider.getUser(userId);
    if (user) {
        //Logica de negocio
        console.log(user.firstName);
    }
    return user;
};

const validateUser = async (user, pass) => {
    const userFound = await userProvider.validateUser({user, pass});
    return userFound;
};

const putUserService = async (userId, user) => {
    return await userProvider.putUser(userId, user);
};

const createTicketService = async (userId, ticket) => {
    const user = await userProvider.getUser(userId);
    if (user) {
        const newTicket = await userProvider.createTicket(userId, ticket);
        return newTicket;
    }
    return null;
};


module.exports = { createUserService, getUserService, putUserService, createTicketService, validateUser};