var $ = jQuery = require("jquery");

//console.info($);

angular.module('appUsersController2',[	])
.controller('usersControllerTable',['$scope',function($scope){

  console.info('usersControllerTable');






  function showMap(mapKey) {



    var data = [
       {'hc-key': 'mx',value: 50}
      ,{'hc-key': 'gt',value: 20}
      ,{'hc-key': 'bz',value: 20}
      ,{'hc-key': 'sv',value: 50}
      ,{'hc-key': 'hn',value: 20}
      ,{'hc-key': 'ni',value: 80}
      ,{'hc-key': 'cr',value: 90}
      ,{'hc-key': 'pa',value: 10}
];


    var supportsLatLon = !!Highcharts.maps[mapKey]['hc-transform'];

    // Initiate the chart
   var myChart= Highcharts.mapChart('containerX', {

        chart: {
            events: {
                load: function (e) {
                  
                }
            },
            animation: false
        },

        title: {
            text: 'Draw your own points or lines'
        },

        legend: {
            enabled: false
        },

        tooltip: {
            pointFormatter: function () {
                return supportsLatLon ? 'Lat: ' + this.lat.toFixed(3) + ', Lon: ' + this.lon.toFixed(3) : 'x: ' + this.x + ', y: ' + this.y;
            }
        },

        plotOptions: {
            series: {
                point: {
                    events: {
                        // Update lat/lon properties after dragging point
                        drop: function () {
                            var newLatLon;
                            if (supportsLatLon) {
                                newLatLon = this.series.chart.fromPointToLatLon(this);
                                this.lat = newLatLon.lat;
                                this.lon = newLatLon.lon;
                            }
                        }
                    }
                }
            }
        },
colorAxis: {
            min: 0
        },
         mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        series: [/*{
            mapData: Highcharts.maps[mapKey],
            data:data,
            allAreas:false,
             joinBy: ['hc-key', 'code']
        },*/
        {
        allAreas : false,
            data: data,
            mapData: Highcharts.maps[mapKey],
            joinBy: 'hc-key',
            name: 'Projects',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
              useHTML:true,
              enabled: true,
              formatter: function(){ 
              return '<svg class="svg-icon" viewBox="0 0 22 22"><circle fill="none" cx="7.884" cy="11.397" r="0.699"></circle><circle fill="none" cx="12.076" cy="11.397" r="0.699"></circle><path fill="none" d="M17.685,5.808c-0.257,0-0.502,0.053-0.73,0.139C16.64,2.737,13.649,0.219,10,0.219c-3.649,0-6.64,2.518-6.955,5.728c-0.228-0.086-0.473-0.139-0.73-0.139c-1.153,0-2.096,0.943-2.096,2.096v3.493c0,1.153,0.943,2.096,2.096,2.096c0.28,0,0.547-0.058,0.792-0.158c0.113,1.088,0.304,1.795,0.585,2.254c0.539,0.834,4.139,4.192,6.288,4.192c2.149,0,5.751-3.361,6.272-4.167c0.292-0.476,0.488-1.196,0.602-2.296c0.255,0.112,0.536,0.175,0.831,0.175c1.153,0,2.096-0.943,2.096-2.096V7.904C19.781,6.751,18.838,5.808,17.685,5.808zM15.078,14.855c-0.482,0.746-3.715,3.529-5.099,3.529s-4.616-2.783-5.097-3.525c-0.319-0.521-0.444-1.919-0.489-3.297c0.004-0.055,0.017-0.108,0.017-0.164V8.603c0-0.04,0.005-0.078,0.006-0.118C4.779,8.56,5.156,8.603,5.545,8.603c1.994,0,3.706-1.037,4.455-2.519c0.749,1.482,2.461,2.519,4.455,2.519c0.389,0,0.766-0.043,1.128-0.118c0.001,0.039,0.006,0.078,0.006,0.118c0,0.077-0.008,0.152-0.012,0.229C15.598,10.276,15.641,13.938,15.078,14.855z"></path></svg>';
            }
            }
        }



        , {
            type: 'mappoint',
            id: 'points',
            name: 'Points',
            draggableX: true,
            draggableY: true,
            cursor: 'move',
            point: {
                events: {
                    click: function () {
                        if ($('input#delete').attr('checked')) {
                            this.remove();
                        }
                    }
                }
            }
        }, /*{
            type: 'mappoint',
            id: 'connected-points',
            name: 'Connected points',
            draggableX: true,
            draggableY: true,
            cursor: 'move',
            color: Highcharts.getOptions().colors[0],
            lineWidth: 2,
            point: {
                events: {
                    click: function () {
                        if ($('input#delete').attr('checked')) {
                            this.remove();
                        }
                    }
                }
            }
        }*/
        ]
    });

console.info('-------myChart')

//this.series.chart.fromPointToLatLon
console.info(myChart.series[1].chart.fromPointToLatLon)
console.info(myChart.series[1].chart.fromPointToLatLon({x: 19.30,y: -99.18}));


myChart.series[1].addPoint( {lat: 32.4966818, lon: -117.087888} )

myChart.series[1].addPoint( {lat: 20.7476358, lon: -89.1161944, name:'p1',color:'#FF00FF', id:'miPunto'} )



console.info(myChart.series[1].chart.get('miPunto'))




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






console.info('myChart----------------')

}



//----------------------------------------

    var $select,
        $option,
        group,
        name;

    showMap('custom/world-highres2');

   





}])