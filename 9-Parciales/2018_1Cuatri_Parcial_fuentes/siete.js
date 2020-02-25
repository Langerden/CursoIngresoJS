function mostrar()
{
var contador = 0
var notas
var sexo
var acuNota = 0
var acuSexo
var sexoNotaMin
var cantHombres = 0
do {  
    notas = parseInt(prompt("Nota del alumno"))
    while (isNaN(notas) || (notas < 1 || notas > 10))
    {
    notas = parseInt(prompt("Nota no valida, ingrese nota correcta"))
    }
    sexo = prompt("Sexo del alumno").toLowerCase()
    while (sexo != "m" && sexo != "f")
    {
    sexo = prompt("Sexo no valido, Ingrese otra correctamente").toLowerCase()
    }
    acuNota += notas
    if (contador == 0)
    {
        numMax = notas
        numMin = notas
        acuSexo = sexo
    }
    if (sexo == "m" && notas >= 6)
    {
        cantHombres ++
    }
    if (notas < numMin)
    {
        numMin = notas
        sexoNotaMin = sexo
    }
    contador ++ 
} while (contador < 5);
alert("Promedio de notas = " + (acuNota / contador))
alert("Sexo y Nota de la peor calificacion = " + sexoNotaMin + " " + numMin)
alert("Cantidad de Varones aprobados = " + cantHombres)
}