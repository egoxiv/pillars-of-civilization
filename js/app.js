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
  p1Dashboard.children('.money').text(Player1.money);
  p1Dashboard.children('.military').text( Player1.totalUnits() );

  // Player 2 dashboard
  p2Dashboard.children('.money').text(Player2.money);
  p2Dashboard.children('.military').text( Player2.totalUnits() );

  // Player 1 data setters
  $('.player1-assets #empire').text( Player1.empire );
  $('.player1-assets #money').text( Player1.money );
  $('.player1-assets #population').text( Player1.population );
  $('.player1-assets #soldiers').text( Player1.soldiers );
  $('.player1-assets #tanks').text( Player1.tanks );
  $('.player1-assets #frigates').text( Player1.frigates );
  $('.player1-assets #jets').text( Player1.jetFighters );
  $('.player1-assets #cashPerTurn').text( Player1.moneyPerTurn() );
  $('.player1-assets #bill').text( Player1.bills );

  // Player 2 data setters
  $('.player2-assets #empire').text( Player2.empire );
  $('.player2-assets #money').text( Player2.money );
  $('.player2-assets #population').text( Player2.population );
  $('.player2-assets #soldiers').text( Player2.soldiers );
  $('.player2-assets #tanks').text( Player2.tanks );
  $('.player2-assets #frigates').text( Player2.frigates );
  $('.player2-assets #jets').text( Player2.jetFighters );
  $('.player2-assets #cashPerTurn').text( Player2.moneyPerTurn() );
  $('.player2-assets #bill').text( Player2.bills );

  if( turn === 3 ) {
    window.alert('First decision!');
    // overlay( counter );
    getContext(counter, Player1, Player2);
    // get context for each player here and call overlay(counter) in that function
    // getContext(counter, Player1, Player2) <-- something like that? getContext(index, player, opponent) <-- params
    // getContext(counter, Player2, Player1) <-- something like that? getContext(index, player, opponent) <-- params
  } else if( turn === 6 ) {
    window.alert('Second decision!');
    counter++;
    // overlay( counter );
    getContext(counter, Player1, Player2);
  } else if ( turn === 9 ) {
    window.alert('Third decision!');
    counter++;
    // overlay( counter );
    getContext(counter, Player1, Player2);
  } else if ( turn === 12 ) {
    window.alert('Last decision!');
    counter++;
    // overlay( counter );
    getContext(counter, Player1, Player2);
  } else if( turn > 15 ) {
    window.alert('Game is over!');
    return;
  }else {
    console.log(turn);
  }

  Player2.money += Player2.moneyPerTurn();
  Player1.money += Player1.moneyPerTurn();

};




