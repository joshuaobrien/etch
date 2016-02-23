var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

$(document).ready(function() {
		var counter = 0;
	for (var i = 0; i < 16; i++) {
		$('<div class="plain" id="'+i+'"> </div>').appendTo('#container');
		for (var j = 0; j < 16; j++) {
			$('<div class="plain"> </div>').appendTo('#container');
			counter++;
		}

	reset(13,13);
	}

	$(".plain").hover(
	function(){
		var percent = 20;
		var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

		if(($(this).css("background-color")) != ("rgb(255, 0, 0)"))
		{
			var darkerShade = shadeColor(rgb2hex($(this).css("background-color")), -10);
			$(this).css("background-color", darkerShade)
		}
		else
		{
			$(this).css("background-color", randomColor);
		}	
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
	var counter = 0;
	$(".plain").each(
		function(){
			$(this).remove();
		});


	for (var i = 0; i < x; i++) {		
		for (var j = 0; j < y; j++) {
			$('<div class="plain"></div>').appendTo('#container');
			counter = counter + 1;
		}
	}



	$(".plain").each(function() {
		$(this).css("height", 960/y + "px");
		$(this).css("width", 960/x + "px");
	});

$(".plain").hover(
	function(){
		var percent = 20;
		var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

		if(($(this).css("background-color")) != ("rgb(255, 0, 0)"))
		{
			var darkerShade = shadeColor(rgb2hex($(this).css("background-color")), -10);
			$(this).css("background-color", darkerShade)
		}
		else
		{
			$(this).css("background-color", randomColor);
		}	
	});


};

function nearestMultiple(value, roundTo) {
	return Math.floor(value /roundTo) * roundTo;
}

function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}

function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }


