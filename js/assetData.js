var $p1Ul = $('<ul id=\'asset-list\'></ul>');
var $p1Assets = $('.player1-assets');

// Player 1 asset data
var p1AssetData = [
  '<b>' + Economy.empire + '</b>' ,
  'Cash: ' + Economy.money,
  'Population: ' + Economy.population,
  'Soldiers: ' + Economy.soldiers,
  'Tanks: ' + Economy.tanks,
  'Frigates: ' + Economy.frigates,
  'Jets: ' + Economy.jetFighters,
  'Cash per turn: ' + Economy.moneyPerTurn(),
  'Bills: ' + Economy.bills
];

p1AssetData.forEach(function(item) {
  var $li = $('<li>' + item + '</li>');
  $p1Ul.append($li);
});

$p1Assets.prepend($p1Ul);

// Player 2 asset data
var p2AssetData = [
  '<b>' + Military.empire + '</b>',
  'Cash: ' + Military.money,
  'Population: ' + Military.population,
  'Soldiers: ' + Military.soldiers,
  'Tanks: ' + Military.tanks,
  'Frigates: ' + Military.frigates,
  'Jets: ' + Military.jetFighters,
  'Cash per turn: ' + Military.moneyPerTurn(),
  'Bills: ' + Military.bills
];

var $p2Ul = $('<ul id=\'asset-list\'></ul>');
var $p2Assets = $('.player2-assets');

p2AssetData.forEach(function(item) {
  var $li = $('<li>' + item + '</li>');
  $p2Ul.append($li);
});

$p2Assets.prepend($p2Ul);
