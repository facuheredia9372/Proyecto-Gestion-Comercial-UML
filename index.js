const Producto = require("./src/producto");

const productos = [];

const producto1 = new Producto(
    1,
    "Teclado",
    15000,
    10
);

productos.push(producto1);

console.log("=== PRODUCTOS REGISTRADOS ===");

productos.forEach(producto => {
    producto.mostrar();
});