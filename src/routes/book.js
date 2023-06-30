const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers')
const { jwtValidMDW, userIsAdminMDW } = require('../middleware/auth-mdw')

router.post('/:bookId', /*jwtValidMDW,*/ userIsAdminMDW, bookController.createBookController);

router.get('/:bookId', jwtValidMDW, bookController.getBookController);

router.put('/:bookId', bookController.putBookController);

module.exports = router;