function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno")
        break;
    case "Julio":
        alert("Abrigate que hace frio")
        break;
    case "Agosto":
        alert("Abrgate que hace frio")
        break;
    default:
        alert("Ya pasamos el frio, ahora calor!!!");
    }
}//FIN DE LA FUNCIÓN