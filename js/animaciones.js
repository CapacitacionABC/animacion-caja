(function(){

	var $cajaRoja = $("#cajaRoja");

	function mover( dir ){

		// Evita el retrazo en los movimientos del boton
		$cajaRoja.clearQueue();

		switch( dir ){

			case "arr":

				$cajaRoja.animate({
					top: "-=50px"
				});

			break;

			case "aba":

				$cajaRoja.animate({
					top: "+=50px"
				});

			break;


			case "der":

				$cajaRoja.animate({
					left: "+=50px"
				});
				

			break;

			case "izq":

				$cajaRoja.animate({
					left: "-=50px"
				});
				
			break;

			default:

				$cajaRoja.animate({
					left: "0px",
					top: "0px"
				});
				
			break;


		}
	}


	$(document).on("keypress", function(e){

		// Evita el retrazo en los movimientos del boton
		$cajaRoja.clearQueue();

		var keyCode = e.keyCode;

		console.log(keyCode);
		
		
		switch( keyCode ){

			case 119:

				$cajaRoja.animate({
					top: "-=50px"
				});

			break;

			case 120:

				$cajaRoja.animate({
					top: "+=50px"
				});

			break;


			case 100:

				$cajaRoja.animate({
					left: "+=50px"
				});
				

			break;

			case 97:

				$cajaRoja.animate({
					left: "-=50px"
				});
				
			break;

			default:

				$cajaRoja.animate({
					left: "0px",
					top: "0px"
				});
				
			break;

		}
		
	});



	$("button").on("click", function(){

		var dir = $(this).data("dir");

		console.log(dir);
		

		mover( dir );		
	});

})();