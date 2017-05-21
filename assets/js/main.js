(function datosObligatorios(){
		var nomb = document.getElementById("nombre").value;
		var mail = document.getElementById("mail").value;
		var direcc = document.getElementById("dire").value;
		var tefavorito = document.getElementById("opcion_escogida").value;

		if(nomb === "" || mail === "" || direcc === "" || tefavorito === ""){
			alert("Todos los campos son obligatorios");
			return;
		}
})();