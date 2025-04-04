export default class Cl_articulo {
    constructor(nombre,cantidad,precioB) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioB = precioB;
    }
    
    aPagar(){
       return this.precioB * this.cantidad;
    }
}