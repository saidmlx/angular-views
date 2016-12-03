

var $ = jQuery = require('jquery');
var moment       = require('moment');
var fullcalendar = require('fullcalendar');


angular.module('appTaskCalendar',[	])
.controller('taskCalendarController',['$scope','uiCalendarConfig',function($scope,uiCalendarConfig){
	console.info('taskCalendarController');
 	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	

	$scope.uiConfig = {
	  calendar:{
		height: 450,
		editable: true,
		header:{
		  left: 'month basicWeek basicDay agendaWeek agendaDay',
		  center: 'title',
		  right: ' prev,next today'
		},
		eventClick: $scope.alertEventOnClick,
		eventDrop: $scope.alertOnDrop,
		eventResize: $scope.alertOnResize
	  }
	};

	$scope.events = [
	  {title: 'All Day Event'		,start: new Date(y, m, 1)	},
	  {title: 'Long Event'			,start: new Date(y, m, d - 5)				,end: new Date(y, m, d - 2)},
	  {title: 'Repeating Event'	,start: new Date(y, m, d - 3, 16, 0),allDay: false},
	  {title: 'Repeating Event'	,start: new Date(y, m, d + 4, 16, 0),allDay: false},
	  {title: 'Birthday Party'	,start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
	  {title: 'Click for Google',start: new Date(y, m, 28)					,end: new Date(y, m, 29),	url: 'http://google.com/'}
	];

	$scope.eventSource = {
			url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
			className: 'gcal-event',           // an option!
			currentTimezone: 'America/Chicago' // an option!
	};

 	$scope.eventsF = function (start, end, timezone, callback) {
	  var s = new Date(start).getTime() / 1000;
	  var e = new Date(end).getTime() / 1000;
	  var m = new Date(start).getMonth();
	  var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
	  callback(events);
	};
	
	$scope.eventSources = [$scope.events];


	$scope.changeView = function(view,calendar) {
		uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
	};

}])