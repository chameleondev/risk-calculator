app.controller('Risk', function($scope){

	$scope.default = true;
	$scope.female = false;
	$scope.alf = false;
	$scope.age = 60;

	$scope.rows = {
		noTherapy : {
			val : 50,
			change_val : {
				female : 10,
				alf : 20
			}
		},
		aspirin : {
			val : 75
		},
		vka : {
			val : 17
		},
		noak : {
			val : 12
		},
		round : function(treatment){
			console.log((Math.round(this[treatment].val/10)));
		}
	};

	$scope.add = function(){

		if(!$scope.female){
			$scope.rows.noTherapy.val = $scope.rows.noTherapy.val+10;
			$scope.rows.aspirin.val = $scope.rows.aspirin.val+5;
			$scope.rows.vka.val = $scope.rows.vka.val+2;
			$scope.rows.noak.val = $scope.rows.noak.val+40;
		}else{
			$scope.rows.noTherapy.val = $scope.rows.noTherapy.val-10;
			$scope.rows.aspirin.val = $scope.rows.aspirin.val-5;
			$scope.rows.vka.val = $scope.rows.vka.val-2;
			$scope.rows.noak.val = $scope.rows.noak.val-40;
		}

	for(var key in $scope.rows){

		var obj = $scope.rows[key];


		for (var prop in obj) {

			// important check that this is objects own property 
			// not from prototype prop inherited

			if(obj.hasOwnProperty(prop)){

				console.log(obj.val);
			}
		}

			
	}
		
};


});


app.controller('Row_Graph',function($scope){

	// var num = $scope.$parent.rows.noTherapy.round();

	// $('.no_therapy_row .man_icon').removeClass('active');

	// setTimeout(function(){
	// 	$('.no_therapy_row .man_icon').slice(0,num).addClass('active');
	// },200)


});