/* global Highcharts */
var nqsMap = [
    {
	nivel: 1.0,
        dpom: 691462,
        pdc: '69,1%'
    },{
	nivel: 2.0,
        dpom: 308770,
        pdc: '30,9%'
    },{
	nivel: 3.0,
        dpom: 66811,
        pdc: '6,68%'
    },{
	nivel: 1.1,
        dpom: 660083,
        pdc: '66,0%'
    },{
	nivel: 2.1,
        dpom: 274412,
        pdc: '27,4%'
    },{
	nivel: 3.1,
        dpom: 54801,
        pdc: '5,48%'
    },{
	nivel: 1.2,
        dpom: 621378,
        pdc: '62,1%'
    },{
	nivel: 2.2,
        dpom: 242071,
        pdc: '24,2%'
    },{
	nivel: 3.2,
        dpom: 44567,
        pdc: '4,46%'
    },{
	nivel: 1.3,
        dpom: 581815,
        pdc: '58,2%'
    },{
	nivel: 2.3,
        dpom: 211928,
        pdc: '21,2%'
    },{
	nivel: 3.3,
        dpom: 35931,
        pdc: '3,59%'
    },{
	nivel: 1.4,
        dpom: 541694,
        pdc: '54,2%'
    },{
	nivel: 2.4,
        dpom: 184108,
        pdc: '18,4%'
    },{
	nivel: 3.4,
        dpom: 28717,
        pdc: '2,87%'
    },{
	nivel: 1.5,
        dpom: 501350,
        pdc: '50,1%'
    },{
	nivel: 2.5,
        dpom: 158687,
        pdc: '15,9%'
    },{
	nivel: 3.5,
        dpom: 22750,
        pdc: '2,28%'
    },{
	nivel: 1.6,
        dpom: 461140,
        pdc: '46,1%'
    },{
	nivel: 2.6,
        dpom: 135687,
        pdc: '13,6%'
    },{
	nivel: 3.6,
        dpom: 17865,
        pdc: '1,79%'
    },{
	nivel: 1.7,
        dpom: 421428,
        pdc: '42,1%'
    },{
	nivel: 2.7,
        dpom: 115083,
        pdc: '11,5%'
    },{
	nivel: 3.7,
        dpom: 13904,
        pdc: '1,39%'
    },{
	nivel: 1.8,
        dpom: 382572,
        pdc: '38,3%'
    },{
	nivel: 2.8,
        dpom: 96809,
        pdc: '9,7%'
    },{
	nivel: 3.8,
        dpom: 10724,
        pdc: '1,07%'
    },{
	nivel: 1.9,
        dpom: 344915,
        pdc: '34,5%'
    },{
	nivel: 2.9,
        dpom: 80762,
        pdc: '8,08%'
    },{
	nivel: 3.9,
        dpom: 8198,
        pdc: '0,82%'
    },{
	nivel: 4.0,
        dpom: 6210,
        pdc: '0,62%'
    },{
        nivel: 5.0,
        dpom: 233,
        pdc: '0,023%'
    },{
        nivel: 6.0,
        dpom:3,
        pdc: '0,000%'
    },{
        nivel: 4.1,
        dpom: 4661,
        pdc: '0,466%'
    },{
        nivel: 5.1,
        dpom:159,
        pdc: '0,016%'
    },{
        nivel: 4.2,
        dpom: 3467,
        pdc: '0,347%'
    },{
        nivel: 5.2,
        dpom:108,
        pdc: '0,011%'
    },{
        nivel: 4.3,
        dpom: 2555,
        pdc: '0,256%'
    },{
        nivel: 5.3,
        dpom:72,
        pdc: '0,007%'
    },{
        nivel: 4.4,
        dpom: 1866,
        pdc: '0,187%'
    },{
        nivel: 5.4,
        dpom:48,
        pdc: '0,005%'
    },{
        nivel: 4.5,
        dpom: 1350,
        pdc: '0,135%'
    },{
        nivel: 5.5,
        dpom:32,
        pdc: '0,003%'
    },{
        nivel: 4.6,
        dpom:968,
        pdc: '0,097%'
    },{
        nivel: 5.6,
        dpom:21,
        pdc: '0,002%'
    },{
        nivel: 4.7,
        dpom:687,
        pdc: '0,069%'
    },{
        nivel: 5.7,
        dpom:13,
        pdc: '0,001%'
    },{
        nivel: 4.8,
        dpom:483,
        pdc: '0,048%'
    },{
        nivel: 5.8,
        dpom:9,
        pdc: '0,001%'
    },{
        nivel: 4.9,
        dpom:337,
        pdc: '0,034%'
    },{
        nivel: 5.9,
        dpom:5,
        pdc: '0,001%'
    }
];
var mapLevel = function(dpom) {
    var currentLvl;
    for (var i = 0; i < nqsMap.length; i++) {
        var thisLvl = nqsMap[i];
        if(thisLvl.dpom >= dpom &&(!currentLvl || thisLvl.dpom < currentLvl.dpom)) {
            currentLvl = thisLvl;
        }
    }
        console.log(dpom);
        console.log(currentLvl);
        console.log(thisLvl);
    return currentLvl;    
};
var mountChart = function (chart_data) {
    Highcharts.chart('chartbox', {
        chart: {
            type: 'line'
        },
        title: {
            text: chart_data.title
        },
        subtitle: {
            text: chart_data.subtitle
        },
        xAxis: {
            categories: chart_data.xAxis
        },
        yAxis: chart_data.yAxis,
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: chart_data.series
    });
    
};

