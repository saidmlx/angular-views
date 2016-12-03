


var $ = jQuery = require("jquery");

require('angular');
require('angular-ui-router');
//require('bootstrap');
//require('angular-ui-bootstrap');
require('angular-breadcrumb');

//--own files
require('./projects');
require('./users');
require('./tasks');
require('./goals');


angular.module('myApp',['ui.router', 'ncy-angular-breadcrumb', 'appProjects', 'appUsers', 'appTasks', 'appGoals'])
//--breadcrumbs
 .config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      prefixStateName: 'dashboard',
      template: 'bootstrap3',
      includeAbstract:true
    });
  })

//--load defaults
.config(['userServiceProvider',function(userServiceProvider){
  //-- config default
  userServiceProvider.loadValues();

}])

//--the first view
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider
  .state('dashboard',{
    url:'/dashboard',
    templateUrl:'./partials/dashboard.html',
    resolve:{
         userLogin:  function($http){
            return  $http
            .get('http://localhost:3000/users?idUser=1')
            .then(function(response){
              return response.data[0];
            });
         }
    },
    controller:function($scope,$rootScope,userLogin,userService){
      
      $rootScope.user=userLogin
      userService.menu().then(function(response){
        $rootScope.menu=response.data
        console.info($rootScope.menu)
      });
    },
    ncyBreadcrumb: {
      label: 'Dashboard'
    }

  })
}])
.factory('settings',['$rootScope',function($rootScope){
  var settings={
    path:'anonim',
  }
  console.info('into settings ...')
  return settings
}])
.provider("userService", function() {
  var defaultValues = [];

  //--here you can load default values values
  this.loadValues = function() {
    defaultValues={
      "error":false,
      "message":"",
      "menu":1
    };
  };

  this.$get = function($http) {
    return {
      menu: function() {
      return $http.get('http://localhost:3000/menu')
      },
      configInit: function() {
      return defaultValues;
      },

    };
  };
})
.run(['$rootScope','$state','$location','settings','$breadcrumb',function($rootScope,$state,$location,settings,$breadcrumb){
  $rootScope.$state     = $state;     // state to be accessed from view
  $rootScope.$location  = $location;  // location to be accessed from view
  $rootScope.settings   = settings;   // global settings to be accessed from view
  $rootScope.user       = {'idUser': '0','name':'Anonim'}; // global settings to be accessed from view

  $rootScope.isActive = function(stateName) {
      return $state.includes(stateName);
    }

    $rootScope.getLastStepLabel = function() {
      return 'Angular-Breadcrumb';
    }

  
}])
