//Check off Specific Todos By Clicking

$("ul").on("click", "li", function() {
    
    $(this).click(function() {
        $(this).toggleClass("completed");
    });
});

// $(this).css("color", "skyblue");
// $(this).css("text-decoration", "line-through");

//You can do this way too
// if($(this).css("color") === "rgb(128, 128, 128)") {
//     //turn it to be black
//      $(this).css({
//          color: "black",
//          textDecoration: "none"
//      });
// } else {
//     $(this).css({
//         color: "rgb(128, 128, 128",
//         textDecoration: "line-through"
//     });
// }

//The best way to do this thing using "Toggle"

//Click on X to delete Todos 
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    //13 = Enter button
    if(e.which === 13){
        //Grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //Create a new li and add new to 'ul'
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

    }
    
});

//Make plus symbol can hide and un-hide todo input

$(".fa-calendar-plus-o").click(function(){
    $("input[type='text']").fadeToggle();
})
