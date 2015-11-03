
var chart = AmCharts.makeChart("chartdiv", {
    "type": "xy",
    "theme": "light",
    "marginRight": 80,
    "dataDateFormat": "MMM/dd/yyyy",
    "startDuration": 1.5,
    "trendLines": [],
    "balloon": {
        "adjustBorderColor": false,
        "shadowAlpha": 0,
        "fixedPosition":true
    },
    "graphs": [{
        "balloonText": "<div style='margin:5px;'><b>[[x]]</b><br>y:<b>[[y]]</b><br>value:<b>[[value]]</b></div>",
        "bullet": "diamond",
        "id": "AmGraph-1",
        "lineAlpha": 0,
        "lineColor": "#b0de09",
        "valueField": "day",
        "xField": "date",
        "yField": "day"
    }],
    "valueAxes": [{
        "id": "ValueAxis-1",
        "axisAlpha": 0
    }, {
        "id": "ValueAxis-2",
        "axisAlpha": 0,
        "position": "bottom",
        "type": "date",
        "minimumDate": new Date(2014, 12, 31),
        "maximumDate": new Date(2015, 11, 31)
    }],
    "allLabels": [],
    "titles": [],
    "dataProvider": [
    {
        "date": "2015-01-01",
        "day": 1
    },
    {
        "date": "2015-02-02",
        "day": 2
    },
    {
        "date": "2015-03-03",
        "day": 3
    },
    {
        "date": "2015-04-04",
        "day": 4
    },
    {
        "date": "2015-05-05",
        "day": 5
    },
    {
        "date": "2015-06-06",
        "day": 6
    }
    ],

    "export": {
        "enabled": true
    },

    "chartScrollbar": {
        "offset": 15,
        "scrollbarHeight": 5
    }
});
