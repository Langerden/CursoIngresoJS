function mostrar()
{
var letra
var numero
var respuesta
var restaImpar = 0
var sumaPar = 0
var cantCero = 0
var cantNegative = 0
var sumaNegative = 0
var multiPosi = 1
var numMax = 0
var numMin = 0
var letraMax
var letraMin
var cantVocal = 0
var promedioNegativos = 0
do{
letra = prompt("Ingrese una letra")
while(letra.toUpperCase() < "A" || letra.toUpperCase() > "Z"){
    letra = prompt("Letra no valida, ingrese otra")
}
if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U")
cantVocal ++
numero = parseInt(prompt("Ingrese un numero"))
while(numero < -10 || numero > 10){
    numero = parseInt(prompt("Numero NO valido, ingrese otro"))
}
if(numero > numMax){
    numMax = numero
    letraMax = letra
} else if (numero < numMin){
    numMin = numero
    letraMin = letra
}
if(numero == 0){
    cantCero ++
} else if (numero % 2 == 0) {
    sumaPar += numero
} else {
    restaImpar -= numero
}
if (numero < 0){
    sumaNegative += numero
    cantNegative ++
} else {
    multiPosi = multiPosi * numero
}
if (cantNegative > 0){
promedioNegativos = sumaNegative / cantNegative
}
respuesta = prompt("Quiere ingresar otro numero?").toLowerCase()
} while (respuesta == "si")
document.write("Resta numeros impares: " + restaImpar + "<br>")
document.write("Suma numeros pares: " + sumaPar + "<br>")
document.write("Cantidad de ceros: " + cantCero + "<br>")
document.write("Promedio Negativos: " + promedioNegativos + "<br>")
document.write("Multiplicacion positivos: " + multiPosi + "<br>")
document.write("Numero y letra MAX: " + numMax + letraMax + "<br>")
document.write("Numero y letra MIN: " + numMin + letraMin + "<br>")
document.write("Cantidad vocales: " + cantVocal + "<br>")
}
