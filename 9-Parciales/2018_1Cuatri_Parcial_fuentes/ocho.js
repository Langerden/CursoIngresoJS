function mostrar()
{
var letra
var numero
var cantPares = 0
var cantImpares = 0
var cantCero = 0
var sumaPosi = 0
var cantPosi = 0
var sumaNegat = 0
var contador = 0
var NumLetraMax
var NumLetraMin
var respuesta = "si"
do{
    letra = prompt("Ingrese Letra").toLowerCase()
    numero = parseInt(prompt("Ingrese Numero"))
    while(isNaN(numero) || (numero < -100 || numero > 100)){
        numero = parseInt(prompt("Numero no valido, ingrese otro"))
    }
    if (contador == 0){
        numMax = numero
        numMin = numero
        NumLetraMax = letra
        NumLetraMin = letra
        contador ++
    }
    if (numero > numMax){
        numMax = numero
        NumLetraMax = letra
    } else if (numero < numMin){
        numMin = numero
        NumLetraMin = letra
    }
    if (numero % 2 == 0){
        cantPares ++
    } else {
        cantImpares ++
    } 
    if (numero > 0){
        sumaPosi = parseInt(numero + sumaPosi) 
        cantPosi = parseInt(cantPosi)
        cantPosi ++
    } else if (numero < 0) {
        sumaNegat =+ numero
    } else {
        cantCero ++
    }
    respuesta = prompt("¿Quiere ingresar otro numero y letra?")
} while (respuesta == "si");
document.write ("Cantidad de pares: " + cantPares)
document.write ("Cantidad de impares: " + cantImpares)
document.write ("Cantidad de ceros: " + cantCero)
document.write ("Promedio de positivos: " + (sumaPosi / cantPosi))
document.write ("Suma de numeros negativos: " + sumaNegat)
document.write ("Numero y Letra del Maximo: " + numMax + " " + NumLetraMax + " y del minimo " + numMin + " " + NumLetraMin)
}