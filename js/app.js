var app = angular.module('Risk_Calculator', ['ngRoute','ngAnimate']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/row',{
			templateUrl : 'partials/row.html',
			controller : 'Row_Graph'
		})
		.when('/area',{
			templateUrl : 'partials/area.html'
		})
		.when('/bar',{
			templateUrl : 'partials/bar.html',
			controller : 'Bar_Graph'
		});
});