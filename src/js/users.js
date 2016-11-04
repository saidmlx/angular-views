



require('highcharts-ng');

require('./users/map');
require('./users/table');

angular.module('appProjects',[
  'ui.router','highcharts-ng'
  ,'appUsersController'
  ,'appUsersController2'
  ])


.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){


$stateProvider
.state('users',{
    abstract:true,
    url:'/users',
    templateUrl:'./partials/users.html',
    controller:function($scope,$rootScope,$http,$state){
      
      $scope.users={};

      $http.get('http://localhost:3000/tablaX')
        .then(function(response){
          $scope.users = response.data;
      });
    }
})

.state('users.dashboard',{
    
    url:'/dashboard',
    views:{
      'map':{
        templateUrl:'./partials/users.vMap.html',
        controller: 'usersControllerMap'
      },
      'table':{
        templateUrl:'partials/users.vTable.html',
        controller:'usersControllerTable'
      }

  }

})


}]);