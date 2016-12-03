
var $ = jQuery   = require('jquery');
var moment       = require('moment');
var fullcalendar = require('fullcalendar');

require('./tasks/calendar');
require('./tasks/users');
require('./plugins/calendar');

angular.module('appTasks',[
	 'ui.router'
  ,'ui.calendar'
  ,'appTaskCalendar'
  ,'appTaskUsers'
	])


.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){


$stateProvider
.state('tasks',{
    abstract:true,
    url:'/tasks',
    templateUrl:'./partials/tasks/dashboard.html',
    controller:function($scope,$rootScope,$http,$state){

      console.info('**********');
      
      console.info(moment().format('MMMM Do YYYY, h:mm:ss a')); // November 9th 2016, 4:24:32 pm
      console.info(moment().format('dddd'));                    // Wednesday
      console.info(moment().format("MMM Do YY"));               // Nov 9th 16
      console.info(moment().format('YYYY [escaped] YYYY'));     // 2016 escaped 2016
      console.info(moment().format());             


      
    }
})

.state('tasks.dashboard',{
    url:'/dashboard',
    views:{
    	'calendar':{
    		templateUrl:'./partials/tasks/calendar.html',
    		controller: 'taskCalendarController'
    	},
      'users':{
        templateUrl:'./partials/tasks/users.html',
        controller: 'taskUserController'
      }

  }
})


}]);