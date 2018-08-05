(function(){

	var $cajaRoja = $("#cajaRoja");

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


	$(document).on("keypress", function(e){

		// Evita el retrazo en los movimientos del boton
		$cajaRoja.clearQueue();

		var keyCode = e.keyCode;
		
		switch( keyCode ){

			case 119:

				$cajaRoja.animate({
					top: "-=50px"
				}, 200);

			break;

			case 120:

				$cajaRoja.animate({
					top: "+=50px"
				}, 200);

			break;


			case 100:

				$cajaRoja.animate({
					left: "+=50px"
				}, 200);
				

			break;

			case 97:

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
		
	});



	$("button").on("click", function(){

		var dir = $(this).data("dir");		

		mover( dir );		
	});

})();