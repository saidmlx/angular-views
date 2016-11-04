var $ = jQuery = require("jquery");

//console.info($);

angular.module('appUsersController',[	])
.controller('usersControllerMap',['$scope',function($scope){


console.info('usersControllerMap')



    var data2 = [
        {
            "hc-key": "mx-3622",
            "code": "mx-3622",
            "z": 100
        },
        {
            "hc-key": "mx-bc",
            "code": "mx-bc",
            "z": 150
        },
        {
            "hc-key": "mx-bs",
            "code": "mx-bs",
            "z": 200
        },
        {
            "hc-key": "mx-so",
            "z": 3000
        }
];
    // Prepare demo data
    var data = [
        {
            "hc-key": "mx-3622",
            "value": 0
        },
        {
            "hc-key": "mx-bc",
            "value": 1
        },
        {
            "hc-key": "mx-bs",
            "value": 2
        },
        {
            "hc-key": "mx-so",
            "value": 3
        },
        {
            "hc-key": "mx-cl",
            "value": 4
        },
        {
            "hc-key": "mx-na",
            "value": 5
        },
        {
            "hc-key": "mx-cm",
            "value": 6
        },
        {
            "hc-key": "mx-qr",
            "value": 7
        },
        {
            "hc-key": "mx-mx",
            "value": 8
        },
        {
            "hc-key": "mx-mo",
            "value": 9
        },
        {
            "hc-key": "mx-df",
            "value": 10
        },
        {
            "hc-key": "mx-qt",
            "value": 11
        },
        {
            "hc-key": "mx-tb",
            "value": 12
        },
        {
            "hc-key": "mx-cs",
            "value": 13
        },
        {
            "hc-key": "mx-nl",
            "value": 14
        },
        {
            "hc-key": "mx-si",
            "value": 15
        },
        {
            "hc-key": "mx-ch",
            "value": 16
        },
        {
            "hc-key": "mx-ve",
            "value": 17
        },
        {
            "hc-key": "mx-za",
            "value": 18
        },
        {
            "hc-key": "mx-ag",
            "value": 19
        },
        {
            "hc-key": "mx-ja",
            "value": 20
        },
        {
            "hc-key": "mx-mi",
            "value": 21
        },
        {
            "hc-key": "mx-oa",
            "value": 22
        },
        {
            "hc-key": "mx-pu",
            "value": 23
        },
        {
            "hc-key": "mx-gr",
            "value": 24
        },
        {
            "hc-key": "mx-tl",
            "value": 25
        },
        {
            "hc-key": "mx-tm",
            "value": 26
        },
        {
            "hc-key": "mx-co",
            "value": 27
        },
        {
            "hc-key": "mx-yu",
            "value": 28
        },
        {
            "hc-key": "mx-dg",
            "value": 29
        },
        {
            "hc-key": "mx-gj",
            "value": 30
        },
        {
            "hc-key": "mx-sl",
            "value": 31
        },
        {
            "hc-key": "mx-hg",
            "value": 32
        }
    ];

  var supportsLatLon = !!Highcharts.maps['countries/mx/mx-all']['hc-transform'];
    // Initiate the chart
    var myChart= Highcharts.mapChart('container', {
      chart: {
            animation: true
        },
        title : {
          text : 'Highmaps basic demo'
        },
        subtitle : {
          text : 'Source map: <a href="https://code.highcharts.com/mapdata/countries/mx/mx-all.js">Mexico</a>'
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
         tooltip: {
          useHTML:true,
            pointFormatter: function () {
              console.info('pointFormatter')
              console.info(this)
              console.info('pointFormatter')

              //return "<div id='chart'>** </div>";
              //return supportsLatLon ? 'Lat: ' + this.lat.toFixed(3) + ', Lon: ' + this.lon.toFixed(3) : 'x: ' + this.x + ', y: ' + this.y;
              return supportsLatLon ? 'Lat: ' + this.lat.toFixed(3) + ', Lon: ' + this.lon.toFixed(3) : 'x: ' + this.x + ', y: ' + this.y;
            }
        },
        colorAxis: {
            min: 0
        },
        series: [
          {
            data: data,
            mapData: Highcharts.maps['countries/mx/mx-all'],
            
          },
          {
            type: 'mappoint',
            id: 'points',
            name: 'Points',
            draggableX: true,
            draggableY: true,
            cursor: 'move',
          }/*,
          {
            mapData: Highcharts.maps['countries/mx/mx-all'],
                type: 'mapbubble',
                name: 'Population 2013',
                joinBy: ['hc-key', 'code'],
                data: data2,
                color:'red',
                //minSize: 0,
                //maxSize: '12%',
                tooltip: {
                    pointFormat: '{point.code}: {point.z} thousands'
                }
            }*/
        ]
    });

console.info('---')
console.info(myChart.series[1].chart.fromPointToLatLon)

console.info(myChart.series[1].chart.fromLatLonToPoint( {lat: 32.4966818, lon: -117.087888} ))
console.info('---')




console.info('Creating path')


myChart.series[1].addPoint( {lat: 32.4966818, lon: -117.087888} )


myChart.series[1].addPoint( {lat: 20.7476358, lon: -89.1161944, name:'p1',color:'#FF00FF', id:'miPunto', data:{var:'var1',algo:'algo mas'}} )



        var pos  = myChart.fromLatLonToPoint({ lat: 32.4966818, lon: -117.087888});
        var pos2 = myChart.fromLatLonToPoint({lat: 20.7476358, lon: -89.1161944});

        var ax=myChart.xAxis[0].toPixels(pos.x);
        var ay=myChart.yAxis[0].toPixels(pos.y);
        var bx=myChart.xAxis[0].toPixels(pos2.x);
        var by=myChart.yAxis[0].toPixels(pos2.y);


        var h=((Math.sqrt(Math.pow(by-ay,2)+ Math.pow(bx-ax,2)))*.3)*(-1) ;
        console.debug("h="+h);
  
        var dx=bx-h*(Math.sin( Math.atan((by-ay)/(bx-ax))- .63 ));
        console.debug("dx="+dx);
        var dy=by+h*(Math.cos(Math.atan((by-ay)/(bx-ax))- .63 ));
        console.debug("dy="+dy);
  
        var cx=ax-h*(Math.sin(Math.atan((by-ay)/(bx-ax))+ .63 ));
        console.debug("cx="+cx);
        var cy=ay+h*(Math.cos(Math.atan((by-ay)/(bx-ax)) + .63 ));
        console.debug("cy="+cy);

        myChart.renderer.path(['M',ax, ay, 'C', cx, cy, dx, dy, bx, by])
        .attr({
          zIndex: 100,
            'stroke-width': 2,
            stroke: 'red'
        })
        .add();





}])