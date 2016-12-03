
var $ = jQuery = require("jquery");

angular.module('appProjectList',[	])
.controller('projectListController',['$scope','$http','moduleData',function($scope,$http,moduleData){
	console.info('into controller projectListController **************************');
	
  
	console.info(moduleData);

	$scope.callData =  function(){
	$http.get('http://localhost:3000/projectsLocations')
    .then(function(response){
    	console.info(response);
      moduleData.query1=response.data
      console.info(moduleData.query1);
    });
	}


//--  Begin::get data projects
$scope.datos=[];
$http.get('http://localhost:3000/projectsLocations')
    .then(function(response){
    	console.info(response);
      $scope.misdatos=response.data
      console.info($scope.misdatos);
    });
$scope.datos=[
	{name:'ann',age:25},
	{name:'jose',age:35}
,]


console.info('projectListController');


}])