class Proveedor {
    constructor(id, nombre, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    mostrar() {
        console.log(
            `ID: ${this.id} | Nombre: ${this.nombre} | Teléfono: ${this.telefono}`
        );
    }
}

module.exports = Proveedor;