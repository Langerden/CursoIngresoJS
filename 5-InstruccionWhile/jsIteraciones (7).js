function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si'
while(respuesta == "si"){
	var numero = parseInt (prompt("Ingrese numero"))
	acumulador = acumulador + numero
	respuesta = prompt("¿Quiere cargar otro numero?")
	contador++
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN