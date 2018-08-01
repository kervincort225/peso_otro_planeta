
// Funcion que se utiliza para ver el los alertas al comienzo de una pagina.
alert ("Bienvenidos a la prueba de peso, en martes"); 
//DATO PARA INGRESAR EL PESO DEL USUARIO
	var usuario = prompt("Por favor ingresar su peso actual");
	document.write("Tu peso actual es "+usuario+" KG");
	//funcion para cambiar el peso del usuario por un valor int.
	var peso = parseInt(usuario);
	// DATO PARA SABER CUANTO ES LA GRAVEDAD DE LA TIERRA.
 	var g_tierra = 9.8;
 	// DATO PARA SABER CUANTO ES LA GRAVEDAD EN MARTE.
    var g_marte = 3.7;
    //// DATO PARA SABER CUANTO ES LA GRAVEDAD DE JUPITER
    var g_jupiter = 24.8;
    var peso_final;
    peso_final = peso * g_marte / g_tierra;
    peso_final = parseInt(peso_final);
    document.write("Tu peso en marte es : "+peso_final+" ,Se siente raro, no?");