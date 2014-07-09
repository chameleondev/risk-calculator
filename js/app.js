var app = angular.module('risk-tool',['ngRoute','ngAnimate']);

app.config(function($routeProvider) {

	$routeProvider
		.when('/',{
			templateUrl : 'partials/home.html',
		})
		.when('/intro',{
			templateUrl : 'partials/intro.html',
		})
		.when('/information',{
			templateUrl : 'partials/information.html',	
		})
		.when('/graphs',{
			templateUrl : 'partials/graphs.html',
			controller : 'graphsCtrl',
			controllerAs : 'graphs'	
		})
		.when('/treatment',{
			templateUrl : 'partials/treatment.html',
		})
		.when('/consultation',{
			templateUrl : 'partials/consultation.html',
		});
	
});