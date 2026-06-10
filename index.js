const Producto = require("./src/producto");
const Cliente = require("./src/cliente");
const Proveedor = require("./src/proveedor");
const Compra = require("./src/compra");
const Venta = require("./src/venta");
const Reporte = require("./src/reporte");

// PRODUCTOS
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

// CLIENTES
const cliente1 = new Cliente(
    1,
    "Juan Pérez",
    "3548123456"
);

console.log("\n=== CLIENTE REGISTRADO ===");

cliente1.mostrar();

// PROVEEDORES
const proveedor1 = new Proveedor(
    1,
    "Tech Distribuciones",
    "3548555555"
);

console.log("\n=== PROVEEDOR REGISTRADO ===");

proveedor1.mostrar();

// COMPRAS
const compra1 = new Compra(
    1,
    "10/06/2026",
    50000
);

console.log("\n=== COMPRA REGISTRADA ===");

compra1.mostrar();

// VENTAS
const venta1 = new Venta(
    1,
    "10/06/2026",
    30000
);

console.log("\n=== VENTA REGISTRADA ===");

venta1.mostrar();

// REPORTE
const reporte = new Reporte();

console.log("\n=== REPORTE ===");

reporte.generar();