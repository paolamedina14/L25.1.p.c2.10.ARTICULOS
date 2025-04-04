/**
 * articulos 
 * Sea la información de un artículo: 
 * nombre, cantidad y precio base. Se espera que los artículos tengan un descuento, pero eso dependerá de cada departamento.
 * El departamento de juguetes está ofreciendo un descuento del 10% si el juguete es para edad de 1 año. 
 * Usando la clase suministrada Cl_articulo, programe la clase Cl_juguete con el atributo edad y 
 * el método descuento, que permita calcular el monto a pagar correctamente. Note que esta nueva 
 * clase sólo amerita edad y descuento(). 
 * Realice un programa que lea los datos de un juguete y reporte el monto a pagar. 
 * Ejemplos de la corrida:
 * Nombre del juguete: carrito 
 * Cantidad: 2 
 * Precio base: $10 
 * Edad recomendada: 2 
 * Monto a pagar por el carrito: $20.00 
 * Nombre del juguete: peluche 
 * Cantidad: 3 
 * Precio base: $20 
 * Edad recomendada: 1 
 * Monto a pagar por el peluche: $54.00
 */

import Cl_juguete from "./Cl_juguete.js";

let carrito = new Cl_juguete("carrito", 2,10,2,20);
let peluche = new Cl_juguete("peluche", 3,20,1,54);

let salida = document.getElementById("salida");

salida.innerHTML += "<br>Nombre del juguete: " + carrito.nombre + "<br>" +
"cantidad: " + carrito.cantidad + "<br>" + 
"Precio base: $" + carrito.precioB + "<br>" +
"Edad recomendada: " + carrito.edad + "<br>" +
"Monto a pagar por el " + carrito.nombre + ": $" + carrito.descuento() +
"<br>";

salida.innerHTML += "<br>Nombre del juguete: " + peluche.nombre + "<br>" +
"Cantidad: " + peluche.cantidad + "<br>" +
"Precio base: $" + peluche.precioB + "<br>" +
"Edad recomendada: " + peluche.edad + "<br>" +
"Monto a pagar por el " + peluche.nombre + ": $" + peluche.descuento() +
"<br>";
