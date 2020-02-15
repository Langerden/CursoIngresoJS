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
 var preciolampara = 35
 var cantidad
 var marca
 var precioXcantidad
 var descuentoA
 var descuentoB
 var descuentoB2
 var descuentoC
 var descuentoC2
 var descuentoD
 var descuentoD2
 var descuentoD3

 cantidad = document.getElementById("Cantidad").value
 cantidad = parseInt(cantidad)
 precioXcantidad = (cantidad * preciolampara)
 marca = document.getElementById("Marca").value


   } 
switch (marca)
{
    case "ArgentinaLuz":
        if (cantidad == 5) 
        {
            descuentoB = (precioXcantidad - (precioXcantidad * 40 / 100))
            document.getElementById("precioDescuento").value = descuentoB
        }
        if (cantidad == 4) {
            descuentoC = (precioXcantidad - (precioXcantidad * 25 / 100)
            document.getElementById("precioDescuento").value = descuentoC
        }
        if (cantidad == 3){
            descuentoD = (precioXcantidad - (precioXcantidad * 15 / 100))
            document.getElementById("precioDescuento").value = descuentoD
        } else {
            descuentoA = (precioXcantidad - (precioXcantidad * 50 / 100))
            document.getElementById("precioDescuento").value = descuentoA 
        }
    case "FelipeLamparas":
        if (cantidad == 4) 
        {
            descuentoC = (precioXcantidad - (precioXcantidad * 25 / 100))
            document.getElementById("precioDescuento").value = descuentoC
        }
        if (cantidad == 3)
        {
            descuentoD2 = (precioXcantidad - (precioXcantidad * 10 / 100))
            document.getElementById("precioDescuento").value = descuentoD2
        }
        if (cantidad == 5)
        {
            descuentoB2 = (precioXcantidad - (precioXcantidad * 30 / 100))
            document.getElementById("precioDescuento").value = descuentoB2
        } else {
            descuentoA = (precioXcantidad - (precioXcantidad * 50 / 100))
            document.getElementById("precioDescuento").value = descuentoA 
        }
    default:
        if (cantidad == 4) 
        {
            descuentoC2 = (precioXcantidad - (precioXcantidad * 20 / 100))
            document.getElementById("precioDescuento").value = descuentoC2
        }
        if (cantidad == 3)
        {
            descuentoD2 = (precioXcantidad - (precioXcantidad * 10 / 100))
            document.getElementById("precioDescuento").value = descuentoC2
        }
        if (cantidad == 5)
        {
            descuentoB2 = (precioXcantidad - (precioXcantidad * 30 / 100))
            document.getElementById("precioDescuento").value = descuentoB2
        } else {
            descuentoA = (precioXcantidad - (precioXcantidad * 50 / 100))
            document.getElementById("precioDescuento").value = descuentoA 
        }
}






}