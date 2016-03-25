var decisions = [
  {
    headline1: 'Build a University',
    description1: 'People from all over the world move to your empire to get an education at your new university. This decision will increase your total population by 200, which means you will make more gold per turn. Your opponent will lose 200 people and gold per turn.',
    actionA: function() {
      this.population = this.population + 200;
      this.opponent.population = this.opponent.population - 200;
    },
    headline2: 'Steal Tanks!',
    description2: 'You have people inside your opponents military that can steal your opponents tanks without being noticed! This decision will take 25% of your opponents tanks and park them in your military bases. Your opponents military will be overall weaker and smaller with this decision.',
    actionB: function() {
      var twentyFivePercent = this.opponent.tanks * parseFloat( 0.25 );
      this.tanks = Math.floor( this.tanks + twentyFivePercent );
      this.opponent.tanks = Math.floor( this.opponent.tanks - twentyFivePercent );
    }
  },
  {
    headline1: 'Build roads, bridges, and skyscrapers!',
    description1: 'People are moving to your sprawling empire because there are so many jobs, more people means more cash per turn! This decision will take 300 people away from your opponent and decrease his cash per turn.',
    actionA: function() {
      this.population = this.population + 300;
      this.opponent.population = this.opponent.population - 300;
      this.opponent.money = this.opponent.money - 1000;
    },
    headline2: 'Take your opponents soldiers!',
    description2: 'Your opponents soldiers are unhappy and are ready to leave the military to join yours. With this decision, you will have 50 more soldiers at the expense of your opponent, and your opponent will be billed for 1000 gold.',
    actionB: function() {
      this.soldiers = this.soldiers + 50;
      this.opponent.soldiers = this.opponent.soldiers - 50;
      this.opponent.bills = this.opponent.bills + 1000;
    }
  },
  {
    headline1: 'Extract Natural Resources',
    description1: 'Start extracting and selling you empires abundant natural resources and sell them to the world! Take 100 of your opponents people by creating jobs and bill him 1500 gold for your expensive resources.',
    actionA: function() {
      this.population = this.population + 100;
      this.money = this.money + 1500;
      this.opponent.population = this.opponent.population - 100;
      this.opponent.bills = this.opponent.bills + 1500;
    },
    headline2: 'Modernize your military!',
    description2: 'Replace all of your outdated military tech with all the new fancy stuff to increase your military\'s overall damage. Your opponents military will be less effective against you and reduce overall damage.',
    actionB: function() {
      this.damageMultiplier = this.damageMultiplier + 5;
      this.opponent.damageMultiplier = this.opponent.damageMultiplier - 5;
    }
  },
  {
    headline1: 'Build the World Bank!',
    description1: 'This decision will pay off all of your bills (if any), give you 2000 gold and increase your gold per turn. Your bank will force the opponent to pay your bills and reduce his gold per turn.',
    actionA: function() {
      var playerBills = this.bills;
      this.bills = 0;
      this.money = this.money + 2000;
      this.moneyDivider = this.moneyDivider - 2;
      this.opponent.bills = this.opponent.bills + playerBills;
      this.opponent.moneyDivider = this.opponent.moneyDivider + 2;
    },
    headline2: 'Declare war first!',
    description2: 'Your opponent will not see you coming which will allow you to steal half of his fighter jets and battleships to add to your total inventory!', // too powerful?
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
