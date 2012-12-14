$(function() {

	//Ajax Loading Chunks
	$('.socialLoad').load('chunks/social.htm');
	$('.headerLoad').load('chunks/header.htm');
	$('.navLoad').load('chunks/nav.htm');
	$('.hpChunkLoad').load('chunks/hpChunk.htm');
	$('.rrLoad').load('chunks/rr.htm');

	$('.homeLink').live('click', function() {
		$('.hpChunkLoad').load('chunks/hpChunk.htm');
		return false;
	})
	$('.gitLink').live('click', function() {
		$('.hpChunkLoad').load('chunks/gitChunk.htm');
		return false;
	});
	$('.buildLink').live('click', function() {
		$('.hpChunkLoad').load('chunks/buildToolChunk.htm');
		return false;
	});
   	//Open All Links in New Page
   	/*$('a').live('click', function() {
	    window.open($(this).attr('href'));
	    return false;
	});*/

	//Keyboard Left Right Arrows
    $(document).keydown(function(e){
		if (e.keyCode == 17) {
			$( '.gogSearch' ).focus();
			return false;
		}
	});

	//StockTicker
	// $.getJSON('https://finance.google.com/finance/info?client=ig&q=NYSE:WBMD&callback=?', function(response){
	// 	var stockInfo = response[0];
	// 	var stockString = '<div class="stockWrapper">';
	// 	stockString += '<span class="stockSymbol">'+stockInfo.t+':</span>';
	// 	stockString += '<span class="stockPrice">'+stockInfo.l+'</span>';
	// 	stockString += '<span class="stockChange">'+stockInfo.c+'</span>';
	// 	stockString += '<span>at</span> <span class="stockTime">'+stockInfo.ltt+'</span>';
	// 	stockString += '</div>';
	// 	$('.stockTick').prepend(stockString);
	// 	$(".stockChange:contains('+')").addClass('plus');
	// 	$(".stockChange:contains('-')").addClass('minus');
	// });

	$('body').mousedown(function(event) {
	    switch (event.which) {
        // case 1:
        //     alert('Left mouse button pressed');
        //     break;
        case 2:
            //alert('Middle mouse button pressed');
            $('.hpChunkLoad').load('chunks/hpChunk.htm');
            break;
        // case 3:
        //     alert('Right mouse button pressed');
        //     $('.hpChunkLoad').load('chunks/hpChunk.htm');
        //     break;
        // default:
        //     alert('You have a strange mouse');
    }
});


});