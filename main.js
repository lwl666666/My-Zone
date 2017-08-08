$(function(){
	debugger;
	var side_bar_button = $(".logo"),
		side_bar = $("#side_bar"),
		mask = $("#mask");
		back_to_top = $("#back_to_top");
	side_bar_button.on("click",function(){
		debugger;
		mask.fadeIn();
		side_bar.css('left',0);
	});
	mask.on("click",function(){
		debugger;
		mask.fadeOut();
		side_bar.css('left',-side_bar.width());
	});
	back_to_top.on("click",function(){
		$("html,body").animate({
			'scrollTop':0
		},1000);
	});
	$(window).on("scroll",function(){
		if($(window).scrollTop()>$(window).height()){
			back_to_top.fadeIn();
		}else{
			back_to_top.fadeOut();
		}
	});
	$(".hr").animate({
		"width":"300px"
	},1500);
	$(window).trigger("scroll");

});
