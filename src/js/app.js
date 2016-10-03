

var $ = jQuery = require("jquery");
require('angular');
require('angular-ui-router');
require('bootstrap');






angular.module('myApp',['ui.router'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider
  .state('dashboard',{
    url:'/dashboard',
    templateUrl:'./partials/dashboard.html',
    controller:function($scope,$rootScope){
      $scope.id=22;
      console.info($rootScope.settings);
      //--
    }
  })



}])
.factory('settings',['$rootScope',function($rootScope){
  var settings={
    user:'anonim'
  }
  console.info('into settings ...')
  //$rootScope.settings=settings;
  return settings
}])
.run(['$rootScope','$state','$location','settings',function($rootScope,$state,$location,settings){
  $rootScope.$state     = $state; // state to be accessed from view
  $rootScope.$location  = $location; // location to be accessed from view
  $rootScope.settings   = settings; // global settings to be accessed from view
}])
