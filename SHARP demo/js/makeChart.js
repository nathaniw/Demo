  var chart;

  function makeChart(column){
    // document.write("<h1>SHARP CPO Data Analytics </br> Column:" + column + "</h1>");
    
    chart = AmCharts.makeChart("chartdiv", {
      "type": "pie",
      "startDuration": 0,
       "theme": "light",
      "addClassNames": true,
      "legend":{
       	"position":"right",
        "marginRight":100,
        "autoMargins":false
      },
      "innerRadius": "30%",
      "defs": {
        "filter": [{
          "id": "shadow",
          "width": "200%",
          "height": "200%",
          "feOffset": {
            "result": "offOut",
            "in": "SourceAlpha",
            "dx": 0,
            "dy": 0
          },
          "feGaussianBlur": {
            "result": "blurOut",
            "in": "offOut",
            "stdDeviation": 5
          },
          "feBlend": {
            "in": "SourceGraphic",
            "in2": "blurOut",
            "mode": "normal"
          }
        }]
      },
      "dataProvider": parseJSON(column,false),
      "valueField": "litres",
      "titleField": "country",
      "export": {
        "enabled": true
      }
    });
  }

  chart.addListener("init", handleInit);
  chart.addListener("rollOverSlice", function(e) {
    handleRollOver(e);
  });

  function handleInit(){
    chart.legend.addListener("rollOverItem", handleRollOver);
  }

  function handleRollOver(e){
    var wedge = e.dataItem.wedge.node;
    wedge.parentNode.appendChild(wedge);
  }
