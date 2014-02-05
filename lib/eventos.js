
var EventEmitter = require('events').EventEmitter,
	Peticion = require('./util/util.js').Peticion,
	num=0;

var nuevoEventoTemporal = function(args){
	args = args || {};
	
	if( !args.emisor ) {
		throw new Error('Para crear un evento temporal se debe contar con un emisor');
	}

	if( !args.funcion ){
		throw new Error('Un evento temporal requiere de una función');
	}

	if( !(args.emisor instanceof EventEmitter)){
		throw new Error('El emisor para este evento temporal debe ser instancia de EventEmitter');
	}

	if( typeof(args.funcion) != 'function' ){
		throw new Error('El argumento funcion debe ser de tipo function');
	}

	var nombre = 'EventoTemporalNumero'+(++num);
	
	args.emisor.once(nombre,args.funcion);

	if( args.peticion && args.peticion instanceof Peticion){
		args.peticion.contesta = function(argumentos){
			args.emisor.emit(nombre,argumentos);
		}
		return true;
	}else{
		if( args.peticion ) {
			console.log('Se ignoró la petición recibida porque no es instancia de Peticion');
			console.log('El evento temporal se creo y se retornará el nombre de dicho evento');
		}
		return nombre;
	}
}

exports.nuevoEventoTemporal = nuevoEventoTemporal;