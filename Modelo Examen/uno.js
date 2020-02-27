
function mostrar()
{
var ladoA = document.getElementById("ladoA").value
var ladoB = document.getElementById("ladoB").value
var angulosRectos = document.getElementById("angulosRectos").value
var concatenados = ladoA + ladoB

switch (angulosRectos){
    case "SI":
        ladoA = parseInt(ladoA)
        ladoB = parseInt(ladoB)
        if (ladoA != ladoB){
            alert ("Lados concatenados: " + concatenados + ". La superficie es: " + (ladoA * ladoB))
        } else {
            alert ("Lados concatenados: " + concatenados + ". La multiplicacion de sus lados es: " + (ladoA * ladoB))
        }
        break;
    default:
        ladoA = parseInt(ladoA)
        ladoB = parseInt(ladoB)
        if (ladoA != ladoB){
            alert("Lados concatenados: " + concatenados + ". El perimetro es: " + (2 * ladoA + ladoB * 2) )
        } else {
            alert("Lados concatenados: " + concatenados + ". La suma se sus lados es: " + (ladoA + ladoB))
        }
}
}

