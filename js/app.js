$(document).ready(function() {
	//hide h3 in grocery-list section when item is not yet entered
	$('#addedItems').hide();
	$('#boughtItems').hide();
	$('#deletedItems').hide();
	//enable the "Add item" button to add items to list and append new items to list//
	$('button').click(function() {
		var value = $('input:text').val();
		if (value != "") {
			$('#addedItems').show();
			$('#buy').append("<li>" + value + "</li>");
			$('input:text').val("");
		}
		else {
			alert("Please enter an item");
		}
	});
	//once clicked the checkmark, move the item to the Bought section
	
	//once clicked the x mark, move the item to the Deleted section
	
});