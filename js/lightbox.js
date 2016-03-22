var overlay = function(heading, description, heading2, description2) {

var $overlay      = $( "<div id='overlay'></div>" ),
    $headerShell  = $("<input type=\'checkbox\'><h2>" + heading + "</h2>"),
    $header2      = $("<input type=\'checkbox\'><h2>" + heading2 + "</h2>"),
    $captionShell = $( "<p>" + description + "</p>" ),
    $caption2     = $( "<p>" + description2 + "</p>" ),
    $submit       = $("<input type=\'submit\' value=\'Submit\'>");


$overlay.append( $headerShell );
$overlay.append( $captionShell );

$overlay.append( $header2 );
$overlay.append( $caption2 );
$overlay.append($submit);


$( "body" ).append( $overlay );

$overlay.show();

// $( $overlay ).click( function() {
//   $overlay.hide();
// });

};
