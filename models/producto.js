// const fs = require('fs');
// const path = require('path');
const Carrito = require('./carrito');


// const ruta = path.join(
//     path.dirname(process.mainModule.filename),
//         'datos',
//         'productos.json'
//    );
   
// const getProductosDesdeArchivo = (cb) => { 
//     fs.readFile(ruta, (err, fileContent) => {
//         if(err) {
//         cb([]);
//     } else {
//         cb(JSON.parse(fileContent));} 
//     });
//    }

const bd = require("../util/basedatos")



module.exports = class Producto {
    constructor(id, titulo, urlImagen, descripcion, precio) {
        this.id = id;
        this.titulo = titulo;
        this.urlImagen = urlImagen;
        this.descripcion = descripcion;
        this.precio = precio;
        }
        guardar() {
            return bd.execute('INSERT INTO productos (titulo, precio, urlImagen, descripcion) VALUES(?,?,?,?)',
            [this.titulo, this.precio, this.urlImagen, this.descripcion]);
    
        }
    static mostrarTodo(cb) {
    }
    static encontrarPorId (id) {
        return bd.execute('SELECT * FROM productos WHERE productos.id = ?', [id]);
    }
    
    static borrarPorId(id) {

    }

    static mostrarProductos(){
        return bd.pool.execute(`SELECT * FROM productos`, (error, resultados, campos) => {
            if (error) {
              console.log(error);
              return;
            }
            console.log(resultados);
          });
    }
}