var xAxis = [];
var charts = {
    dpu: {
        title: 'Defeitos por unidade',
        xAxis: xAxis,
        yAxis: {
            title: {
                text: 'Defeitos por Unidade'
            }
        },
        series: [{
            name: 'DPU',
            data: []
        }]
    },
    dpom: {
        title: 'Defeitos por milhão de oportunidades',
        xAxis: xAxis,
        yAxis: {
            title: {
                text: ''
            }
        },
        series: [{
            name: 'DPOM',
            data: []
        }]
    },
    nqs: {
        title: 'Nível de qualidade Sigma',
        xAxis: xAxis,
        yAxis: [{
            title: {
                text: 'Nível Sigma'
            },
            max: 6
        },{
            title: {
                text: '% de conformidade'
            },
            labels: {
                format: '{value}%'
            },
            max: 100,
            opposite: true
        }],
        series:  [{
            name: 'NQS',
            type: 'column',
            data: [],
            tooltip: {
                valueSuffix: ' Sigma'
            }

        },{
            name: 'PDC',
            type: 'spline',
            yAxis: 1,
            data: [],
            tooltip: {
                valueSuffix: '%'
            }
        }]
    }
};
$('#mountCharts').click(function(){
    var report = $('#reports').val();
    $.get(report, function(data, status){
        xAxis.length = 0;
        charts.dpu.series[0].data = [];
        charts.dpom.series[0].data = [];
        charts.nqs.series[0].data = [];
        charts.nqs.series[1].data = [];
        for (var i = 0; i < data.length; i++) {
            var thisData = data[i];
            var dpu = thisData.defeitos / thisData.unidades;
            var dpo = thisData.defeitos / (thisData.oportunidades * thisData.unidades);
            var dpom = (dpo * 1000000);
            var pdc = ((1 - dpo) * 100);
            var sigmaLvl = mapLevel(dpom);
            xAxis.push(thisData.xAxis);
            charts.dpu.series[0].data.push(dpu);
            charts.dpom.series[0].data.push(dpom);
            charts.nqs.series[0].data.push(sigmaLvl.nivel);
            charts.nqs.series[1].data.push(pdc);
        }
        console.log(charts);
        mountChart(charts.dpu);
    });
});
$('.changechart').click(function(){
       var chart = $(this).val();
       mountChart(charts[chart]);
});