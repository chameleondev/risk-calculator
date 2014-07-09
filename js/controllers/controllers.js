app.controller('homeCtrl',function(){
	$scope.name = "Dillon";
});




app.controller('graphsCtrl',function($scope,$http){

	$http.get('js/data.json').success(function(data,status){

		$scope.data = data;

	}).error(function(){

		console.log(this);

	});


	

	

});

