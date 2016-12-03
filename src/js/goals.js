
angular.module('appGoals',[
	 'ui.router'
	])


.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){


$stateProvider
.state('goals', {
        url: '/goals',
        templateUrl: './partials/goals/list.html',
        controller: function(){console.info('goals')},
        ncyBreadcrumb: {
          label: 'Goals',
          parent: 'projects'
        }
      })
      .state('goals.detail', {
        url: 'detail',
        views: {
          "@" : {
            templateUrl: './partials/goals/detail.html',
            controller:  function(){console.info('detail')},
          }
        },
        ncyBreadcrumb: {
          label: 'detail'
        }
      })
      .state('goals.detail.report', {
        url: 'report',
        views: {
          "@" : {
            templateUrl: './partials/goals/report.html',
            controller:  function(){console.info('report')},
          }
        },
        ncyBreadcrumb: {
          label: 'report'
        }
      });


}]);