	var archive = '<button id="archive" class="archive btn-xs" style="float: right">Archive</button>';
	var remove = '<button id="remove" class="remove btn-xs" style="float: right">Remove</button>';
	
    // ensure document is ready for manipulation
    $( document ).ready(function() {
    	$("button").click(function(event){
			event.preventDefault();
			// declare jQuery objects
			var height = $("#height").val();
			var weight = $("#weight").val();
			var output = $("#output").val();
			var comment = $("#comment").val();
			var archivebtn = $(archive);
			var removebtn = $(remove);
			
			// append user input to "current" table
			$("#current").append(
				$('<tr>')
					.append($('<td>').append(height))
					.append($('<td>').append(weight))
					.append($('<td>').append(output))
					.append($('<td>').append(comment))
					.append(archivebtn)
			);


			$("#height").val("");
			$("#weight").val("");
			$("#output").val("");
			$("#comment").val("");

		
			// Add to archived table then remove from current table
			$(archivebtn).click(function(){
				$(this).parent().remove();
				$("#archived").append( 
					$('<tr>')
					.append($('<td>').append(height))
					.append($('<td>').append(weight))
					.append($('<td>').append(output))
					.append($('<td>').append(comment))
					.append(removebtn)
				);
		
				// remove task from table
				$(removebtn).click(function(event){
					$(this).parent().remove();
				});
			});
		});		
    });
