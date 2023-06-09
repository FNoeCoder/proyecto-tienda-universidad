const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();
const controladorAdmin =require('../controlles/admin');


router.get('/agregar-producto', controladorAdmin.getAgregarProducto);
router.get('/productos',controladorAdmin.getProductos);
router.post('/producto', controladorAdmin.postAgregarProducto);
router.get('/editar-producto/:idProducto',controladorAdmin.getEditarProducto);
router.post('/editar-producto/',controladorAdmin.postEditarProducto);
router.post('/borrar-producto',controladorAdmin.postBorrarProducto);
module.exports = router;






