/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var temperatura
var centigrados
temperatura = document.getElementById("Temperatura").value
centigrados = ((parseInt(temperatura) - 32) / 1.8)
alert (temperatura + " Fahrenheit son " + centigrados + " Centigrados")
}

function CentigradosFahrenheit () 
{
var temperatura1
var fahrenheit
temperatura1 = document.getElementById("Temperatura").value
fahrenheit = ((parseInt(temperatura1) * 1.8) + 32)
alert (temperatura1 + " Centigrados son " + fahrenheit + " Fahrenheit")
}
