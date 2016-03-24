var decisions = [
  {
    headline1: 'Invest In Education',
    description1: 'This decision will take your opponents population from the empire (200 citizens) and move them to your empire (all 200) for 5 turns.',
    actionA: function() {
      this.population = this.population + 200;
      this.opponent.population = this.opponent.population - 200;
    },
    headline2: 'Steal Opponent\'s Tanks',
    description2: 'Or you can choose to take away your opponents tanks (20) and add them to your inventory, reducing your opponents total unit damage and increasing yours.',
    actionB: function() {
      this.tanks = this.tanks + 20;
      this.opponent.tanks = this.opponent.tanks - 20;
    }
  },
  {
    headline1: 'Build Roads',
    description1: 'Create jobs and take away your opponents citizens! This decision will increase your gold per turn, add 100 citizens to your total population and take 500 gold and 100 cictizens away from your opponents total.',
    actionA: function() {
      this.population = this.population + 100;
      this.opponent.population = this.opponent.population - 100;
      this.opponent.money = this.opponent.money - 500;
    },
    headline2: 'Recruit opponent\'s soldiers',
    description2: 'Take 50 of your opponents soldiers and add them to your total soldier count, which will increase your total unit damage and reduce your opponents. Your opponent will be billed for the deserters for 500 gold.',
    actionB: function() {
      this.soldiers = this.soldiers + 50;
      this.opponent.soldiers = this.opponent.soldiers - 50;
      this.opponent.bills = this.opponent.bills + 500;
    }
  },
  {
    headline1: 'Extract Natural Resources',
    description1: 'Make more gold per turn by adding 100 citizens, bill your opponent 1000 gold for expensive resources and take 100 citizens away.',
    actionA: function() {
      this.population = this.population + 100;
      this.opponent.population = this.opponent.population - 100;
      this.opponent.bills = this.opponent.bills + 1000;
    },
    headline2: 'Invest in Military Research',
    description2: 'Permanently increase the damage of all troops by increasing multiplier by 5.',
    actionB: function() {
      this.damageMultiplier = this.damageMultiplier + 5;
    }
  },
  {
    headline1: 'Build world bank',
    description1: 'Get automatic 2000 gold and permanent increase in gold per turn by reducing divider. Bills opponent for 2000 gold.',
    actionA: function() {
      this.money = this.money + 2000;
      this.moneyDivider = this.moneyDivider - 2;
      this.opponent.bills = this.opponent.bills + 2000;
    },
    headline2: 'Steal Opponents jets',
    description2: 'Steal 20 of your opponents jets, taking the unit that does the most damage away from your opponent and add it to your total jets increasing your total unit damage significantly.',
    actionB: function() {
      this.jetFighters = this.jetFighters + 20;
      this.opponent.jetFighters = this.opponent.jetFighters - 20;
    }
  }
];
