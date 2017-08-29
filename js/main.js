/*burger menu*/

$(document).ready(function(){
    $("nav").hide(); 

    $(".menu-toggle").click(function(){
    	if(  $("nav").hasClass("isVisible")  ){
			$("nav").hide();
			$("nav").removeClass("isVisible");
    	}else{
			$("nav").show();
			$("nav").addClass("isVisible");

    	}

    });   
  });


/*disable scroll*/

    $('nav').on({
    'mousewheel': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
     }
});

        $('nav').on({
    'touchmove': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
     }
});

    // $('body').unbind('mousewheel');


/*target scroll down*/

$(".viewmore").click(function() {
    $('html, body').animate({
        scrollTop: $(".section2").offset().top
    }, 1000);
    return false;
});

/*carousel slide*/


$('.carousel').carousel({
  interval: 2000
})


