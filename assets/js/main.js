$(document).ready(function(){
	$("#boton").click(function(e){
		e.preventDefault();
		var tarea = $("#tarea").val();

		if(tarea == ""){
			alert("El campo no puede estár vacío");
		}
		else{
			$(".list").append("<li><input type='checkbox'>" + "<span>" + tarea+"</span>" + "<button class='remove'>Remove</button></li>");
			$("#tarea").val("");



		}
		$(".remove").click(function(){
		$(this).siblings().remove();
		this.remove();
		})

	})


}) 