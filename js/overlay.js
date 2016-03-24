var overlay = function(index, player) {
  var $overlay     = $('<div id="overlay"></div>');
  var $empire      = $('<h1>' + player.empire + '</h1>');
  var headline1    = $('<h3>' + decisions[index].headline1 + '</h3>');
  var description1 = $('<p>' + decisions[index].description1 + '</p>');
  var $button1     = $('<button id="button1"></button');

  var headline2    = $('<h3>' + decisions[index].headline2 + '</h3>');
  var description2 = $('<p>' + decisions[index].description2 + '</p>');
  var $button2     = $('<button id="button2"></button');

  $overlay.append($empire);
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
  });

  $button2.text(decisions[index].headline2);
  $button2.on('click', function() {
    player.choice = decisions[index].actionB;
    player.choice();
    $overlay.hide();
  });

  $overlay.show();
};
