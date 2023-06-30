const express = require('express');
const router = express.Router();
const { userController } = require('../controllers')

router.post('/', userController.createUserController);

router.get('/:userId', userController.getUserController);

router.put('/:userId', userController.putUserController);

router.post('/:userId/ticket', userController.createTicketController);

module.exports = router;