var decisions = [
  {
    headline1: 'Invest In Education',
    description1: 'This decision will take your opponents population from the empire (200 citizens) and move them to your empire.',
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
      this.money = this.money + 1000;
      this.opponent.population = this.opponent.population - 100;
      this.opponent.bills = this.opponent.bills + 1000;
    },
    headline2: 'Invest in Military Research',
    description2: 'Permanently increase the damage of all troops by increasing multiplier by 5, and discover new way to reduce your opponents military effectiveness.',
    actionB: function() {
      this.damageMultiplier = this.damageMultiplier + 10;
      this.opponent.damageMultiplier = this.opponent.damageMultiplier - 10;
    }
  },
  {
    headline1: 'Sanctions!',
    description1: 'Sanction your opponent and charge him interest by reducing his gold per turn and sticking him with a 2000 bill. Get an automatic 2000 and make more gold per turn.',
    actionA: function() {
      this.money = this.money + 2000;
      this.moneyDivider = this.moneyDivider - 2;
      this.opponent.bills = this.opponent.bills + 2000;
      this.opponent.moneyDivider = this.opponent.moneyDivider + 2;
    },
    headline2: 'Steal Military Base',
    description2: 'Sneak up on your opponent and steal half of his fighter jets and frigates.',
    actionB: function() {
      var fighterJets = this.opponent.jetFighters /2;
      var frigates = this.opponent.frigates / 2;

      this.jetFighters = this.jetFighters + fighterJets;
      this.frigates = this.frigates + frigates;

      this.opponent.jetFighters = fighterJets;
      this.opponent.frigates = frigates;
    }
  }
];
