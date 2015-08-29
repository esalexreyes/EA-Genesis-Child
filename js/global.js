jQuery(function($){

	// FitVids
	$('.entry-content').fitVids();

	// Smooth scrolling anchor links
	$('a[href*=#]:not([href=#]):not(.no-scroll)').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var top_offset = 0;
				if ( $('.site-header').css('position') == 'fixed' ) {
					top_offset = $('.site-header').height();
				}
				if( $('body').hasClass('admin-bar') ) {
					top_offset = $('#wpadminbar').height();
				}
				 $('html,body').animate({
					 scrollTop: target.offset().top - top_offset
				}, 1000);
				return false;
			}
		}
	});
	
});
