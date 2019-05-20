
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);


$(document).ready(function(){
  
    //Scrollspy
    $('body').scrollspy({target: ".navbar-fixed-top", offset: 100});   
    });
    
    
/* Fade Copertina */
$(window).scroll(function(){
    $(".copertina").css("opacity", 1 - $(window).scrollTop() / 300);    
  });


/* Scrolling */

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".nav").offset().top > 500) {
        $(".mynavbar").addClass("top-nav-collapse");
    } else {
        $(".mynavbar").removeClass("top-nav-collapse");
    }
}


//navbar
$(window).scroll(function(event){
    var top = $(this).scrollTop();
		if (top >= 10) {
                $('nav').removeClass("nav-up").addClass("nav-down");
            
            }
            if (top < 10) {
                $('nav').removeClass("nav-down").addClass("nav-up");
            }

	});

