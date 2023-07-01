const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');
const { jwtValidMDW, userIsAdminMDW } = require('../middleware/auth-mdw');

router.post('/', userController.createUserController);

router.get('/:userId',jwtValidMDW, userController.getUserController);

router.put('/:userId', userController.putUserController);

router.post('/:userId/ticket', userController.createTicketController);

module.exports = router;