const fs = require('fs');
const path = require('path');

const ruta = path.join(
path.dirname(process.mainModule.filename),
'datos',
'carrito.json'
);
module.exports = class Carrito {
static agregarProducto(id, precioProducto) {
// Obtener el carrito anterior
fs.readFile(ruta, (err, fileContent) => {
let carrito = { productos: [], precioTotal: 0 };
if(!err) {
carrito = JSON.parse(fileContent);
}
// Analizar el carrito => Encontrar productos existente
const indiceProductoExistente = carrito.productos.findIndex( prod => prod.id === id);
const productoExistente = carrito.productos[indiceProductoExistente];
let productoActualizado;
// Agregar un producto nuevo/ incrementar la cantidad
if (productoExistente) {
productoActualizado = { ...productoExistente };
productoActualizado.cant = productoActualizado.cant + 1;
carrito.productos = [...carrito.productos];
carrito.productos[indiceProductoExistente] = productoActualizado;
} else {
productoActualizado = { id: id, cant: 1 };
carrito.productos = [...carrito.productos, productoActualizado];
}
carrito.precioTotal = carrito.precioTotal + +precioProducto;
fs.writeFile(ruta, JSON.stringify(carrito), err => {
console.log(err);
});
});
}
};