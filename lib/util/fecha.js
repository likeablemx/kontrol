var Fecha = function(){

	var clase		= this,
		fecha 		= new Date(),
		t 			= ( JSON.stringify( fecha ).replace( /"/gi,'' ) ).split( /[\-,T,\.,\:,Z]/ ),
		zonaHoraria = '0',
		year 		= t[0],
		month 		= t[1],
		day 		= t[2],
		horas 		= t[3],
		minutos 	= t[4],
		segundos 	= t[5],
		milis 		= t[6];

	this.date = getFecha();

	this.setZonaHoraria = function(zona){
		zonaHoraria=zona;
		clase.date=getFecha();
	}

	function getFecha(){
		var fech = (year)+'-'+(month<10?'0':'')+(+month)+'-'+day+'T'+
		(horas-zonaHoraria<10?'0':'')+(+horas-zonaHoraria)+':'+(minutos<10?'0':'')+(+minutos)+':'+(segundos<10?'0':'')+(+segundos)+
		'.'+milis+((-zonaHoraria)<0?'-':'')+(zonaHoraria<10?'0':'')+(+zonaHoraria);

		return fech;
	}

}

exports.Fecha = Fecha;