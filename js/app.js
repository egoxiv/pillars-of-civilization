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
  // units are cheaper for Military
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
    var total = Math.floor(this.population / 7);
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



