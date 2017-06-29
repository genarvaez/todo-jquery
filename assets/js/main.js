$(document).ready(function(){
	$("#boton").click(function(e){
		e.preventDefault();
		var tarea = $("#tarea").val();
		var completed = $(".completed");
		var date = new Date();

		if(tarea == ""){
			alert("El campo no puede estár vacío");
		}
		else{
			$(".list").append("<li><input type='checkbox' id='myCheckbox' class=filled-in' /><label  for='myCheckbox'></label>" +
			"<span id='tareas'>" + tarea+"</span><span class='onHover'>"+date.getDate() + '/' + (date.getMonth() +1) + '/' + date.getFullYear() +"</span>"+ 
			"<button class='remove'><i class='fa fa-trash-o' aria-hidden='true'></i></button></li>");
			$("#tarea").val("");
		}

		$(".remove").click(function(){
		$(this).parent().remove();
		})


		$('[type="checkbox"]').change(function(){
	    	if(this.checked){
	    		completed.append($(this).parent());
	    	}
	    	else{
	    		$(".list").append($(this).parent());
	    	}
 		});
	})
}) 	