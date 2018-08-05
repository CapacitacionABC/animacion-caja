(function(){

	var $cajaRoja = $("#cajaRoja");
	var $cajaAzul = $("#cajaAzul");
	var tl = new TimelineMax();

	// Funcion mover
	function mover( dir ){
		

		// Evita el retrazo en los movimientos del boton
		$cajaRoja.clearQueue();


	
		switch( dir ){

			case "arr":
				// Animaciones con Animate Y
				$cajaRoja.animate({
					top: "-=50px"
				}, 200);

				// Animaciones con GSAP Y
				tl.to($cajaAzul, 0.20, { y: "-=50"})

			break;

			case "aba":
				// Animaciones con Animate Y
				$cajaRoja.animate({
					top: "+=50px"
				}, 200);

				// Animaciones con GSAP Y
				tl.to($cajaAzul, 0.20, { y: "+=50"})

			break;


			case "der":
				// Animaciones con Animate X
				$cajaRoja.animate({
					left: "+=50px"
				}, 200);

				// Animaciones con GSAP X
				tl.to($cajaAzul, 0.20, { x: "+=50"})
				

			break;

			case "izq":
				// Animaciones con Animate X
				$cajaRoja.animate({
					left: "-=50px"
				}, 200);

				// Animaciones con GSAP X
				tl.to($cajaAzul, 0.20, { x: "-=50"})
				
			break;

			default:

				$cajaRoja.animate({
					left: "0px",
					top: "0px",
					width: "50px",
					height: "50px"
				}, 2000);

				// Animaciones con GSAP RESET
				tl.to($cajaAzul, 0.20, { 
					x: "0", 
					y: "0",
					width: "50px",
					height: "50px"
				});

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

	// Funcionalidad para el cambio de tamaño
	$("#botTamano").on("click", function(){

		// Animaciones con Animate Cambio de tamaño
		$cajaRoja.animate({
			width: "+=100px",
			height: "+=100px"
		}, 1000,);	

		// Animaciones con GSAP Cambio de tamaño
		tl.to($cajaAzul, 0.20,{ 
			width: "+=100px",
			height: "+=100px"
			
		})
	
	});




})();