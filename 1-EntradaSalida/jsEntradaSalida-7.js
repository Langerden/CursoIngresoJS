/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var numero1
var numero2
var numerofinal
numero1 = document.getElementById("numeroUno").value;
numero2 = document.getElementById("numeroDos").value;
numerofinal = (parseInt(numero1) + parseInt(numero2));
alert (numerofinal);
}

function restar()
{
var numero1
var numero2
var numerofinal
numero1 = document.getElementById("numeroUno").value;
numero2 = document.getElementById("numeroDos").value;
numerofinal = (parseInt(numero1) - parseInt(numero2));
alert (numerofinal);
}

function multiplicar()
{ 
var numero1
var numero2
var numerofinal
numero1 = document.getElementById("numeroUno").value;
numero2 = document.getElementById("numeroDos").value;
numerofinal = (parseInt(numero1) * parseInt(numero2));
alert (numerofinal);
}

function dividir()
{
var numero1
var numero2
var numerofinal
numero1 = document.getElementById("numeroUno").value;
numero2 = document.getElementById("numeroDos").value;
numerofinal = (parseInt(numero1) / parseInt(numero2));
alert (numerofinal);
}

