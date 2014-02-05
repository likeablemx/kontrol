var EventEmitter = require('events').EventEmitter;

var emisor;

var Distribuidor = function(emisorGlobal){
	emisor = emisorGlobal;

	var eventos = {};

	emisor.on('repiteEvento',function(evento,escucha){
		if(!eventos[evento]){
			eventos[evento] = [];
			emisor.addListener( evento , function(args){
				args = args || {};
				args.nombreEvento = args.nombreEvento || evento;
				for(var emisor in eventos[evento]){
					eventos[evento][emisor].emit( args.nombreEvento, args );
				}
			});
		}
		eventos[evento].push(escucha);
	});

	this.eliminarEmisor = function(evento,emisor){
		eventos[evento].splice(emisor,1);
	}

	this.eliminarEmisores = function(evento){
		delete eventos[evento];
	}
}

exports.Distribuidor=Distribuidor;