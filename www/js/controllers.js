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

.controller('foodCtrl', function($scope, Foods) {
	$scope.food = Foods.all();
})

.controller('calculatorCtrl', function($scope, Foods) {

});
