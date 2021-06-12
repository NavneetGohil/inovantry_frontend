$(document).ready(function (){
    countDashboard()
    creditChart();

});
function countDashboard(){
    (new HttpRequest()).countDashboard().done(function (response) {
        $("#item").html(response.data.Item);
        $("#balance").html(response.data.balance);
        $("#company").html(response.data.company);
        $("#customer").html(response.data.customer);
        $("#disable_item").html(response.data.disable_item);
        $("#enable_item").html(response.data.enable_item);

        // data:
        //Item: 2
        // balance: 50000
        // company: 1
        // customer: 0
        // disable_item: 2
        // enable_item: 0
        // transaction: 15
    }).fail(function (response) {
        console.log(response)
    });
}

function creditChart(){
    var arr_data = [];
    var arr_date = [];
    var arr_debit = [];
    $.ajax({
        url : "http://127.0.0.1:8182/api/creditReport",
        type: "get",
        success : function (data){
            $.each(data, function(key, value){
                arr_data.push(value.y);
                arr_date.push(value.x);
                // arr_debit.push(value.z);
            });
            getChart(arr_data,arr_date);
        }
    });
}


// function demo(arr_data,arr_date,arr_debit) {
//     var options = {
//         chart: {
//             type: "area",
//             height: 300,
//             foreColor: "#999",
//             stacked: true,
//             dropShadow: {
//                 enabled: true,
//                 enabledSeries: [0],
//                 top: -2,
//                 left: 2,
//                 blur: 5,
//                 opacity: 0.06
//             }
//         },
//         colors: ['#00E396', '#0090FF'],
//         stroke: {
//             curve: "smooth",
//             width: 3
//         },
//         dataLabels: {
//             enabled: false
//         },
//         series: [{
//             name: 'PROFIT',
//             data: generateDayWiseTimeSeries(0, 18,arr_data,arr_date,arr_debit)
//         }, {
//             name: 'Unique Views',
//             data: generateDayWiseTimeSeries(1, 18)
//         }],
//         markers: {
//             size: 0,
//             strokeColor: "#fff",
//             strokeWidth: 3,
//             strokeOpacity: 1,
//             fillOpacity: 1,
//             hover: {
//                 size: 6
//             }
//         },
//         xaxis: {
//             type: "datetime",
//             axisBorder: {
//                 show: false
//             },
//             axisTicks: {
//                 show: false
//             }
//         },
//         yaxis: {
//             labels: {
//                 offsetX: 14,
//                 offsetY: -5
//             },
//             tooltip: {
//                 enabled: true
//             }
//         },
//         grid: {
//             padding: {
//                 left: -5,
//                 right: 5
//             }
//         },
//         tooltip: {
//             x: {
//                 format: "dd MMM yyyy"
//             },
//         },
//         legend: {
//             position: 'top',
//             horizontalAlign: 'left'
//         },
//         fill: {
//             type: "solid",
//             fillOpacity: 0.7
//         }
//     };
//
//     var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);
//
//     chart.render();
//
//     function generateDayWiseTimeSeries(s, count,arr_data,arr_date,arr_debit) {
//
//         var values = [ arr_data, arr_debit
//             ];
//         console.log(values)
//         var i = 0;
//         var series = [];
//         var x = new Date("11 Nov 2012").getTime();
//         while (i < count) {
//             series.push([x, values[s][i]]);
//             x += 86400000;
//             i++;
//         }
//         return series;
//     }
// }

function getChart(arr_data,arr_date,visitorid="#visitors-chart"){
    $(function () {
        'use strict'

        var ticksStyle = {
            fontColor: '#495057',
            fontStyle: 'bold'
        }
        var mode      = 'index'
        var intersect = true

        var $visitorsChart = $(visitorid)
        var visitorsChart  = new Chart($visitorsChart, {
            data   : {
                labels  : arr_date,
                datasets: [{
                    type                : 'line',
                    data                : arr_data,
                    backgroundColor     : 'transparent',
                    borderColor         : '#007bff',
                    pointBorderColor    : '#007bff',
                    pointBackgroundColor: '#007bff',
                    fill                : false
                    // pointHoverBackgroundColor: '#007bff',
                    // pointHoverBorderColor    : '#007bff'
                }]
            },
            options: {
                maintainAspectRatio: false,
                tooltips           : {
                    mode     : mode,
                    intersect: intersect
                },
                hover              : {
                    mode     : mode,
                    intersect: intersect
                },
                legend             : {
                    display: false
                },
                scales             : {
                    yAxes: [{
                        // display: false,
                        gridLines: {
                            display      : true,
                            lineWidth    : '4px',
                            color        : 'rgba(0, 0, 0, .2)',
                            zeroLineColor: 'transparent'
                        },
                        ticks    : $.extend({
                            beginAtZero : true,
                            suggestedMax: 1
                        }, ticksStyle)
                    }],
                    xAxes: [{
                        display  : true,
                        gridLines: {
                            display: false
                        },
                        ticks    : ticksStyle
                    }]
                }
            }
        })
    })
}
