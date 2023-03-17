const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const datosAdmin = require('./admin');

const router = express.Router();


const controladorTienda =require('../controlles/tienda')

router.get('/',controladorTienda.getIndex);
router.get('/productos',controladorTienda.getProductos);
router.get('/carrito',controladorTienda.getCarrito);
router.get('/comprar-ahora',controladorTienda.getComprarAhora);
router.get('/ordenes',controladorTienda.getOrdenes);

module.exports = router;









