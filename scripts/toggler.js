$(document).ready(function(){
	
	$(".toggle_container").hide();

	$("div.trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
	});
 
});