function mostrar()
{
	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	while (numero <= 0 || numero > 10){
	numero = prompt("No es valido, intente nuevamente")
	}
	document.getElementById("Numero").value = numero

}//FIN DE LA FUNCIÓN