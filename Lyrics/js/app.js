$( "#hide" ).hover(function() {
	$( "p" ).first().show( 3000, function showNext() {
    	$( this ).next( "p" ).show( 1500, showNext );
  });
});

$(document).scroll(function() {
	$( "p" ).hide( 3000 );
});