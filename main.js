$(function(){
	debugger;
	var side_bar_button = $("#side_bar_button"),
		side_bar = $("#side_bar"),
		mask = $("#mask");
	side_bar_button.on("click",function(){
		debugger;
		$("#mask").fadeIn();
		side_bar.animate({right:"0px"});
	});
	$("#side_bar a").on("click",function(){
debugger;
		$("#mask").fadeOut();
		side_bar.animate({right:"-300px"});
	})

});
