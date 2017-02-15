 var miTabla = function(miJSon){
  	  this.miJSon = miJSon
  }
  
  
  miTabla.prototype = {
       construyeTabla:function(){
	      var mitablaHTML = "";
		  mitablaHTML += "<TABLE border=1>"
		  mitablaHTML += "<TR><TD>Horario</TD><TD colspan=4>" +this.miJSon.Horario[0]+" "+this.miJSon.Horario[1]+"</TD></TR><TR>"

		  for(i=0;i<this.miJSon.PicoPlaca.length;i++){
		  	mitablaHTML += "<TD>"+this.numeroADias(this.miJSon.PicoPlaca[i].dia)+"</TD>"									 
		  }
		  mitablaHTML +="</TR><TR>"
		  for(i=0;i<this.miJSon.PicoPlaca.length;i++){
		  	mitablaHTML += "<TD>"+this.miJSon.PicoPlaca[i].placa[0]+"  /  "+this.miJSon.PicoPlaca[i].placa[1]+"</TD>"									 
		  }
		  mitablaHTML +="</TR></HTML>" 
		  return mitablaHTML
	   },
	   numeroADias:function(numDia){
	   		var txtdia = ""
	   		switch(numDia){
			  case 1:
			  	   txtdia="Lunes";
				   break;
			  case 2:
			  	   txtdia="Martes";
				   break;
			  case 3:
			  	   txtdia="Miercoles";
				   break;
			  case 4:
			  	   txtdia="Jueves";
				   break;				   				   				   
			  case 5:
			  	   txtdia="Viernes";
				   break;	   				   
			}
			return txtdia
	   }					
  };