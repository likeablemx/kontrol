var fs = require('fs');


var LogEventos = function(args){

	var datosEnLog 	= [],
		rutaLog 	= args.ruta,
		clase		= this;

	if( !(args.emisor && args.ruta) )
		throw new Error('No se puede crear un objeto tipo LogEventos '
							+'si no se especifica ni un emisor ni una ruta');

	this.emisor	=args.emisor;
	var emisor = args.emisor;

	//Evento para escribir en log
	emisor.on("escrituraAsincrona", function( d ){
		fs.appendFileSync(d.rutaLog, d.datosEnLog);
	});

	var numero = 0;
	
	var Dato = function(escritura){
		this.numero 	= ++numero;
		this.escritura 	= escritura;
	}

	fs.writeFileSync( args.ruta, '' );

	//Evento con el que se agrega un evento para escribir en el log
	emisor.on('setEvento--', function( args ){

			var nombreEvento = args.nombreEvento,
				datosEvento = args.datosEvento;

			//Evento del cual se escribirá su contenido en el log
			emisor.on( nombreEvento , function( data ){
				
				//Datos que se escribiran en el log
				var datos = Object.getOwnPropertyNames( data );

				if( datosEvento ){
					datos = datosEvento;
				}

				var escritura = {};

				for( dato in datos ){
					escritura[ datos[dato] ] = data[ datos[dato] ]; 
				}
				
				var toWrite			= {};

				toWrite.rutaLog 	= rutaLog;
				toWrite.datosEnLog 	= JSON.stringify( new Dato(escritura) )

				emisor.emit( "escrituraAsincrona" , toWrite );
			});

		});

	LogEventos.prototype.guardarEvento = function( args ){
		
		if( !Array.isArray(args) ) 
			args = [args];

		var eventos = args;

		for( var num=0; num<eventos.length; num++ ){

			var nombreT = eventos[num].nombre;
			var datosT = eventos[num].datos;

			emisor.emit('setEvento--',{ nombreEvento:nombreT , datosEvento:datosT });
		}
	}
}

exports.LogEventos = LogEventos;



