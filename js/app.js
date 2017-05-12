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
	
	$('#p-1').mouseenter(function() {
		$('#p-desc-1').animate({
			height: '+=10rem',
			width: '+=2rem'
		});
		$('#pd1-hidden').show();
	});
	
	$('#p-1').mouseleave(function() {
		$('#pd1-hidden').hide("slow");
		$('#p-desc-1').animate({
			height: '-=10rem',
			width: '-=2rem'
		});
	});
	
	$('#p-2').mouseenter(function() {
		$('#p-desc-2').animate({
			height: '+=10rem',
			width: '+=2rem'
		});
		$('#pd2-hidden').show();
	});
	
	$('#p-2').mouseleave(function() {
		$('#pd2-hidden').hide("slow");
		$('#p-desc-2').animate({
			height: '-=10rem',
			width: '-=2rem'
		});
	});
	
	$('#p-3').mouseenter(function() {
		$('#p-desc-3').animate({
			height: '+=10rem',
			width: '+=2rem'
		});
		$('#pd3-hidden').show();
	});
	
	$('#p-3').mouseleave(function() {
		$('#pd3-hidden').hide("slow");
		$('#p-desc-3').animate({
			height: '-=10rem',
			width: '-=2rem'
		});
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