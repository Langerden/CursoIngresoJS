function mostrar()
{
var contador = 0
var notas
var sexo
var notaMin
var notaMax
var sexoNotaMin
var sexoNotaMax

do {
    notas = parseInt(prompt("Nota del alumno"))
    sexo = prompt("Sexo del alumno").toLowerCase
    if (contador == 0){
        numMax = notas
        numMin = notas
        sexoNotaMin = sexo
        sexoNotaMax = sexo
    if (notas > numMax){
        numMax = notas
    } else if (notas < numMin){
        numMin = notas
    }
    }
} while (contador < 5);


/*while(contNotas < 4){
if (notas > 0 && notas < 10) {
    acuNotas += notas
    notas = parseInt(prompt("Ingrese otra nota"))
    contNotas ++
} else {
    alert("Nota no valida")
    notas = parseInt(prompt("Ingrese otra nota"))
}
}
while(contSexo < 4){    
    if (sexo == "f" || sexo == "m"){
    } else {
        alert ("Sexo no valido")
        sexo = prompt("Ingrese otro sexo").toLocaleLowerCase
    }
} */
alert("Promedio de notas " + (acuNotas / contNotas))
}