function mostrar()
{
var planetas;
planetas = prompt ("Ingrese planeta");
switch (planetas)
{
    case "tierra":
        alert("Aca vivimos");
        break;
    case "mercurio":
        alert("Aca hace mas calor");
        break;
    case "venus":
        alert("Aca hace mas frio");
        break;
    default:
        alert ("Esto no es un planeta")
        break;
}
}