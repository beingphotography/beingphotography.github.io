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





// $(".slider > div:gt(0)").hide();

// setInterval(function() { 
//   $('.slider > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('.slider');
// },  3000);



$('.carousel').carousel({
  interval: 2000
})




