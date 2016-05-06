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
            var item = "<li class='item' data-item-name='" + value + "'><a class='checkButton' href='#'><span class='check'></span></a>" + value + "<a class='crossButton' href='#'><span class='cross'></span></a></li>"
            $('#buy').append(item);
            $('input:text').val("");
            //once clicked the checkmark, move the item to the Bought section ("<li>" + item + "</li>")
            $('.check').click(function() {
                $('#boughtItems').show();
                var itemBought = $(this).parent().parent().remove();
                $(itemBought).appendTo('#bought');
            });
            //once clicked the x mark, move the item to the Deleted section
            $('.cross').click(function() {
                $('#deletedItems').show();
                var itemBought = $(this).parent().parent().remove();
                $(itemBought).appendTo('#removed');
            });
        } else {
            alert("Please enter an item");
        }
    });
});