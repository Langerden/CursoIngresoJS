/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var numeroUsuario 
var contadorIntentos = 0;
function comenzar()
{
numeroSecreto = Math.floor(Math.random () * (101 - 1) + 1)
//alert(numeroSecreto );
}

function verificar()
{
numeroUsuario = parseInt (document.getElementById("numero").value)
if(numeroUsuario == numeroSecreto){
  alert("Usted es un ganador y en solo " + contadorIntentos + " intentos")
}
while (numeroUsuario < numeroSecreto){
contadorIntentos ++
document.getElementById("intentos").value = contadorIntentos
alert("Faltan " + (numeroSecreto - numeroUsuario) + " numeros")
break;
}
while (numeroUsuario > numeroSecreto){
  contadorIntentos ++
document.getElementById("intentos").value = contadorIntentos
alert("Se paso " + (numeroUsuario - numeroSecreto) + " numeros")
break;
}  
}

