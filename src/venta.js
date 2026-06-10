class Venta {
    constructor(id, fecha, total) {
        this.id = id;
        this.fecha = fecha;
        this.total = total;
    }

    mostrar() {
        console.log(
            `ID Venta: ${this.id} | Fecha: ${this.fecha} | Total: $${this.total}`
        );
    }
}

module.exports = Venta;