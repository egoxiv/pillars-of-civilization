var Player1 = {
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

var Player2 = {
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
