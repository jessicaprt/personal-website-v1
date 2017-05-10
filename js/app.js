$(document).ready(function() {
	$("#name").fadeIn(2000);
	console.log("hello");
	
	var y = $("#box").offset().top;
	console.log($("#box").offset().top);

	$(window).scroll(function() {
		if ($(this).scrollTop() > y*0.6) {
			$(".inner-box-disp").fadeIn(500);
			$(".i-h1").fadeIn(1500);
			$(".i-h2").fadeIn(2000);
		}
	});	
});