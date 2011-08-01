$(document).ready(function(){
	
	$(".toggle_container").hide();

	$("h2").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
	});
 
});