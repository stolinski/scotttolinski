(function ($) {   //No Conflicts
	$(document).ready(function() {
            $(window).scroll(function(){
                $(".view-project-side-info").css("top",Math.max(0,260-$(this).scrollTop()));
            });
    	$("li.menu-463").replaceWith("<li class='menu-463'><a href='#'><span>></span>Navigate</a></li>");
    	$("li.menu-463").click(function(){
    		if( $(this).hasClass('on')) {
    			$(this).removeClass('on');
    			$('nav.navigation').animate({
    				height:'69px'
    			},500);
    		} else {
    			$(this).addClass('on');
    			$('nav.navigation').animate({
    				height:'264px'
    			},500);
    		}

    	});
   //  	$("img").dtf({
			// delay: 300,
			// fadeTime:400
   //  	});
    });
})(jQuery);
