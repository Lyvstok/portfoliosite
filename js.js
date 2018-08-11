// animates language icons

$(document).ready(function(){
	$(".languages").hover(function(){
        $(this).animate({
        height: '150px',
        width: '150px'
    });

    });

});