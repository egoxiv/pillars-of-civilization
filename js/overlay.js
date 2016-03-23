var decisions = [
  {
    headline1: 'Invest In Education',
    description1: 'This decision will take your opponents population from the empire (200 citizens) and move them to your empire (all 200) for 5 turns.',
    actionA: function() {
      console.log('Im here!');

    },
    headline2: 'Steal Opponent\'s Tanks',
    description2: 'Or you can choose to take away your opponents tanks and add them to your inventory, reducing your opponents total unit damage and increasing yours.',
    actionB: function() {
      console.log('Im here!');
      // ruin opponents day here
      // clear overlay or return to game somehow
    }
  },
  {
    headline1: 'Build Roads',
    description1: 'Create jobs and take away your opponents citizens! This decision will increase your gold per turn for five turns, add 100 citizens to your total population and take 500 gold away from your opponents total cash and deposit it into your total cash.',
    actionA: function() {
      console.log('Im here!');
      // ruin opponents day here
      // clear overlay or return to game somehow
    },
    headline2: 'Recruit opponent\'s soldiers',
    description2: 'Take 50 of your opponents soldiers and add them to your total soldier count, which will increase your total unit damage and reduce your opponents. Your opponent will be billed for the deserters for 500 gold.',
    actionB: function() {
      console.log('Im here!');
      // ruin opponents day here
      // clear overlay or return to game somehow
    }
  },
  {
    headline1: 'Extract Natural Resources',
    description1: 'Make more gold per turn temporarily by adding 100 citizens, bill your opponent 1000 gold for expensive resources and take 100 citizens away.',
    actionA: function() {
      console.log('Im here!');
      // ruin opponents day here
      // clear overlay or return to game somehow
    },
    headline2: 'Invest in Military Research',
    description2: 'Permanently increase the damage of all troops by increasing multiplier by 2.',
    actionB: function() {
      console.log('Im here!');
      // ruin opponents day here
      // clear overlay or return to game somehow
    }
  },
  {
    headline1: 'Build world bank',
    description1: 'Get automatic 2000 gold and permanent increase in gold per turn by reducing divider. Bills opponent for 2000 gold.',
    actionA: function() {
      console.log('Im here!');
      // ruin opponents day here
      // clear overlay or return to game somehow
    },
    headline2: 'Steal Opponents jets',
    description2: 'Steal 20 of your opponents jets, taking the unit that does the most damage away from your opponent and add it to your total jets increasing your total unit damage significantly.',
    actionB: function() {
      console.log('Im here!');
      // ruin opponents day here
      // clear overlay or return to game somehow
    }
  }
];

// Player1.choices = decisions;
// Player2.choices = decisions;

var overlay = function(index, player) {
  var $overlay     = $('<div id=\'overlay\'></div>');
  var $empire      = $('<h1>' + player.empire + '</h1>');
  var headline1    = $('<h3>' + decisions[index].headline1 + '</h3>');
  var description1 = $('<p>' + decisions[index].description1 + '</p>');
  var $button1     = $('<button id="button1"></button');

  $button1.text(decisions[index].headline1);
  $($button1).on('click', function() {
    player.choice = decisions[index].actionA;
    $overlay.hide();
  });

  var headline2    = $('<h3>' + decisions[index].headline2 + '</h3>');
  var description2 = $('<p>' + decisions[index].description2 + '</p>');
  var $button2     = $('<button id="button2"></button');

  $button2.text(decisions[index].headline2);
  $($button2).on('click', function() {
    player.choice = decisions[index].actionB;
    $overlay.hide();
  });

  $overlay.append($empire);
  $overlay.append(headline1);
  $overlay.append(description1);
  $overlay.append($button1);

  $overlay.append(headline2);
  $overlay.append(description2);
  $overlay.append($button2);

  $( "body" ).append( $overlay );

  $overlay.show();
};
