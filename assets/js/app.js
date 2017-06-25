var route_scope;
(function () {
	/* APP INIT*/
	var app = angular.module('SPAWeb', ['ngRoute','ngAnimate','SPAWebScaffolding','PageControllers']);

	/* APP CONFIG */
	app.config(function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/', {
				templateUrl : 'tpl/pages/home.html',
				controller : 'PageData',
				title : 'Home'
			})
			.when('/about', {
				templateUrl : 'tpl/pages/about.html',
				controller : 'PageData',
				title : 'About'
			})
			.when('/contact', {
				templateUrl : 'tpl/pages/contact.html',
				controller : 'PageData',
				title : 'Contact'
			})
			.otherwise({
				redirectTo: '/'
			});
	
		//Use location provider to use the location history for "pretty" URLs. 
		$locationProvider.html5Mode(true);
	});

	app.run(['$rootScope', '$route', function($rootScope, $route) {
	    $rootScope.$on('$routeChangeSuccess', function() {
	        document.title = $route.current.title;
	    });
	}]);

})();