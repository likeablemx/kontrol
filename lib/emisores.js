var EventEmitter = require('events').EventEmitter,
	Log = require('./util/util.js').LogEventos;

var EmisorGlobal = function(){
	var emisorGlobal = new Emisor('emisorGlobal');
	return emisorGlobal;
}

var Emisor = function(nombre){
	var escucha = new EventEmitter();

	escucha.logs = {};

	escucha.on('error',function(data){
		console.log('Error en emisor',nombre,':',data);
	});

	escucha.on('exito',function(data){
		console.log('Éxito en emisor',nombre,':',data);
	});

	escucha.crearLog = function(nombre,ruta,eventos){
		if( !nombre ) return 'Error: no hay nombre'
		if( !ruta ) return 'Error: no hay ruta';

		escucha.logs[nombre]=new Log({ruta:ruta,emisor:escucha});
		escucha.logs[nombre].guardarEventos(eventos);

		return escucha.logs[nombre];
	}

	escucha.set = function(event,funcion){
		escucha.removeAllListeners(event);
		escucha.on(event,funcion);
	}

	return escucha;
}

var numEscucha = 0;
var nuevoEmisor = function(emisorGlobal){
	var emisor = new Emisor(++numEscucha);
	emisorGlobal.emit('repiteEvento','error',emisor);
	emisorGlobal.emit('repiteEvento','exito',emisor);
	return emisor;
}

exports.EmisorGlobal = EmisorGlobal;
exports.nuevoEmisor = nuevoEmisor;