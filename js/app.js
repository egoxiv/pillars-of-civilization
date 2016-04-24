var counter   = 0;
var turn      = 0;

$(function(){
  $('.show-instructions').on('click', function() {
    $('.instructions').toggle();
    $('#main-game').toggle();
  });
}());

var startGame = function() {
  $('#start-button').hide();

  Player1.name = prompt('Player 1 enter your first name');
  Player2.name = prompt('Player 2 enter your first name');

  $('#player1-name').text(Player1.name);
  $('#player2-name').text(Player2.name);

  $('#next-turn').on('click', function() {
    nextTurn(Player1.name, Player2.name);
  });
};

$('#start-button').on('click', function() {
  startGame();
});

var setInventoryData = function() {
  // Player 1 data setters
  $('.p1-asset-item #money').text( Player1.money );
  $('.p1-asset-item #population').text( Player1.population );
  $('.p1-asset-item #soldiers').text( Player1.soldiers );
  $('.p1-asset-item #tanks').text( Player1.tanks );
  $('.p1-p1-asset-item #frigates').text( Player1.frigates );
  $('.p1-asset-item #jets').text( Player1.jetFighters );
  $('.p1-asset-item #cashPerTurn').text( Player1.moneyPerTurn() );
  $('.p1-asset-item #bill').text( Player1.bills );

  // Player 2 data setters
  $('.p2-asset-item #money').text( Player2.money );
  $('.p2-asset-item #population').text( Player2.population );
  $('.p2-asset-item #soldiers').text( Player2.soldiers );
  $('.p2-asset-item #tanks').text( Player2.tanks );
  $('.p2-asset-item #frigates').text( Player2.frigates );
  $('.p2-asset-item #jets').text( Player2.jetFighters );
  $('.p2-asset-item #cashPerTurn').text( Player2.moneyPerTurn() );
  $('.p2-asset-item #bill').text( Player2.bills );
};

var nextTurn = function(player1, player2) {
  var $turnStatus = $('.turn-status');

  turn++;
  $turnStatus.text(turn);

  setInventoryData();

  switch (turn) {
    case 3:
      window.alert('First decision!');
      $('.btn-group').hide();
      getContext(counter, Player1, Player2);
      decisionCount = 0;
      break;
    case 6:
      counter++;
      window.alert('Second decision!');
      $('.btn-group').hide();
      getContext(counter, Player1, Player2);
      decisionCount = 0;
      break;
    case 9:
      counter++;
      window.alert('Third decision!');
      $('.btn-group').hide();
      getContext(counter, Player1, Player2);
      decisionCount = 0;
      break;
    case 12:
      counter++;
      window.alert('Last decision!');
      $('.btn-group').hide();
      getContext(counter, Player1, Player2);
      decisionCount = 0;
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
    console.log(player1.name + ' has been charged 15% of ' + p1StartTotal + ' for unpaid bills bringing your total score to ' + p1Total);
    p1Bills = 0;
  } else {
    console.log(player1.name + ' has no bills! No 15% charge');
  }

  if(p2Bills > 0) {
    var p2StartTotal = p2Total;
    var p2Penalty = p2Total * parseFloat(0.15);
    p2Total = Math.floor( p1Total - p2Penalty );
    console.log(player2.name + ' has been charged 15% of ' + p2StartTotal + ' for unpaid bills bringing your total score to ' + p2Total);
    p2Bills = 0;
  } else {
    console.log(player2.name + ' has no bills! No 15% charge');
  }

  if(p1Total > p2Total) {
    window.alert(player1.name + ' total score: ' + p1Total +
      '\n' + player2.name + ' total score: ' + p2Total);
    window.alert(player1.name + ' wins!');
  } else {
    window.alert(player2.name + ' total score: ' + p2Total +
      '\n' + player1.name + ' total score: ' + p1Total);
    window.alert(player2.name + ' wins!');
  }

};
