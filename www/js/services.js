angular.module('starter.services', [])

//Factory to store object array and functions for the app
.factory('Foods', function() {
	//this variable holds 2 object arrays for favorite food and general food
	//both have foodname, foodcalories, the date added and the id of that food
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

	//variable to calculate total calories
	var totalCalories = 0;
	
	//a function to calculate total calories
	function totalCal(){
		//set the calories to 0
		totalCalories = 0;
		//loop to calculate the calories of all foods in the foods.food array
		for(i = 0; i < foods.food.length; i++){
			totalCalories = (foods.food[i].foodCalories*1) + (totalCalories*1);
		}
		
		//return the amount of calories calculated
		return totalCalories;
	}
	
	//a function to add food by pushing onto the object array and parsing information in from controller
	function addFood(name, calories){
		foods.food.push({foodName: name, foodCalories: calories, added: new Date(), number: foods.food.length+1});
	}
	
	//a function to add favorite food by pushing onto the object array and parsing information in from controller
	function addFavoriteFood(name, calories){
		foods.favoriteFood.push({foodName: name, foodCalories: calories, added: new Date(), number: foods.favoriteFood.length+1});
	}
	
	//a function to delete food by splicing the object array and parsing deleted item from controller
	function deleteFood(deletedFood){
		foods.food.splice(foods.food.indexOf(deletedFood), 1);
	}
	
	//a function to delete favorite food by splicing the object array and parsing deleted item from controller
	function deleteFavoriteFood(deletedFood){
		foods.favoriteFood.splice(foods.food.indexOf(deletedFood), 1);
	}

	//factory must use return to allow controllers to call specific returns. This factory will return the object arrays, totalCalories and adding/deleting functions
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
