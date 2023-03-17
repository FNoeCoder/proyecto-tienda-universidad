const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();
const controladorAdmin =require('../controlles/admin');


router.get('/agregar-producto', controladorAdmin.getAgregarProducto);
router.get('/productos',controladorAdmin.getProductos);
router.post('/producto', controladorAdmin.postAgregarProducto);

module.exports = router;






