(function () {
    /* APP INIT*/
	var app = angular.module('SPAWeb', ['ngRoute','ngAnimate','SPAWebScaffolding','PageControllers']);

    /* APP CONFIG */
   	app.config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl : 'tpl/pages/home.html',
                controller : 'PageData'
            })
            .when('/about', {
                templateUrl : 'tpl/pages/about.html',
                controller : 'PageData'
            })
            .when('/contact', {
                templateUrl : 'tpl/pages/contact.html',
                controller : 'PageData'
            })
            .otherwise({
                redirectTo: '/'
            });
    
        //Use location provider to use the location history for "pretty" URLs. 
        $locationProvider.html5Mode(true);
    });

    /* PAGE DATA HANDLER */
    app.factory('Page', function() {
       var title = 'default';
       return {
         title: function() { return title; },
         setTitle: function(newTitle) { title = newTitle }
       };
    });

})();