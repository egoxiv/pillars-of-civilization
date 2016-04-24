var counter   = 0;
var turn      = 0;

$(function(){
  $('.show-instructions').on('click', function() {
    $('.instructions').toggle();
    $('#main-game').toggle();
  });

  $('#start-button').on('click', function() {
    startGame();
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

var setInventoryData = function() {
  var assets = ['money', 'population', 'soldiers', 'tanks', 'frigates', 'jetFighters', 'bills'];

  $('.p1-asset-item #moneyPerTurn').text( Player1.moneyPerTurn() );
  $('.p2-asset-item #moneyPerTurn').text( Player2.moneyPerTurn() );

  for(var i = 0; i < assets.length; i++) {
    $('.p1-asset-item #' + assets[i]).text(Player1[assets[i]]);
    $('.p2-asset-item #' + assets[i]).text(Player2[assets[i]]);
  }
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
  // Sets total money, totalUnits, and totalUnitDamage
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
