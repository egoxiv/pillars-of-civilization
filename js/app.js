var counter = 0;
var turn    = 0;

var setDashboardData = function() {
  // Gets player dashboard
  var p1Dashboard = $('.player-1');
  var p2Dashboard = $ ('.player-2');

  // Sets player 1 dashboard
  p1Dashboard.children('.money').text(Player1.money);
  p1Dashboard.children('.military').text( Player1.totalUnits() );

  // Sets player 2 dashboard
  p2Dashboard.children('.money').text(Player2.money);
  p2Dashboard.children('.military').text( Player2.totalUnits() );
};

var setInventoryData = function() {
  setDashboardData();
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
};

var startGame = function() {
  $('.start-button').hide();

  var player1Name = prompt('Player 1 enter your first name');
  var player2Name = prompt('Player 2 enter your first name');

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

  setInventoryData();

  switch (turn) {
    case 3:
      window.alert('First decision!');
      getContext(counter, Player1, Player2);
      break;
    case 6:
      counter++;
      window.alert('Second decision!');
      getContext(counter, Player1, Player2);
      break;
    case 9:
      counter++;
      window.alert('Third decision!');
      getContext(counter, Player1, Player2);
      break;
    case 12:
      window.alert('Last decision!');
      counter++;
      getContext(counter, Player1, Player2);
      break;
    case 15:
      getWinner(Player1, Player2);
      break;
    case 16:
      window.alert('Game is over!');
      break;
    default:
      console.log(turn);
  }

  Player2.money += Player2.moneyPerTurn();
  Player1.money += Player1.moneyPerTurn();

};

var getWinner = function(player1, player2) {
  // Stores total money, totalUnits, and totalUnitDamage
  var p1Total = ( player1.money + player1.totalUnits() + player2.totalUnitDamage() ) - player1.bills;
  var p2Total = ( player2.money + player2.totalUnits() + player2.totalUnitDamage() ) - player2.bills;

  // Gets player bills
  var p1Bills = player1.bills;
  var p2Bills = player2.bills;

  // Checks for unpaid bills, if true, player gets 15% penalty subtracted from total
  if(p1Bills > 0) {
    var p1StartTotal = p1Total;
    var p1Penalty = p1Total * parseFloat(0.15);
    p1Total = Math.floor( p1Total - p1Penalty );
    console.log(player1.empire + ' has been charged 15% of ' + p1StartTotal + ' for unpaid bills bringing your total score to ' + p1Total);
    p1Bills = 0;
  } else {
    console.log(player1.empire + ' has no bills! No 15% charge');
  }

  if(p2Bills > 0) {
    var p2StartTotal = p2Total;
    var p2Penalty = p2Total * parseFloat(0.15);
    p2Total = Math.floor( p1Total - p2Penalty );
    console.log(player2.empire + ' has been charged 15% of ' + p2StartTotal + ' for unpaid bills bringing your total score to ' + p2Total);
    p2Bills = 0;
  } else {
    console.log(player2.empire + ' has no bills! No 15% charge');
  }

  if(p1Total > p2Total) {
    window.alert(player1.empire + ' total score: ' + p1Total +
      '\n' + player2.empire + ' total score: ' + p2Total);
    window.alert(player1.empire + ' wins!');
  } else {
    window.alert(player2.empire + ' total score: ' + p2Total +
      '\n' + player1.empire + ' total score: ' + p1Total);
    window.alert(player2.empire + ' wins!');
  }

};










