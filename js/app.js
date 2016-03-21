var Military = {
  empire: 'British Empire',
  money: 10000,
  population: 1000,
  soldiers: 150,
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
  unitDiscount: function(unit) {
    return unit / 25;
    // or something like that
  }
  // units are cheaper for Military
};

var Economy = {
  empire: 'American Empire',
  money: 20000,
  population: 2000,
  soldiers: 75,
  tanks: 75,
  frigates: 50,
  jetFighters: 50,
  bills: 0,
  moneyPerTurn: function() {
    // economy makes more money per turn
    var total = Math.floor(this.population / 7);
    return total;
  },
  totalUnits: function() {
    return this.soldiers + this.tanks + this.frigates + this.jetFighters;
  }
};


var units = [
  {
    type: 'soldier',
    damage: 10,
    price: 100
  },
  {
    type: 'tank',
    damage: 30,
    price: 500
  },
  {
    type: 'frigate',
    damage: 70,
    price: 1000
  },
  {
    type: 'jet fighter',
    damage: 100,
    price: 5000
  }
];

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

var $p1Ul = $('<ul id=\'asset-list\'></ul>');
var $p1Assets = $('.player1-assets');

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

