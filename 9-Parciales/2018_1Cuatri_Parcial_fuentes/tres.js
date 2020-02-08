function mostrar()
{
var precio;
var descuento;
var preciofinal;
precio = prompt("Ingrese el precio");
descuento = prompt("Ingrese porcentaje de descuento");
preciofinal = precio * descuento / 100;
document.getElementById("elPrecioFinal").value = preciofinal;
}
