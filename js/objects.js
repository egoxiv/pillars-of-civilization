// Economy Focused
var Player1 = {
  empire: 'American Empire',
  money: 10000,
  population: 1500,
  soldiers: 75,
  tanks: 75,
  frigates: 50,
  jetFighters: 50,
  bills: 0,
  damageMultiplier: 20,
  moneyDivider: 5,
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

// Military Focused
var Player2 = {
  empire: 'British Empire',
  money: 5000,
  population: 1000,
  soldiers: 150,
  tanks: 150,
  frigates: 100,
  jetFighters: 100,
  bills: 0,
  damageMultiplier: 35,
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

// setting up an association
Player1.opponent = Player2;
Player2.opponent = Player1;
