var decisions = [
  {
    decisionA: 'Invest In Education',
    decisionADescription: 'This decision will take your opponents population from the empire (200 citizens) and move them to your empire (all 200) for 5 turns.',
    actionA: function() {
      // ruin opponents day here
    },
    decisionB: 'Steal Opponent\'s Tanks',
    decisionBDescription: 'Or you can choose to take away your opponents tanks and add them to your inventory, reducing your opponents total unit damage and increasing yours.',
    actionB: function() {
      // ruin opponents day here
    }
  },
  {
    decisionA: 'Build Roads',
    decisionADescription: 'Create jobs and take away your opponents citizens! This decision will increase your gold per turn for five turns, add 100 citizens to your total population and take 500 gold away from your opponents total cash and deposit it into your total cash.',
    decisionB: 'Recruit opponent\’s soldiers',
    decisionBDescription: 'Take 50 of your opponents soldiers and add them to your total soldier count, which will increase your total unit damage and reduce your opponents. Your opponent will be billed for the deserters for 500 gold.'
  },
  {
    decisionA: 'Extract Natural Resources',
    decisionADescription: 'Make more gold per turn temporarily by adding 100 citizens, bill your opponent 1000 gold for expensive resources and take 100 citizens away.',
    decisionB: 'Invest in Military Research',
    decisionBDescription: 'Permanently increase the damage of all troops by increasing multiplier by 2.',

  },
  {
    decisionA: 'Build world bank',
    decisionADescription: 'Get automatic 2000 gold and permanent increase in gold per turn by reducing divider. Bills opponent for 2000 gold.',
    decisionB: 'Steal Opponents jets',
    decisionBDescription: 'Steal 20 of your opponents jets, taking the unit that does the most damage away from your opponent and add it to your total jets increasing your total unit damage significantly.'
  }
];

var getDecision = function(index) {

};




// functions that decrement and increment

// function(){
//   for (var i = 0; i < this.choices.length; i++) {
//     this.choices[i].call(this)
//   }
// }
