$(document).scroll(function() {
  $( "p" ).first().show( "slow", function showNext() {
    $( this ).next( "p" ).show( "slow", showNext );
  });
});
 
$( "#hide" ).hover(function() {
  $( "p" ).hide( 5000 );
});