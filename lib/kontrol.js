var Util 		 		= require('./util/util.js'),
	emisores 	 		= require('./emisores.js'),
	EventEmitter 		= require('events').EventEmitter,
	emisorGlobal 		= new emisores.EmisorGlobal(),
	distribuidor 		= new require('./distribuidor.js').Distribuidor(emisorGlobal),
	nuevoEmisor  		= emisores.nuevoEmisor(emisorGlobal),
	nuevoEventoTemporal = require('./eventos').nuevoEventoTemporal;

//Util
exports.Fecha 		= Util.Fecha;
exports.LogEventos 	= Util.LogEventos;
exports.Respuesta	= Util.Respuesta;
exports.Peticion	= Util.Peticion;

//nativo
exports.emisorGlobal 		= emisorGlobal;
exports.distribuidor 		= distribuidor;
exports.nuevoEmisor  		= nuevoEmisor;
exports.nuevoEventoTemporal = nuevoEventoTemporal;