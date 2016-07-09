angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope, Foods) {
	$scope.details = {
		name: "",
		calories: null
	}
	
	$scope.addFavoriteFood = function(){
		Foods.addFavoriteFood($scope.details.name, $scope.details.calories);
	}
	
	$scope.favoriteFoods = Foods.allFavFood();
	
	$scope.addFood = function(){
		Foods.addFood($scope.details.name, $scope.details.calories)
		$scope.details.name = "";
		$scope.details.calories = null;
	}
	
	$scope.deleteFavoriteFood = function(item){
		Foods.deleteFavoriteFood(item);
	}
	
	$scope.quickAdd = function(item){
		Foods.addFood(item.foodName, item.foodCalories);
	}
})

.controller('foodCtrl', function($scope, Foods, $interval) {
	$scope.food = Foods.allFood();
	$scope.totalCalories = 0;
	
	$interval(findCalories, 1000);
	
	function findCalories(){
	$scope.totalCalories = Foods.totalCalories();
	//console.log($scope.totalCalories);
	}
	
	$scope.deleteFood = function(item){
		Foods.deleteFood(item);
	}
	
	$scope.addFood = function(item){
		Foods.addFood(item.foodName, item.foodCalories);
	}
	
	
});
