(function() {
	var pagectrl = angular.module('PageControllers', ["firebase"]);
	pagectrl.controller("PageData", ["$scope", "$firebaseArray",
		function($scope, $firebaseArray) {
			var ref = new Firebase("https://rg2d6iivaeb.firebaseio-demo.com/");
			$scope.page_data = $firebaseArray(ref);
		}
	]);
})();