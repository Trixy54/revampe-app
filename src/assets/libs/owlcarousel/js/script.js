// Owlcarousel
$(document).ready(function(){
  $(".choose-cv").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i class='fa fa-angle-left'></i>",
	    "<i class='fa fa-angle-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  });


  $('.carousel-owl').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    // nav:true,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.carousel-owl2').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    // nav:true,
    rtl:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

});