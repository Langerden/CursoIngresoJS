function mostrar()
{
	var positive = 0
	var negative = 0
	var contador = 0;
	var respuesta="si";
	var contPosi = 0
	var contNegat = 0
	var cantCero = 0
	var numPosi = 0
	var promedioNegative = 0
	var promedioPositive = 0
	while(respuesta!="no")
	{
	var numero = parseInt(prompt("Ingrese numero"))	
	if (numero > 0){
		positive = parseInt(positive + numero)
		contPosi++
	} else if (numero < 0) {
		negative = parseInt(negative + numero)
		contNegat++
	} else {
		cantCero++
	}
	if (numero % 2==0){
		numPosi ++
	}
	contador ++
	var respuesta = prompt("Quiere continuar?")
	while (contador > 0){
		if (contNegat > 0){
			promedioNegative = negative / contNegat
		}
		if (contPosi > 0){
			promedioPositive = positive / contPosi
		}
		break;
	}
	}
document.write("Suma de negativos = " + negative)
document.write("Cantidad de negativos = " + contNegat)
document.write("Promedio de negativos = " + promedioNegative)
document.write("Suma de positivos = " + positive)
document.write("Cantidad de positivos = " + contPosi)
document.write("Cantidad de ceros = " + cantCero)
document.write("Cantidad de numeros pares = " + numPosi)
document.write("Promedio positivos: " + promedioPositive)
document.write("Diferencia entre positivos y negativos = " + (positive - negative))
}//FIN DE LA FUNCIÓN