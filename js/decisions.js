var decisions = [
  {
    headline1: 'Invest In Education',
    description1: 'This decision will take your opponents population from the empire (200 citizens) and move them to your empire (all 200) for 5 turns.',
    actionA: function(opponent) {
      console.log('Hello from "Invest in Education"');
      console.log(opponent);
      var population = this.population + 200;
      opponent.population = opponent.population - 200;
    },
    headline2: 'Steal Opponent\'s Tanks',
    description2: 'Or you can choose to take away your opponents tanks and add them to your inventory, reducing your opponents total unit damage and increasing yours.',
    actionB: function(opponent) {
      console.log('Hello from "Steal opponent Tanks"');
      console.log(opponent);
      this.tanks = this.tanks + 20;
      opponent.tanks = opponent.tanks - 20;
    }
  },
  {
    headline1: 'Build Roads',
    description1: 'Create jobs and take away your opponents citizens! This decision will increase your gold per turn for five turns, add 100 citizens to your total population and take 500 gold away from your opponents total cash and deposit it into your total cash.',
    actionA: function(opponent) {
      console.log('Hello from "Build Roads"');
      console.log(opponent);
      this.population = this.population + 100;
      opponent.population = opponent.population - 100;
    },
    headline2: 'Recruit opponent\'s soldiers',
    description2: 'Take 50 of your opponents soldiers and add them to your total soldier count, which will increase your total unit damage and reduce your opponents. Your opponent will be billed for the deserters for 500 gold.',
    actionB: function(opponent) {
      console.log('Hello from "Recruit opponents soldiers"');
      console.log(opponent);
      this.soldiers = this.soldiers + 50;
      opponent.soldiers = opponent.soldiers - 50;
    }
  },
  {
    headline1: 'Extract Natural Resources',
    description1: 'Make more gold per turn temporarily by adding 100 citizens, bill your opponent 1000 gold for expensive resources and take 100 citizens away.',
    actionA: function(opponent) {
      console.log('Hello from "Extract Natural Resources"');
      console.log(opponent);
      this.population = this.population + 100;
      opponent.bills = opponent.bills + 1000;
    },
    headline2: 'Invest in Military Research',
    description2: 'Permanently increase the damage of all troops by increasing multiplier by 5.',
    actionB: function(opponent) {
      console.log('Hello from "Invest in Military Research"');
      console.log(opponent);
      this.damageMultiplier = this.damageMultiplier + 5;
    }
  },
  {
    headline1: 'Build world bank',
    description1: 'Get automatic 2000 gold and permanent increase in gold per turn by reducing divider. Bills opponent for 2000 gold.',
    actionA: function(opponent) {
      console.log('Hello from "Build World Bank"');
      console.log(opponent);
      this.money = this.money + 2000;
      this.moneyDivider = this.moneyDivider - 2;
      opponent.bills = opponent.bills + 2000;
    },
    headline2: 'Steal Opponents jets',
    description2: 'Steal 20 of your opponents jets, taking the unit that does the most damage away from your opponent and add it to your total jets increasing your total unit damage significantly.',
    actionB: function(opponent) {
      console.log('Hello from "Steal opponents jets"');
      console.log(opponent);
      this.jetFighters = this.jetFighters + 20;
      opponent.jetFighters = opponent.jetFighters - 20;
    }
  }
];
