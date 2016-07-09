angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope, Foods) {
	$scope.details = {
		name: "",
		calories: null
	}
	
	
	$scope.addFood = function(){
		Foods.addFood($scope.details.name, $scope.details.calories)
		$scope.details.name = "";
		$scope.details.calories = null;
	}
})

.controller('foodCtrl', function($scope, Foods, $interval) {
	$scope.food = Foods.all();
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
	
	
})

.controller('calculatorCtrl', function($scope, Foods) {

});
