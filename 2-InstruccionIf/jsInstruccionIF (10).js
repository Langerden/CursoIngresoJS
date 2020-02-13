function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random = Math.floor(Math.random () * (11 - 1) )+ 1;
	if (random >= 9) {
		alert("Excelente")
	} else if (random > 4) {
		alert ("Aprobo")
	} else {
		alert ("Vamos, la proxima se puede")
	}
}//FIN DE LA FUNCIÓN