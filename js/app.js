var player1Name,
player2Name,
turn = 0,
counter = 0, // counter for decisions array
$startButton = $('.start-button');

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
    window.alert('First decision!');
    overlay( counter );
  } else if( turn === 6 ) {
    window.alert('Second decision!');
    counter++;
    overlay( counter );
  } else if ( turn === 9 ) {
    window.alert('Third decision!');
    counter++;
    overlay( counter );
  } else if ( turn === 12 ) {
    window.alert('Last decision!');
    counter++;
    overlay( counter );
  } else if( turn > 15 ) {
    window.alert('Game is over!');
    return;
  }else {
    console.log(turn);
  }

  Military.money += Military.moneyPerTurn();
  Economy.money += Economy.moneyPerTurn();

};




