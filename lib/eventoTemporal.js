
var eventoTemporal = function( escucha , funcion ){
	var x = 0;
	var nombre = ++x + new Date();
	escucha.once(nombre,funcion);
	return nombre;
}

exports.eventoTemporal = eventoTemporal;