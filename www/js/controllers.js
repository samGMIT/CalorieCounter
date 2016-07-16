angular.module('starter.controllers', [])

//The controller for the home tab, it is connected to the foods factory
.controller('homeCtrl', function($scope, Foods) {
	
	//$scope object that is connected to the html page to take in new food name and calories
	$scope.details = {
		name: "",
		calories: null
	}
	
	//a function to add the food to a favorite food section
	$scope.addFavoriteFood = function(){
		//this will check if the form is blank before adding
		if($scope.details.name === ""|| $scope.details.calories === null){
			
		}else{
		Foods.addFavoriteFood($scope.details.name, $scope.details.calories);
		}
	}
	
	//connects object array from foods to controller to use in html
	$scope.favoriteFoods = Foods.allFavFood();
	
	//a function to add the food to the list of foods consumed
	$scope.addFood = function(){
		//this will check if the form is blank before adding
		if($scope.details.name === ""|| $scope.details.calories === null){
			
		}else{
		//will use the function in the food factory to add the food to the object array
		Foods.addFood($scope.details.name, $scope.details.calories)
			//will set the form blank again
			$scope.details.name = "";
			$scope.details.calories = null;
		}
	}
	
	//a function to delete a food from favorite food section
	$scope.deleteFavoriteFood = function(item){
		//will delete a food from the object array in factory
		Foods.deleteFavoriteFood(item);
	}
	
	//a function to add your favorite food to foods consumed
	$scope.quickAdd = function(item){
		//uses function from factory to add the food by parsing the specific name and calories from that specific item
		Foods.addFood(item.foodName, item.foodCalories);
	}
})

//the controller for the food tab, it is connected to the foods factory and also uses $interval
.controller('foodCtrl', function($scope, Foods, $interval) {
	//uses the object array from foods factory to use in html
	$scope.food = Foods.allFood();
	//$scope variable to be used in html for calorie count
	$scope.totalCalories = 0;
	
	//use the $interval to update the calories using findCalories function
	//Reference: https://docs.angularjs.org/api/ng/service/$interval
	$interval(findCalories, 1000);
	
	//a function to calculate calories
	function findCalories(){
		//sets variable to the variable in the foods factory
		$scope.totalCalories = Foods.totalCalories();
	}
	
	//a function to delete an added food item
	$scope.deleteFood = function(item){
		//uses a factory function to delete that specific item by parsing it into the function
		Foods.deleteFood(item);
	}
	
	//a function to re add the food you have already added
	$scope.addFood = function(item){
		//uses the add function from factory and parses in the items variables
		Foods.addFood(item.foodName, item.foodCalories);
	}
	
	
});
