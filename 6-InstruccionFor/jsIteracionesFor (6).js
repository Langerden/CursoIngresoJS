function mostrar()
{
var contadorPar = 0
var numerosPares = 0
var numero = parseInt(prompt("Ingrese un numero"))
for (numero; numero >= 0; numero --){
    if (numero % 2 == 0){
        contadorPar ++
        document.write(numero)
}
}
document.write("Cantidad pares: " + contadorPar)
}//FIN DE LA FUNCIÓN