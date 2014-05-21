var app = angular.module('Risk_Calculator', ['ngRoute','ngAnimate']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/row',{
			templateUrl : 'partials/row.html'
		})
		.when('/area',{
			templateUrl : 'partials/area.html'
		})
		.when('/bar',{
			templateUrl : 'partials/bar.html'
		});
});