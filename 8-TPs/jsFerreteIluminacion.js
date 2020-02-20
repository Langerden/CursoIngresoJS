/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
var cantidad = document.getElementById("Cantidad").value
var marca = document.getElementById("Marca").value
var precioxcant = cantidad * 35
var descuento 
var impuesto
cantidad = parseInt(cantidad)

switch (marca)
{
    case "ArgentinaLuz":
        if (cantidad >= 6) {
            descuento = (precioxcant + (precioxcant * 50 / 100))
        } else if (cantidad == 5) {
            descuento = (precioxcant + (precioxcant * 40 / 100))
        } else if (cantidad == 4) {
            descuento = (precioxcant + (precioxcant * 25 / 100))
        } else if (cantidad == 3){
            descuento = precioxcant + (precioxcant * 15 / 100) 
        }
        break;
   case "FelipeLamparas":
        if (cantidad >= 6) {
        descuento = (precioxcant + (precioxcant * 50 / 100))
        } else if (cantidad == 5) {
        descuento = (precioxcant + (precioxcant * 30 / 100))
        } else if (cantidad == 4) {
            descuento = (precioxcant + (precioxcant * 25 / 100))
        } else if (cantidad == 3) {
            descuento = (precioxcant + (precioxcant * 10 / 100))
        }
        break;
    default:
        if (cantidad >= 6) {
            descuento = (precioxcant + (precioxcant * 50 / 100))
        } else if (cantidad == 5) {
            descuento = (precioxcant + (precioxcant * 30 / 100))
        } else if (cantidad == 4) {
            descuento = (precioxcant + (precioxcant * 20 / 100))
        } else if (cantidad == 3){
            descuento = precioxcant + (precioxcant * 5 / 100)
        }
        break;
}
if (cantidad <= 2){
    document.getElementById("precioDescuento").value = precioxcant
} else if (descuento > 120) {
    impuesto = (descuento * 10 / 100)
    document.getElementById("precioDescuento").value = "Precio con descuento: " + descuento + " y pago de impuestos: " + impuesto
} else {
    document.getElementById("precioDescuento").value = descuento
}
}