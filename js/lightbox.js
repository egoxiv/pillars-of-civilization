var overlay = function(heading, description, heading2, description2) {

var $overlay      = $( "<div id='overlay'></div>" ),
    $headerShell  = $("<h2>" + heading + "</h2>"),
    $header2  = $("<h2>" + heading2 + "</h2>"),
    $captionShell = $( "<p>" + description + "</p>" );
    $caption2 = $( "<p>" + description2 + "</p>" );

$overlay.append( $headerShell );
$overlay.append( $captionShell );

$overlay.append( $header2 );
$overlay.append( $caption2 );


$( "body" ).append( $overlay );

$overlay.show();

$( $overlay ).click( function() {
  $overlay.hide();
});

};
