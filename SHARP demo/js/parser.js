function parseJSON(column,percentBool){
  var resultJSON = [];
  var map = new Map();
  var rowLength = json.report.section.table.rows.row.length;


  //fill in map
  for(var i = 0; i < rowLength; i++){
    var key = json.report.section.table.rows.row[i][column];
    if(map.has(key)){
      map.set(key, map.get(key)+1);
    }
    else{
      map.set(key, 0);
    }
  }

  //convert values to percentages
  for (var key of map.keys()) {
      if(percentBool){
        map.set(key, (map.get(key)/rowLength).toFixed(4) * 100);
      }
      else{
        map.set(key, map.get(key));
      }
    resultJSON.push({country:key, litres:map.get(key)});
    //document.write(key + "-->" + map.get(key) + "</br>");
  }

  console.log(JSON.stringify(resultJSON));
  return resultJSON;
}
