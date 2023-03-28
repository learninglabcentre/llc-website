jQuery(document).ready(function($) {

const sections = document.querySelectorAll(".scrollSection");
const navLi = document.querySelectorAll("nav.llc-web-navigation ul li");
	window.onscroll = () => {
	var current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (window.pageYOffset >= sectionTop - 100) {
		current = section.getAttribute("id");
	 }
	});

	navLi.forEach((li) => {
		li.classList.remove("active");
		if (li.classList.contains(current)) {
		li.classList.add("active");
		}
	});
	};

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