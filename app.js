$(".img-container div").hover(function(){
    $(this).siblings().stop().fadeTo(400, 0.5);
},
function(){
    $(this).siblings().stop().fadeTo(400, 1);
});