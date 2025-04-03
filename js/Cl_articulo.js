export default class Cl_articulo {
    constructor(nombre,cantidad,precioB) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioB = precioB;
    }
    descuento() {
        return 0;
    }
    aPagar(){
     return this.cantidad * this.precioB - this.descuento();
    }
}