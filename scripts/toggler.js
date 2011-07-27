$(document).ready(function(){
	
	$(".toggle_container").hide();

	// $("div.trigger").toggle(function(){
	// 	$(this).addClass("active"); 
	// 	}, function () {
	// 	$(this).removeClass("active");
	// });

	$("div.trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
	});
 
});