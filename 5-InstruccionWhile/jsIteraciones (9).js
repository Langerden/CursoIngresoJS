function mostrar()
{
	var contador=0;
	var respuesta='si';
	while(respuesta!='no')
	{
	var number1 = parseInt (prompt("Ingrese numero"))
	var number2 = parseInt (prompt("Ingrese otro numero"))
	Math.min(number1, number2)
	Math.max(number1, number2)
	respuesta = prompt("Quiere ingresar otros numeros?")
	}
	if (number1 > number2){
	document.getElementById("maximo").value = number1
	document.getElementById("minimo").value = number2
	} else {
	document.getElementById("maximo").value = number2
	document.getElementById("minimo").value = number1
}
}
