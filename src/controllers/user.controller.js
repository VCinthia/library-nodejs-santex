const { userService } = require('../services')

const createUserController = async (req, res) => {
    try {
        const newUser = await userService.createUserService(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ action: 'createUserController', error: err.message });
    }
};

const createTicketController = async (req, res) => {
    try {
        const user = await userService.createTicketService(req.params.userId, req.body);
        if(!user)  {
            res.status(404).json({ action: 'createTicketController', error: "User Not Found"});
        } else {
            res.json(user);
        }  
    } catch (err) {
        res.status(500).json({ action: 'createTicketController', error: err.message });
    }  
};

const getUserController = async (req, res) => {
    try {
        const user = await userService.getUserService(req.params.userId);
        if(!user)  {
            res.status(404).json({ action: 'getUserController', error: "User Not Found"});
        } else {
            res.json(user);
        }  
    } catch (err) {
        res.status(500).json({ action: 'getUserController', error: err.message });
    }    
    
};

const putUserController = async (req, res) => {
    try {
        const user = await userService.putUserService(req.params.userId, req.body);
        if(!user)  {
            res.status(404).json({ action: 'getUserController', error: "User Not Found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ action: 'putUserController', error: err.message });
    }
};

module.exports = { createUserController, getUserController, putUserController,createTicketController };