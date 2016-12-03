
require('highcharts-ng');
require('./projects/list');
require('./projects/map');
require('./projects/project');

angular.module('appProjects',[
	 'ui.router'
  ,'highcharts-ng'
  ,'appProjectList'
  ,'appProjectMap'
  ,'appProject'
  
	])


.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){


$stateProvider
.state('projects',{
    //abstract:true,
    url:'/projects',
    views:{
      '@':{
        templateUrl:'./partials/projects/dashboard.html',
        controller:function($scope,$rootScope,$http,$state,moduleData){
          console.info('into controller dashboard **************************');
          $scope.query1=[];
          $scope.query2=[];
          $scope.query3=[];
        }
      }
    },
    resolve:{
      moduleData:function(){
        return {
          query1:[],
          query2:[]
        };
      }
    },
    /*,
    ncyBreadcrumb: {
      label: 'Projects',
      parent:'dashboard',
      skip: true
    }*/
})

.state('projects.dashboard',{
    url:'/dashboard',
    views:{
      '@':{
        templateUrl:'./partials/projects/list.html',
        controller: 'projectListController'
      }
    	/*'map':{
    		templateUrl:'./partials/projects/map.html',
    		controller: 'projectMapController'
    	},
      'list':{
        templateUrl:'./partials/projects/list.html',
        controller: 'projectListController'
      }*/
  }/*,
  ncyBreadcrumb: {
    label: 'Projects'
  }*/
})
.state('projects.dashboard.project',{
    url:'/{idProject}',
    views:{
      '@':{
        templateUrl:'./partials/projects/project.html',
        controller: 'projectController'
      }
  }/*,
  ncyBreadcrumb: {
    label: 'Project {{id}}'
  }*/
})
.state('projects.dashboard.project.detail',{
    url:'/Detail',
    views:{
      '@':{
        templateUrl:'./partials/projects/detail.html',
        controller: 'projectDetailController'
      }
  }/*,
  ncyBreadcrumb: {
    label: 'Detail'
    
  }*/
})



}]);