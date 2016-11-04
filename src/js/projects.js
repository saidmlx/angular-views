



require('highcharts-ng');
require('./projects.dashboard.view2');
require('./projects.dashboard.view3');

angular.module('appProjects',[
	'ui.router','highcharts-ng'
  ,'appProjectsController'
  ,'appProjectsController3'
	])


.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){


$stateProvider
.state('projects',{
    abstract:true,
    url:'/projects',
    templateUrl:'./partials/projects.html',
    controller:function($scope,$rootScope,$http,$state){
      
      $scope.projects={};

      $http.get('http://localhost:3000/tablaX')
        .then(function(response){
          $scope.projects = response.data;
      });



//$state.go('projects.dashboard.view1');

    }
})

.state('projects.dashboard',{
    
    url:'/dashboard',
    views:{
    	'view1':{
    		templateUrl:'./partials/projects.dashboard.view1.html',
    		controller:function($scope){
    			 
           $scope.chartConfig = {
              options: {
                  chart: {
                      type: 'bar'
                  }
              },
              series: [{
                  data: [10, 15, 12, 8, 7]
              }],
              loading: false
          }

    		}//--end controller
    	},
    	'view2':{
    		templateUrl:'partials/projects.dashboard.view2.html',
    		controller: 'projectDashboardView2'
    	},
      'view3':{
        templateUrl:'partials/projects.dashboard.view3.html',
        controller: 'projectDashboardView3'
      }

  }

})


}]);