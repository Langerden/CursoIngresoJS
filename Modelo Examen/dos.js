function mostrar()
{
var nombre
var genero
var edad
var peso
var promedioEdad = 0
var contadorEdad = 0
var acumuladorEdades = 0
var nombreFlaco
var pesoMin
var cantidadC = 0

for (contador = 0; contador < 4; contador ++){
    nombre = prompt("Ingrese su nombre")
    genero = prompt("Ingrese el genero (entre masculino / femenino / otro)").toLowerCase()
    while(genero != "masculino" && genero != "femenino" && genero != "otro"){
        genero = prompt("Genero no valido, ingrese otro (entre masculino / femenino / otro)")
    }
    edad = parseInt(prompt("Ingrese su edad (Entre 18 y 100)"))
    while(isNaN(edad) || edad < 18 || edad > 100){
        edad = parseInt(prompt("Edad no valida, ingrese otra (Entre 18 y 100)"))
    }
    peso = parseInt(prompt("Ingrese su peso (kg)"))
    while (isNaN(peso) || peso < 1){
        peso = parseInt(prompt("Peso no valido, ingrese un peso correcto mayor a 1"))
    }
    if(contador == 0){
        pesoMin = peso
        nombreFlaco = nombre
    }
    if(peso < pesoMin){
        pesoMin = peso
        nombreFlaco = nombre    
    }
 if (edad >= 25){
     contadorEdad ++
     acumuladorEdades += edad
 }
 if (genero != "masculino" || peso > 80){
     cantidadC ++
 }
if (contadorEdad > 0){
    promedioEdad = acumuladorEdades / contadorEdad
}
}
alert("Promedio de las edades mayores a 25: " + promedioEdad)
alert(nombreFlaco + " " + pesoMin)
alert("Personas no Masculinas y con sobrepeso: " + cantidadC)
}
