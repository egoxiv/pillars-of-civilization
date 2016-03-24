// getContext allows each user to make a decision to affect the users opponent
var getContext = function(index, player, opponent) {
  console.log(index);
  overlay(index, player);
  overlay(index, opponent);
  index++;
};
