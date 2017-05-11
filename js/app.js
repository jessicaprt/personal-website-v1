$(document).ready(function() {
	$("#name").fadeIn(2000);
	console.log("hello");
	
	var y = $("#box").offset().top;
	console.log($("#box").offset().top);

	$(window).scroll(function() {
		if ($(this).scrollTop() > y*0.3) {
			$(".inner-box-disp").fadeIn(500);
			$(".i-h1").fadeIn(1500);
			$(".i-h2").fadeIn(2000);
		}
	});	
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});