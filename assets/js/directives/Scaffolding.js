(function() {
	//Top Level navigation
	var scaffolding = angular.module('SPAWebScaffolding', []);
	
	scaffolding.directive('topNavBar', function() {
		return {
			restrict: 'E',
			templateUrl: 'tpl/modules/_nav-top.html'
		};
	});

	scaffolding.directive('siteFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'tpl/modules/_site-footer.html'
		};
	});

})();