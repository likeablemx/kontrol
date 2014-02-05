var Respuesta = require( './respuesta.js' ).Respuesta;

var Peticion = function( args ){
	
	args 			= args || {};
	this.respuesta 	= args.respuesta
	
	if(	!args.respuesta instanceof Respuesta ) 
		this.respuesta = new Respuesta();
	
	this.nombreEevnto 	= args.nombreEevnto || null;
	this.mensaje 		= args.mensaje || '';
	
}

exports.Peticion = Peticion;