//mark off todos
$("li").click(function() {
    $(this).css("color", "gray");
    $(this).css("text-decoration", "line-through");
});