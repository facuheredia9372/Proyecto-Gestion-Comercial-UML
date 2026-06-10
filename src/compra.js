class Compra {
    constructor(id, fecha, total) {
        this.id = id;
        this.fecha = fecha;
        this.total = total;
    }

    mostrar() {
        console.log(
            `ID Compra: ${this.id} | Fecha: ${this.fecha} | Total: $${this.total}`
        );
    }
}

module.exports = Compra;