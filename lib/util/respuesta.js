var Respuesta = function( args ){
	
	args = args || {};

	if( typeof(args.error) != 'function' )
		args.error=null;
	if( typeof(args.exito) != 'function' )
		args.exito=null;
	if( typeof(args.fracaso) != 'function' ) 
		args.fracaso=null;

	this.error 		= args.error || function(){
		console.log('no implementada la respuesta para error');
	};

	this.exito 		= args.exito || function(respuesta){
		console.log('no implementada la respuesta para exito');
	}

	this.fracaso 	= args.fracaso || function(respuesta){
		console.log('no implementada la respuesta para fracaso');
	}

	delete args.error;
	delete args.exito;
	delete args.fracaso;

	for ( atributo in args ){
		if( typeof(args[atributo] ) == 'function' ){
			this[ atributo ] = args[ atributo ];
		}
	}

}

exports.Respuesta = Respuesta;
