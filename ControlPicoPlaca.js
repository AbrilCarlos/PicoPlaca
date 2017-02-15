var miPlaca = function(placa,fecha,hora,miJSon){
		  	  this.placa = placa;
			  this.fecha = fecha;
			  this.hora = hora;	
			  this.miJSon = miJSon;
			  this.diaSemana = ""; 
		  }
		  
miPlaca.prototype = {
		       valPlaca:function(){
			  	   var expresion = /^[A-Z]{3}\d{3,4}$/
				   if(!expresion.test(this.placa)){
				   	  return false;
				   }else{
				   	  return true;	   	  
				   }
				},   
			valFecha:function(){
				   var expresion = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/
				   if(!expresion.test(this.fecha)){
				   	  return false;
				   }else{
				   	  return true;	   
				   }
				},   	
			valHora:function(){
				   var expresion = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
				   if(!expresion.test(this.hora)){
				   	  return false;
				    }else{
				   	  return true;	     
				   } 				   
			    },
			ultimoNumPlaca:function(){
					var miPlaca = new String(this.placa);
					var miArreglo = miPlaca.split("");
					return miArreglo[miArreglo.length-1];
				},
			obtenFecha:function(){
				    var miFecha = new String(this.fecha);
					var miHora  = new String(this.hora);
					var miArrFecha = miFecha.split("/");
					var miArrHora = miHora.split(":");
					//alert(Number(miArrFecha[0]));
					var fecha = new Date(Number(miArrFecha[2]),Number(miArrFecha[1])-1,Number(miArrFecha[0]),Number(miArrHora[0]),Number(miArrHora[1]));
					this.diaSemana = fecha.getDay();
					return fecha;
				},
			construyeFecha : function(fecha,hora){
					var mifecha = new Date(fecha);
					var anio = mifecha.getFullYear();
					var mes  = mifecha.getMonth();
					var dia  = mifecha.getDate();
					var txtHora = new String(hora);
					var arrHora = txtHora.split(":");
					return new Date(anio,mes,dia,Number(arrHora[0]),Number(arrHora[1]))				
				},
				
			buscaPlaca: function(){
					var miObj = this.miJSon;
					var ultimoDigito = this.ultimoNumPlaca();
					var respuesta = "La placa " + this.placa + " esta permitida a circular"
					for(i=0; i< miObj.PicoPlaca.length;i++){
						if(miObj.PicoPlaca[i].dia == this.diaSemana){
						   for(j=0; j<miObj.PicoPlaca[i].placa.length;j++ ){
						   		if(miObj.PicoPlaca[i].placa[j]== ultimoDigito){
									respuesta = "La placa " + this.placa + " no esta permitida a circular"							 
								}
						   }
						}
					}
					return respuesta;							
				},
			controlPlaca:function(){
				    var etiqueta="";
					var Fecha = this.obtenFecha();
					var miObj = this.miJSon;
					var rangoHora1 = new String(miObj.Horario[0]);
					var rangoHora2 = new String(miObj.Horario[1]);
					var arrRH1 = rangoHora1.split("-");
					var arrRH2 = rangoHora2.split("-");
					
					var fechaM1 = this.construyeFecha(Fecha,arrRH1[0]);
					var fechaM2 = this.construyeFecha(Fecha,arrRH1[1]);
					var fechaT1 = this.construyeFecha(Fecha,arrRH2[0]);
					var fechaT2 = this.construyeFecha(Fecha,arrRH2[1]);
					
					if(Fecha >= fechaM1 && Fecha <= fechaM2){
						//control de placa
						return this.buscaPlaca();	 
					 }else if(Fecha >= fechaT1 && Fecha <= fechaT2){
					 	return this.buscaPlaca();   
					 }else{
					 	return "La placa " + this.placa + " esta permitida a circular"  
					 }
				}	
		  }