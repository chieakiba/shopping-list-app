$(document).ready(function() {
	//enable the "Add item" button to add items to list//
	$('button').click(function() {
		($('input').val());
	});
	$('button').click(function() {
		$('#To-buy').html($('input:text').val());
	});
	//append new items to list//
	$('button').click(function() {
		var listItem = newItemOnTheList($('input:text').val());
		$('#To-buy').append(listItem);
		$('input:text').val("");
	});
});