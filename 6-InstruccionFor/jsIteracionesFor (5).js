function mostrar()
{
var respuesta = "si"
var numero = parseInt(prompt("Ingrese un numero"));
for(respuesta; respuesta == "si" && numero != 9; numero = numero){
    respuesta = prompt("Quiere ingresar otro numero?").toLowerCase()
     if (respuesta == "si"){
        numero = parseInt(prompt("Ingrese otro numero"));
    }
}



}//FIN DE LA FUNCIÓN