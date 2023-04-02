jQuery(document).ready(function($) {



	$('.homeSearch').click(function(event) {
		event.preventDefault();
		window.location.href = 'http://localhost/learninglabcenter/tutorials.html'
	})

	// $('.collapse').collapse();
	$('.courseTabs a:first').tab('show');
	$(".courseTabs a").click(function(){
		$(this).tab('show');
	  });
	  $(window).scroll(function () { 
		if ($(window).scrollTop() > 160) {
		  $('header').addClass('navbar-fixed-top');
		}
	
		if ($(window).scrollTop() < 150) {
		  $('header').removeClass('navbar-fixed-top');
		}
	  });
	  
});
