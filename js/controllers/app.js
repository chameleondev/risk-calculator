app.controller('Risk', function($scope,$http){

	window.scope = $scope;

	$scope.age = 60;

	$scope.treatments = {
		no_therapy : 50,
		aspirin : 75,
		vka : 17,
		noak : 12
	}

	$scope.fetch = function(){
		$http.get('js/symptoms.json').success(function(data,status){

			$scope.symptoms = data;


		}).error(function(){

			alert('error!');

		});
	}

	$scope.fetch();

	
	$scope.changePercentage = function(obj){

		var id = (obj.target.id);
		//object of clicked elements json
		 console.log($scope.symptoms[id].status)

		for(key in $scope.treatments){

			//value of the treatment
			var val = $scope.treatments[key];
			//difference 
			var dif = $scope.symptoms[id][key];
			//status of checkbox
			var status = $scope.symptoms[id].status;

			 // console.log(key);
			 // console.log(val);

			 if(val <= 100){

			 	if(!status) {

				 	$scope.treatments[key] = val + dif;

				 }else{

				 	$scope.treatments[key] = val - dif;

				 }

			 }

			 

		}

	};


	$scope.activeRows = function(){

		$('.man_icon').removeClass('active');

		for(var key in $scope.treatments){

			var val = $scope.treatments[key];

			val = Math.round(val/10);

			$('.'+key+'_row .man_icon').slice(0,val).addClass('active');

		}

	};


	






});


app.controller('Row_Graph',function($scope){

	// var num = $scope.$parent.rows.noTherapy.round();

	// $('.no_therapy_row .man_icon').removeClass('active');

	// setTimeout(function(){
	// 	$('.no_therapy_row .man_icon').slice(0,num).addClass('active');
	// },200)

	$scope.$parent.activeRows();


});


app.controller('Bar_Graph',function($scope){

	console.log($scope.$parent.treatments);

	var treatments = $scope.$parent.treatments;

	var data = [
		treatments.no_therapy,
		treatments.aspirin,
		treatments.vka,
		treatments.noak,
	];

	var canvas = d3.select('.bar_canvas')
						.append('svg')
						.attr('width',400)
						.attr('height',400);

	var group = canvas.append('g')
				.attr('transform','skew(45)');

	var dataScale = d3.scale.linear()
						.domain([0,100])
						.range([0,400]);

	var colorScale = d3.scale.linear()
					.domain([0,100])
					.range(["red","blue"])

	var bars = group.selectAll('rect')
				.data(data)
				.enter()
				.append('rect')
				.attr('x',function(d,i){return i * 100 })
				.attr('width',50)
				.attr('height',function(d){return dataScale(d)})
				.attr('fill',function(d){return colorScale(d)});



});