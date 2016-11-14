angular.module("app.controller", [])
.controller('infinite-list-controller', function($scope) {
	$scope.items = [
	  {id: 1},
	  {id: 2},
	  {id: 3},
	  {id: 4},
	  {id: 5},
	  {id: 6},
	  {id: 7},
	  {id: 8}
	]
})