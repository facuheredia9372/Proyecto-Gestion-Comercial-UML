class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    mostrar() {
        console.log(
            `ID: ${this.id} | Nombre: ${this.nombre} | Precio: $${this.precio} | Stock: ${this.stock}`
        );
    }
}

module.exports = Producto;