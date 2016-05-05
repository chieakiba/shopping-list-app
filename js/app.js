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
            var item = "<li data-item-name='"+ value +"'><a class='checkButton' href='#'><span class='check'></span></a>" + value + "<a class='checkButton' href='#'><span class='cross'></span></a></li>"
            $('#buy').append(item);
            $('input:text').val("");
            $('.checkButton').on("click", function(e) {
                e.preventDefault();
                $('#boughtItems').show();
                $(item).remove();
                $(item).appendTo('#bought');
            });
        } else {
            alert("Please enter an item");
        }
    });
    //once clicked the checkmark, move the item to the Bought section ("<li>" + item + "</li>")

    //once clicked the x mark, move the item to the Deleted section

});