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
  // choices: [];
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

  var $turnStatus = $('.turn-status');
  $turnStatus.append(turn);

  $('.player-1 .player').text(player1Name);
  $('.player-2 .player').text(player2Name);

  // Adds click event to NEXT button
  $('.next-turn').on('click', function() {
    nextTurn(player1Name, player2Name);
  });
};

var nextTurn = function(player1, player2) {
  turn++;



  Military.money += Military.moneyPerTurn();
  Economy.money += Economy.moneyPerTurn();

};




