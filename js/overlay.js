var decisionCount = 0;
// **** BUG - btn-group not hiding when overlay is appended.
// **** FIX - btn-group display set to none with .hide() before overlay is appended. btn-group is set to .show() after decisionCount reaches 2.

var overlay = function(index, player) {
  var $overlay     = $('<div id="overlay"></div>');
  var $name      = $('<h1>' + player.name + '</h1>');
  var headline1    = $('<h3>' + decisions[index].headline1 + '</h3>');
  var description1 = $('<p>' + decisions[index].description1 + '</p>');
  var $button1     = $('<button id="button1"></button');

  var headline2    = $('<h3>' + decisions[index].headline2 + '</h3>');
  var description2 = $('<p>' + decisions[index].description2 + '</p>');
  var $button2     = $('<button id="button2"></button');

  $overlay.append($name);
  $overlay.append(headline1);
  $overlay.append(description1);
  $overlay.append($button1);

  $overlay.append(headline2);
  $overlay.append(description2);
  $overlay.append($button2);

  $('body').append($overlay);

  $button1.text(decisions[index].headline1);
  $button1.on('click', function() {
    player.choice = decisions[index].actionA;
    player.choice();
    $overlay.hide();
    decisionCount++;
    if(decisionCount === 2) {
      $('.btn-group').show();
    }
  });

  $button2.text(decisions[index].headline2);
  $button2.on('click', function() {
    player.choice = decisions[index].actionB;
    player.choice();
    $overlay.hide();
    decisionCount++;
    if(decisionCount === 2) {
      $('.btn-group').show();
    }
  });

  $overlay.show();
};
