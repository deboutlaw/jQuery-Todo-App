//mark off todos
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//delete todos
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    //stop bubbling  w/jQuery
    event.stopPropagation();

});

//add todos
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        //grab text
        let todoText = $(this).val();
        //clear text box
        $(this).val("");
        //create new <li></li>
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});