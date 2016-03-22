var player1Name,
player2Name,
turn = 0,
$startButton = $('.start-button');

var Military = {
  empire: 'British Empire',
  money: 10000,
  population: 1000,
  soldiers: 200,
  tanks: 150,
  frigates: 100,
  jetFighters: 100,
  bills: 0,
  moneyPerTurn: function() {
    var total = Math.floor(this.population / 10);
    return total;
  },
  totalUnits: function() {
    return this.soldiers + this.tanks + this.frigates + this.jetFighters;
  },
  totalUnitDamage: function() {
    var soldiers = this.soldiers * 15;
    var tanks = this.tanks * 25;
    var frigates = this.frigates * 30;
    var jets = this.jetFighters * 40;
    return soldiers + tanks + frigates + jets;
  }
};

var Economy = {
  empire: 'American Empire',
  money: 20000,
  population: 1000,
  soldiers: 75,
  tanks: 75,
  frigates: 50,
  jetFighters: 50,
  bills: 0,
  moneyPerTurn: function() {
    // economy makes more money per turn
    var total = Math.floor(this.population / 6);
    return total;
  },
  totalUnits: function() {
    return this.soldiers + this.tanks + this.frigates + this.jetFighters;
  },
  totalUnitDamage: function() {
    var soldiers = this.soldiers * 10;
    var tanks = this.tanks * 15;
    var frigates = this.frigates * 20;
    var jets = this.jetFighters * 30;
    return soldiers + tanks + frigates + jets;
  }
};

var startGame = function() {
  $startButton.hide();

  player1Name = prompt('Player 1 enter your first name');
  player2Name = prompt('Player 2 enter your first name');

  $('.player-1 .player').text(player1Name);
  $('.player-2 .player').text(player2Name);

  // Adds click event to NEXT button after game starts
  $('.next-turn').on('click', function() {
    nextTurn(player1Name, player2Name);
  });

};

var nextTurn = function(player1, player2) {
  var $turnStatus = $('.turn-status');
  turn++;
  $turnStatus.text(turn);

  // Updates dashboard
  var p1Dashboard = $('.player-1');
  var p2Dashboard = $ ('.player-2');

  // Player 1 dashboard
  p1Dashboard.children('.money').text(Economy.money);
  p1Dashboard.children('.military').text( Economy.totalUnits() );

  // Player 2 dashboard
  p2Dashboard.children('.money').text(Military.money);
  p2Dashboard.children('.military').text( Military.totalUnits() );

  // Player 1 data setters
  $('.player1-assets #empire').text( Economy.empire );
  $('.player1-assets #money').text( Economy.money );
  $('.player1-assets #population').text( Economy.population );
  $('.player1-assets #soldiers').text( Economy.soldiers );
  $('.player1-assets #tanks').text( Economy.tanks );
  $('.player1-assets #frigates').text( Economy.frigates );
  $('.player1-assets #jets').text( Economy.jetFighters );
  $('.player1-assets #cashPerTurn').text( Economy.moneyPerTurn() );
  $('.player1-assets #bill').text( Economy.bills );

  // Player 2 data setters
  $('.player2-assets #empire').text( Military.empire );
  $('.player2-assets #money').text( Military.money );
  $('.player2-assets #population').text( Military.population );
  $('.player2-assets #soldiers').text( Military.soldiers );
  $('.player2-assets #tanks').text( Military.tanks );
  $('.player2-assets #frigates').text( Military.frigates );
  $('.player2-assets #jets').text( Military.jetFighters );
  $('.player2-assets #cashPerTurn').text( Military.moneyPerTurn() );
  $('.player2-assets #bill').text( Military.bills );



  if( turn === 3 ) {
    console.log('First decision happens here');
    window.alert('First decision!');
    overlay(decisions[0].decisionA, decisions[0].decisionADescription, decisions[0].decisionB, decisions[0].decisionBDescription);
  } else if( turn === 6 ) {
    console.log('Third decision goes here');
  } else if ( turn === 9 ) {
    console.log('Third decision goes here');
  } else if ( turn === 12 ) {
    console.log('Fourth decision goes here');
  } else {
    console.log(turn);
  }

  Military.money += Military.moneyPerTurn();
  Economy.money += Economy.moneyPerTurn();



};




