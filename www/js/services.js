angular.module('starter.services', [])

.factory('Foods', function() {
  var foods = {
	  food:[{
		  foodName: "Pizza",
		  foodCalories: 850,
		  added: new Date(),
		  number: 0
	  }]
  };
	
	function addFood(name, calories){
		foods.food.push({foodName: name, foodCalories: calories, added: new Date(), number: foods.food.length+1})
	}
	
  return {
    all: function(){
		return foods.food;
	},
	addFood: addFood
  };
});
