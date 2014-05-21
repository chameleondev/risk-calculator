app.controller('Risk', function($scope){
	$scope.name = "Dillon";

	$scope.default = true;
	$scope.female = false;
	$scope.alf = false;
	$scope.age = 60;


	$scope.hello = function(){
	
			console.log('hello');
		
	};
	
});


app.controller('Row_Graph',function($scope){

	$scope.noTherapy = 50;
	$scope.aspirin = 75;
	$scope.vka = 1.7;
	$scope.noak = 1.2;	

});