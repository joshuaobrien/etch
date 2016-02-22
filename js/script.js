$(document).ready(function() {
		var counter = 0;
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 16; j++) {
			$('<div class="plain"> </div>').appendTo('#container');
			counter++;
		}
	}

	$(".plain").hover(
	function(){
		var percent = 20;
		var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		//alert(randomColor);

		if(($(this).css("background-color")) != ("rgb(255, 0, 0)"))
		{
			
			var currentOpacity = $(this).css("opacity");
			$(this).css("opacity", currentOpacity-0.10);
		}
		else
		{
			$(this).css("background-color", randomColor);
		}

		//$(this).addClass("hovered");

		
		
	});

	$("#button").click(
		function(){
			var rawVals = window.prompt("Please enter dimensions (mxn)");
			var splitVals = rawVals.split("x");
		//	alert(splitVals[0]);
			reset(splitVals[0], splitVals[1]);
		});

});

function shadeColor2(color, percent) {   
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

function reset(x, y) {
	$(".plain").each(
		function(){
			$(this).remove();
		});

	for (var i = 0; i < x; i++) {		
		for (var j = 0; j < y; j++) {
			$('<div class="plain"> </div>').appendTo('#container');
		}
	}

	$(".plain").each(function() {
		$(this).css("height", (960/y) + "px");
		$(this).css("width", (960/x) + "px");
	});

$(".plain").hover(
	function(){
		var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		//alert(randomColor);

		if(($(this).css("background-color")) != ("rgb(255, 0, 0)"))
		{
			
			var currentOpacity = $(this).css("opacity");
			$(this).css("opacity", currentOpacity-0.5);
		}
		else
		{
			$(this).css("background-color", randomColor);
		}

		//$(this).addClass("hovered");

		
		
	});


};


