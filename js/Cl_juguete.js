import Cl_articulo from "./Cl_articulo.js";

export default class Cl_juguete extends Cl_articulo {
  constructor(nombre,cantidad,precioB,edad){
    super(nombre,cantidad,precioB)
    this.edad = edad;
   }
   descuento(){
     if (this.edad == 1) return this.precioB * (10/100);
    else return 0;
   }
}

