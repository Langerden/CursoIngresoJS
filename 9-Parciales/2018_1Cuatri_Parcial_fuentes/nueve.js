/*
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/
function mostrar()
{
var marca
var peso
var temperatura
var contTempPar = 0
var marcaMax
var contador = 0
var contTempNeg = 0
var contPeso = 0
var acuPeso = 0
var respuesta = "si"


do {
    marca = prompt("Ingrese marca del producto").toLowerCase()
    while (!(isNaN(marca))){
        marca = prompt("Marca no valida, ingrese marca correcta").toLowerCase()
    }
    peso = parseInt(prompt("Ingrese peso (kg) del producto"))
    while (isNaN(peso) || (peso < 1 || peso > 100)){
        peso = parseInt(prompt("Peso no Valido, ingrese peso correcto (kg)"))
    }
    acuPeso = parseInt(peso + acuPeso)
    contPeso ++
    temperatura = parseInt(prompt("Ingrese temperatura de almacenamiento (°C)"))
    while (isNaN(temperatura) || (temperatura < -30 || temperatura > 30)){
        temperatura = parseInt(prompt("Temperatura no valida, ingrese temperatura correcta (°C)"))
    }
    if ((temperatura % 2 == 0) || (temperatura == 0)){
        contTempPar ++
    }
    if (contador == 0){
        numMax = peso
        numMin = peso
        marcaMax = marca
        contador ++
    }
    if (peso > numMax){
        numMax = peso
        marcaMax = marca
    } else if (peso < numMin){
        numMin = peso
    }
    if (temperatura < 0){
        contTempNeg ++
    }
    respuesta = prompt("¿Quiere cargar datos de otro producto?").toLowerCase()
} while (respuesta == "si");
document.write("Cantidad de temperatura pares: " + contTempPar)
document.write("Marca del producto mas pesado " + marcaMax)
document.write("Productos que se conservan desde -1°C " + contTempNeg)
document.write("Promedio del peso de todos los productos: " + (acuPeso / contPeso))
document.write("Peso maximo " + numMax + "y minimo " + numMin)
}
