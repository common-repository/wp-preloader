// executes when complete page is fully loaded
jQuery(window).load(function() {
    // fade out the loading animation
	jQuery("#wp-preloader-animation").fadeOut();
    // fade out the preloader animation container 
	jQuery("#wp-preloader-container").delay(1000).fadeOut("slow");
})

