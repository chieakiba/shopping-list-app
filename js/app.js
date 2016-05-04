$(document).ready(function() {
	//enable the "Add item" button to add items to list//
	$('button').click(function() {
		($('input').val());
	});
	$('button').click(function() {
		$('#To-buy').html($('input:text').val());
		//append new items to list//
		var value = $('input:text').val();
		$('#buy').append("<li>" + value + "</li>");
	});
	//once clicked the checkmark, move the item to the Bought section
	$('button').click(function() {
		$('#To-buy').html($('input:text').val());
		//append new items to list//
		var value = $('input:text').val();
		$('#buy').append("<li>" + value + "</li>");
	});
	//once clicked the x mark, move the item to the Deleted section
	$('button').click(function() {
		$('#To-buy').html($('input:text').val());
		//append new items to list//
		var value = $('input:text').val();
		$('#buy').append("<li>" + value + "</li>");
	});
});