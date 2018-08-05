(function(){

	var $cajaRoja = $("#cajaRoja");

	// Funcion mover
	function mover( dir ){

		// Evita el retrazo en los movimientos del boton
		$cajaRoja.clearQueue();

		switch( dir ){

			case "arr":

				$cajaRoja.animate({
					top: "-=50px"
				}, 200);

			break;

			case "aba":

				$cajaRoja.animate({
					top: "+=50px"
				}, 200);

			break;


			case "der":

				$cajaRoja.animate({
					left: "+=50px"
				}, 200);
				

			break;

			case "izq":

				$cajaRoja.animate({
					left: "-=50px"
				}, 200);
				
			break;

			default:

				$cajaRoja.animate({
					left: "0px",
					top: "0px"
				}, 2000);
				
			break;


		}
	}

	// Movimientos con las teclas
	$(document).on("keypress", function(e){

		// Evita el retrazo en los movimientos del boton
		$cajaRoja.clearQueue();

		var keyCode = e.keyCode;
		
		switch( keyCode ){

			case 119:
					mover("arr");
			break;

			case 120:
					mover("aba");
			break;

			case 100:
					mover("der");
			break;

			case 97:
					mover("izq");
			break;

			default:
					mover("res");
			break;

		}
	});

	// Funcionalidad para ejecutar movimiento
	$(".butDir").on("click", function(){

		var dir = $(this).data("dir");		

		mover( dir );		
	});

	$("#botTamano").on("click", function(){

		$cajaRoja.animate({
			width: "+=100px",
			height: "+=100px"
		}, 1000, function(){
			console.log("Termino la animacion del tamaño");
			
		});						
	});




})();