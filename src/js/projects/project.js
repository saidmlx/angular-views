

angular.module('appProject',[	])
.controller('projectController',['$scope','$http','$stateParams',function( $scope, $http,$stateParams){
	
  console.info('projectController');

  console.info($stateParams);
  console.info($stateParams.idProject);

  $scope.id=$stateParams.idProject

 
}])
.controller('projectDetailController',['$scope','$http','$stateParams',function( $scope, $http,$stateParams){
  
  console.info('projectDetailController');

  console.info($stateParams);
  console.info($stateParams.idProject);

  $scope.id=$stateParams.idProject

 
}])

