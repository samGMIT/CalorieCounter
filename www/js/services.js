angular.module('starter.services', [])

.factory('Foods', function() {
	var foods = {
	  food:[{
		  foodName: "Rice",
		  foodCalories: 410,
		  added: new Date(),
		  number: 0
	  }]
	  ,
	  favoriteFood:[{
		  foodName: "Beans",
		  foodCalories: 250,
		  added: new Date(),
		  number: 0
	  }]
	};

	
	var totalCalories = 0;
	
	function totalCal(){
		totalCalories = 0;
		for(i = 0; i < foods.food.length; i++){
			totalCalories = (foods.food[i].foodCalories*1) + (totalCalories*1);
		}
		//console.log(totalCalories);
		return totalCalories;
	}
	
	function addFood(name, calories){
		foods.food.push({foodName: name, foodCalories: calories, added: new Date(), number: foods.food.length+1});
	}
	
	function addFavoriteFood(name, calories){
		foods.favoriteFood.push({foodName: name, foodCalories: calories, added: new Date(), number: foods.favoriteFood.length+1});
	}
	
	function deleteFood(deletedFood){
		foods.food.splice(foods.food.indexOf(deletedFood), 1);
	}
	
	function deleteFavoriteFood(deletedFood){
		foods.favoriteFood.splice(foods.food.indexOf(deletedFood), 1);
	}
	
  return {
    allFood: function(){
		return foods.food;
	},
	allFavFood: function(){
		return foods.favoriteFood;
	},
	addFavoriteFood: addFavoriteFood,
	addFood: addFood,
	deleteFood: deleteFood,
	deleteFavoriteFood: deleteFavoriteFood,
	totalCalories: totalCal
  };
});
