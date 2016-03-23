var Player1 = {
  empire: 'American Empire',
  money: 20000,
  population: 1000,
  soldiers: 75,
  tanks: 75,
  frigates: 50,
  jetFighters: 50,
  bills: 0,
  damageMultiplier: 50,
  moneyDivider: 6,
  moneyPerTurn: function() {
    // economy makes more money per turn
    var total = Math.floor(this.population / this.moneyDivider);
    return total;
  },
  totalUnits: function() {
    return this.soldiers + this.tanks + this.frigates + this.jetFighters;
  },
  totalUnitDamage: function() {
    var soldiers = this.soldiers * this.damageMultiplier;
    var tanks = this.tanks * this.damageMultiplier;
    var frigates = this.frigates * this.damageMultiplier;
    var jets = this.jetFighters * this.damageMultiplier;
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
  damageMultiplier: 75,
  moneyDivider: 10,
  moneyPerTurn: function() {
    var total = Math.floor(this.population / this.moneyDivider);
    return total;
  },
  totalUnits: function() {
    return this.soldiers + this.tanks + this.frigates + this.jetFighters;
  },
  totalUnitDamage: function() {
    var soldiers = this.soldiers * this.damageMultiplier;
    var tanks = this.tanks * this.damageMultiplier;
    var frigates = this.frigates * this.damageMultiplier;
    var jets = this.jetFighters * this.damageMultiplier;
    return soldiers + tanks + frigates + jets;
  }
};
