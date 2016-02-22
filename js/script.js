$(document).ready(function() {
	var counter = 0;
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 16; j++) {
			$('<div class="plain"> </div>').addClass('sameDiv').appendTo('#container');
			counter++;
		}
	}

	$(".plain").hover(
	function(){
		$(this).addClass("hovered");
	});

});


