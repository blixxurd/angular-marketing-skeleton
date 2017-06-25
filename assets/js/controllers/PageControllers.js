(function() {
	var pagectrl = angular.module('PageControllers', []);
	pagectrl.controller("PageData", ["$scope",
		function($scope) {
			$scope.page_data = {body: "Body Content"};
		}
	]);
})();