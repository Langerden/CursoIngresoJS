function mostrar()
{
//tomo la edad  
var mesDelAno = document.getElementById('mes').value;
switch (mesDelAno)
{
    case "Enero":
        alert("Que comiences bien el año!!!");
        break;
    case "Marzo":
        alert("A clases!!!")
        break;
    case "Julio":
        alert("Se vienen las vacaciones")
        break;
    case "Diciembre":
        alert("Felices Fiestas")
        break;           
    default:
    alert("Labura, gil")
}
}//FIN DE LA FUNCIÓN