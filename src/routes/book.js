const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers')
const { jwtValidMDW, userIsAdminMDW } = require('../middleware/auth-mdw')

// router.get('/', jwtValidMDW, bookController.getBookController);
// router.get('/:bookId', jwtValidMDW, bookController.getBookByIDController);
// router.post('/:bookId', /*jwtValidMDW,*/ userIsAdminMDW, bookController.createBookController);
// router.put('/:bookId', /*jwtValidMDW,*/ userIsAdminMDW, bookController.editBookController);
// router.delete('/:bookId', /*jwtValidMDW,*/ userIsAdminMDW, bookController.deleteBookController);

module.exports = router;