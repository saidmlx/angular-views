var $ = jQuery = require("jquery");

//console.info($);

angular.module('appUsersControllerTable',[	])
.controller('usersControllerTable',['$scope','$http',function($scope,$http){

  console.info('usersControllerTable');

$scope.projects = [];

$scope.fillProjectsByLocation = function(){
    $http.get('http://localhost:3000/projectsLocations')
    .then(function(response){
        console.info('+++++++++++++++++++++++++');
        $scope.projects= response.data
        console.info($scope.projects);
    });
  }

$scope.fillProjectsByLocation();




}])