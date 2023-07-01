const express = require('express');
const router = express.Router();
const { libraryController } = require('../controllers');
const { jwtValidMDW, userIsAdminMDW } = require('../middleware/auth-mdw');

router.get('/', jwtValidMDW, libraryController.getLibrariesController);//obtener TODAS
router.get('/:libraryId', jwtValidMDW, libraryController.getByIDLibraryController);//obtener una x ID
router.get('/option/:option', jwtValidMDW, libraryController.getLibraryByCriteriaController);//obtener una x criterio
router.post('/', userIsAdminMDW, libraryController.createLibraryController);//crear una
router.put('/:libraryId', userIsAdminMDW, libraryController.editLibraryController);//editar una x ID
router.delete('/:libraryId', userIsAdminMDW, libraryController.deleteLibraryController);//borrar una x ID

module.exports = router;