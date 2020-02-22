function mostrar()
{
	var positive = 0
	var negative = 0
	var contador=0;
	var respuesta="si";
	var contPosi = 0
	var contNegat = 0
	var cantCero = 0
	var numPosi = 0
	while(respuesta!="no")
	{
	var numero = parseInt(prompt("Ingrese numero"))	
	if (numero > 0){
		positive = positive + numero
		contPosi ++
	} else if (numero < 0) {
		negative = negative + numero
		contNegat ++
	} else {
		cantCero ++
	}
	if (numero % 2==0){
		numPosi ++
	}
	var respuesta = prompt("Quiere continuar?")
	}
document.write("Suma de negativos = " + negative)
document.write("Suma de positivos = " + positive)
document.write("Cantidad de positivos = " + contPosi)
document.write("Cantidad de negativos = " + contNegat)
document.write("Cantidad de ceros = " + cantCero)
document.write("Cantidad de numeros pares = " + numPosi)
document.write("Promedio de positivos = " + (positive / contPosi))
document.write("Promedio de negativos = " + (negative / contNegat))
document.write("Diferencia entre positivos y negativos = " + (positive - negative))
}//FIN DE LA FUNCIÓN