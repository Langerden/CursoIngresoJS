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
 if (cantidad >= 6) {
     descuentoA = (precioXcantidad - (precioXcantidad * 50 / 100))
     document.getElementById("precioDescuento").value = descuentoA 
    } 
if (descuentoA > 120)  {
     descuentoA = (descuentoA + (descuentoA * 10 / 100))
     alert("Usted pago " + descuentoA)
    } else if ((cantidad == 5) && (marca == "ArgentinaLuz"))  { 
     descuentoB = (precioXcantidad - (precioXcantidad * 40 / 100)
     document.getElementById("precioDescuento") = descuentoB 
    }
if (descuentoB > 120)  {
        descuentoB = (descuentoB + (descuentoB * 10 / 100))
        alert("Usted pago " + descuentoB)
    } else if ((cantidad == 5) && (marca != "ArgentinaLuz") {
     descuentoB2 = (precioXcantidad - (precioXcantidad * 30 / 100))
     document.getElementById("precioDescuento").value = descuentoB2 
    } 
if (descuentoB2 > 120){
        descuentoB2 = (descuentoB2 + (descuentoB2 * 10 / 100))
        alert ("Usted pago " + descuentoB2)
    } else if ((cantidad == 4) && (marca == ("ArgentinaLuz" || "FelipeLamparas"))){
     descuentoC = (precioXcantidad - (precioXcantidad * 25 / 100))
     document.getElementById("precioDescuento").value = descuentoC
    } 
if (descuentoC > 120) {
        descuentoC = (descuentoC + (descuentoC * 10 / 100))
        alert ("Usted pago " + descuentoC)
    } else if ((cantidad == 4) && !(marca == ("ArgentinaLuz" || "FelipeLamparas"))){
     descuentoC2 = (precioXcantidad - (precioXcantidad * 20 / 100))
     document.getElementById("precioDescuento").value = descuentoC2
    } 
if (descuentoC2 > 120) {
        descuentoC2 = (descuentoC2 + (descuentoC2 * 10 / 100))
        alert ("Usted pago " + descuentoC2)
    } else if ((cantidad == 3) && (marca == "ArgentinaLuz")){
     descuentoD = (precioXcantidad - (precioXcantidad * 15 / 100))
     document.getElementById("precioDescuento").value = descuentoD
    }
if (descuentoD > 120) {
        descuentoD = (descuentoD + (descuentoD * 10 / 100)
        alert ("Usted pago " + descuentoD)
    } else if ((cantidad == 3) && (marca == "FelipeLamparas")){
    descuentoD2 = (precioXcantidad - (precioXcantidad * 10 / 100))
    document.getElementById("precioDescuento").value = descuentoD2 
    }
if (descuentoD2 > 120) {
    descuentoD2 = (descuentoD2 + (descuentoD2 * 10 / 100)
    alert("Usted pago " + descuentoD2)
    } else if ((cantidad == 3) && (marca != ("FelipeLamparas" || "ArgentinaLuz")){
    descuentoD3 = (precioXcantidad - (precioXcantidad * 5 / 100))
    document.getElementById("precioDescuento").value = descuentoD3
    }
if (descuentoD3 > 120) {
    descuentoD3 = (descuentoD3 + (descuentoD3 * 10 / 100))
    alert("Usted pago " + descuentoD3)
    }
}