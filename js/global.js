$('button#sticks').click(function() {
	$(this).toggleClass('close');
	$('.hidden-nav__nav').slideToggle(400);
});


if ($('.left-nav > li:nth-of-type(2), .left-nav > li:nth-of-type(2) *').hasClass('select')) {
	// alert(1);
	$('aside.right').css('display', 'block');;
}

if ($('aside.right').is(':visible')) {
	$('section').width(537);
	$('.nav li').width(150);
	
}
else{
	$('aside.right').removeClass('colum');
}


function setEqualHeight(columns){
	var tallestcolumn = 0;
		
	columns.each(function(){
		currentHeight = $(this).height();
		if(currentHeight > tallestcolumn){
			tallestcolumn  = currentHeight;
		}
	});

	columns.height(tallestcolumn);
}


if (true) {}


$('#main').imagesLoaded( function() {
	setEqualHeight($(".colum"));
})


$('.gallery a').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	helpers : {
		media : {}
	}
});