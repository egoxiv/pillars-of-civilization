var overlay = function(heading, description, heading2, description2) {

  var choice;

  var $overlay = $( '<div id=\'overlay\'></div>' );
  var $leftDiv  = $( '<div id=\'pull-left\'></div>' );
  var $rightDiv  = $( '<div id=\'pull-right\'></div>' );

  // First choice
  var $heading1 = $('<h2 id=\'heading\'>' + heading + '</h2>');
  var $description1 = $('<p id=\'description\'>' + description + '</p>');
  $leftDiv.append($heading1);
  $leftDiv.append($description1);

  // Second Choice
  var $heading2 = $('<h2 id=\'heading2\'>' + heading2 + '</h2>');
  var $description2 = $('<p id=\'description2\'>' + description2 + '</p>');
  $rightDiv.append($heading2);
  $rightDiv.append($description2);

  // Add choices to overlay
  $overlay.append($leftDiv);
  $overlay.append($rightDiv);

  // Adds click event to headings to remove overlay
  $heading1.on('click', function() {
    choice = this;
    console.log(choice);
    $( $overlay ).click( function() {
      $overlay.hide();
    });
  });

  $heading2.on('click', function() {
    choice = this;
    console.log(choice);

    $( $overlay ).click( function() {
      $overlay.hide();
    });
  });

  $( "body" ).append( $overlay );

  $overlay.show();

};
