var $ = jQuery = require("jquery");

//console.info($);

angular.module('appUsersController',[	])
.controller('usersControllerMap',['$scope','$http',function($scope,$http){


console.info('usersControllerMap')

$scope.data=[];
$scope.locations=[];
$scope.highmap = null;
var supportsLatLon = !!Highcharts.maps['countries/mx/mx-all']['hc-transform'];


$scope.createOptionsMap = function(){

  
    // Initiate the chart
    return {
      chart: {
            animation: true
        },
        title : {
          text : ''
        },
        subtitle : {
          text : ''
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        plotOptions:{
          series: {
            point: {
              events: {
                click: function (e) {

                  console.info(e);
                  console.info(this);
                },
                mouseOver:function (e) {

                  console.info('mouseOver');
                  
                  
                  console.info($('#container-footer .actualdata') ); 
                  $('#container-footer .actualdata').remove(); 
                  $('#container-footer').append('<div class="actualdata"><span>EVM: '+this.data.EVM+'</span></div>'); 

                  //console.info(e);
                  //console.info(this);
                }
              }
            }
          }
        },
        tooltip: {
          //useHTML:true,

          headerFormat: '<span style="font-size:14px"><b>{series.name}</b></span><br/>',
                
                


            pointFormatter: function () {
              
              return  '<span >PM: <b>'+this.data.pm+'</b></span> <br>'+
                      '<span >Location: <b>'+this.data.location+'</b></span> <br>'+
                      '<span >EVM: <b>'+this.data.EVM+'</b></span> <br>';

            },
            footerFormat: '<span style="font-size:10px">update at 2017-01-01 06:25</span><br/>'
        },
        colorAxis: {
            min: 0
        },
        series: [
          {
            //data: data,
            mapData: Highcharts.maps['countries/mx/mx-all'],
            
          },
          {
            type: 'mappoint',
            id: 'points',
            name: 'Projects',
            draggableX: true,
            draggableY: true,
            cursor: 'move',
          }
        ]
    };

}

  $scope.fillProjectsByLocation = function(){
    $http.get('http://localhost:3000/projectsLocations')
    .then(function(response){
      console.info('response')
      console.info(response)

      console.info($scope.createOptionsMap())

      
      $scope.highmap= Highcharts.mapChart('container', $scope.createOptionsMap())




      //$scope.highmap.series[1].addPoint( {lat: 32.4966818, lon: -117.087888} )

      //$scope.highmap.series[1].addPoint( {lat: 20.7476358, lon: -89.1161944, name:'p1',color:'#FF00FF', id:'miPunto'} )

angular.forEach(response.data, function(item, key) {

  $scope.highmap.series[1].addPoint( {lat: item.lat, lon: item.lon , data:item });
});


    });
  }

$scope.fillProjectsByLocation();



}])