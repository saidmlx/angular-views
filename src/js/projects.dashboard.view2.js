var $ = jQuery = require("jquery");

//console.info($);

angular.module('appProjectsController',[	])
.controller('projectDashboardView2',['$scope',function($scope){
	
	console.info('projectDashboardView2----------------');

 

 


    // Prepare demo data
    var data = [
       {'hc-key': 'mx',value: 50},
       {'hc-key': 'gt',value: 20}
      ,{'hc-key': 'bz',value: 20}
      ,{'hc-key': 'sv',value: 50}
      ,{'hc-key': 'hn',value: 20}
      ,{'hc-key': 'ni',value: 80}
      ,{'hc-key': 'cr',value: 90}
      ,{'hc-key': 'pa',value: 10}
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title: {
            text: 'Highmaps basic demo'
        },

        subtitle: {
            text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/world-robinson-highres.js">World, Robinson projection, high resolution</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        tooltip: {
                headerFormat: '<span style="font-size:10px">{series.name}</span><br/>',
                pointFormat: '{point.name}: <b>{point.value:.1f} Projectos activos</b><br/>',
                footerFormat: '<span style="font-size:10px">Source: Wikipedia</span><br/>'
        },
        colorAxis: {
            min: 0
        },

        series: [{
        allAreas : false,
            data: data,
            mapData: Highcharts.maps['custom/world-robinson-highres'],
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

console.info('this')
              console.info(this)
                //console.info(this.point.plotY)

                //return '<svg class="svg-icon" viewBox="0 0 20 20"><path fill="none" d="M19.629,9.655c-0.021-0.589-0.088-1.165-0.21-1.723h-3.907V7.244h1.378V6.555h-2.756V5.866h2.067V5.177h-0.689V4.488h-1.378V3.799h0.689V3.11h-1.378V2.421h0.689V1.731V1.294C12.88,0.697,11.482,0.353,10,0.353c-5.212,0-9.446,4.135-9.629,9.302H19.629z M6.555,2.421c1.522,0,2.756,1.234,2.756,2.756S8.077,7.933,6.555,7.933S3.799,6.699,3.799,5.177S5.033,2.421,6.555,2.421z"></path><path fill="none" d="M12.067,18.958h-0.689v-0.689h2.067v-0.689h0.689V16.89h2.067v-0.689h0.689v-0.689h-1.378v-0.689h-2.067v-0.689h1.378v-0.689h2.756v-0.689h-1.378v-0.689h3.218c0.122-0.557,0.189-1.134,0.21-1.723H0.371c0.183,5.167,4.418,9.302,9.629,9.302c0.711,0,1.401-0.082,2.067-0.227V18.958z"></path></svg>';
                return '<svg class="svg-icon" viewBox="0 0 22 22"><circle fill="none" cx="7.884" cy="11.397" r="0.699"></circle><circle fill="none" cx="12.076" cy="11.397" r="0.699"></circle><path fill="none" d="M17.685,5.808c-0.257,0-0.502,0.053-0.73,0.139C16.64,2.737,13.649,0.219,10,0.219c-3.649,0-6.64,2.518-6.955,5.728c-0.228-0.086-0.473-0.139-0.73-0.139c-1.153,0-2.096,0.943-2.096,2.096v3.493c0,1.153,0.943,2.096,2.096,2.096c0.28,0,0.547-0.058,0.792-0.158c0.113,1.088,0.304,1.795,0.585,2.254c0.539,0.834,4.139,4.192,6.288,4.192c2.149,0,5.751-3.361,6.272-4.167c0.292-0.476,0.488-1.196,0.602-2.296c0.255,0.112,0.536,0.175,0.831,0.175c1.153,0,2.096-0.943,2.096-2.096V7.904C19.781,6.751,18.838,5.808,17.685,5.808zM15.078,14.855c-0.482,0.746-3.715,3.529-5.099,3.529s-4.616-2.783-5.097-3.525c-0.319-0.521-0.444-1.919-0.489-3.297c0.004-0.055,0.017-0.108,0.017-0.164V8.603c0-0.04,0.005-0.078,0.006-0.118C4.779,8.56,5.156,8.603,5.545,8.603c1.994,0,3.706-1.037,4.455-2.519c0.749,1.482,2.461,2.519,4.455,2.519c0.389,0,0.766-0.043,1.128-0.118c0.001,0.039,0.006,0.078,0.006,0.118c0,0.077-0.008,0.152-0.012,0.229C15.598,10.276,15.641,13.938,15.078,14.855z"></path></svg>';
                //return '<span> <img src="http://highcharts.com/demo/gfx/sun.png"><img> </span>';
                //return '<svg ><circle cx="'+this.point.plotX+'" cy="'+this.point.plotY+'" r="5" fill="red"  /></svg>';
                
                //return '<svg ><circle  r="10" fill="red"  /></svg>';
              }
            }
        


        }]
      });
        

}])