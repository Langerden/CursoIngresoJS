/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largoterreno;
var anchoterreno;
var perimetroterreno;
largoterreno = document.getElementById("Largo").value;
anchoterreno = document.getElementById("Ancho").value;
perimetroterreno = ((parseInt(largoterreno) + parseInt(anchoterreno)) * 2 );
perimetroterreno = (perimetroterreno * 3);
alert("Comprar " + perimetroterreno + " metros de alambre");
}
function Circulo () 
{
var radioterreno;
var perimetrocircular;
radioterreno = document.getElementById("Radio").value;
perimetrocircular = (2 * 3.14 * (parseInt(radioterreno)));
perimetrocircular = (perimetrocircular * 3);
alert("Comprar " + perimetrocircular + " metros de alambre");
}
function Materiales () 
{
var cemento
var cal
var largoterreno;
var anchoterreno;
var areaterreno
largoterreno = document.getElementById("Largo").value;
anchoterreno = document.getElementById("Ancho").value;
areaterreno = (parseInt(largoterreno) * parseInt(anchoterreno))
cemento = (areaterreno * 2)
cal = (areaterreno * 3)
alert("Comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal")
}
