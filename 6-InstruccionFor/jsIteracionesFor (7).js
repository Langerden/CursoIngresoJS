function mostrar()
{
var cantidadDivisores = 0
var numeroUsuario = parseInt(prompt("Ingrese un numero"))
for(var numeroDivisores = 0; numeroUsuario >= numeroDivisores; numeroDivisores ++){
    if(numeroUsuario % numeroDivisores == 0){
    cantidadDivisores ++
    document.write(numeroDivisores)
}
}
document.write("Cantidad divisores: " + cantidadDivisores)
}//FIN DE LA FUNCIÓN