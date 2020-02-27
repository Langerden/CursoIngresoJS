function mostrar()
{
var pais
var habitantes
var temperatura
var respuesta
var cantTempImp = 0
var numMaxHab = 1
var paisHabitantes
var cantPaisTemp = 0
var contadorHab = 0
var acumuladorHab = 0
var numMaxTemp = 0
var paisTemp
do {
pais = prompt("Ingrese el pais").toLowerCase()
habitantes = parseInt(prompt("Cantidad de habitantes"))
while(habitantes < 1 || habitantes > 270){
    habitantes = parseInt(prompt("Ingrese la poblacion correcta"))
}
temperatura = parseInt(prompt("Ingrese temperatura minima"))
while(temperatura < -50 || temperatura > 50){
    temperatura = parseInt(prompt("Ingrese temperatura valida"))
}
if (temperatura % 2 != 0){
    cantTempImp ++
}
if (numMaxHab < habitantes){
    numMaxHab = habitantes
    paisHabitantes = pais
}
if (temperatura < 20){
    cantPaisTemp ++
} else if (temperatura > numMaxTemp){
    numMaxTemp = temperatura
    paisTemp = pais
}
acumuladorHab += habitantes
contadorHab ++
respuesta = prompt("Quiere ingresar otro pais?").toLowerCase()
} while(respuesta == "si");
document.write("Cantidad de temperatura impares: " + cantTempImp + "<br>")
document.write("Pais con mas habitantes: " + paisHabitantes + " " + numMaxHab + "<br>")
document.write("Paises con menos de 20 grados: " + cantPaisTemp + "<br>")
document.write("Promedio de habitantes: " + (acumuladorHab / contadorHab) + "<br>" )
document.write("Temp maxima y pais " + paisTemp + " " + numMaxTemp + "<br>")
}
