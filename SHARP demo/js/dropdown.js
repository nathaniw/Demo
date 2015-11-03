//default data column
var dataCategoriesTitles = ["Document Life Cycle", "Document Type", "Log Event ID"];
var dataCategoriesColumns = ["_c4", "_c6", "_c9"];

var currentColumn = dataCategoriesColumns[0];
var currentTitle = dataCategoriesTitles[0];

$( document ).ready(function() {

  var sel = document.getElementById('dataCategoriesDropdown');
  for(var i = 0; i < dataCategoriesTitles.length; i++) {
      var opt = document.createElement('option');
      opt.innerHTML = dataCategoriesTitles[i];
      opt.value = dataCategoriesColumns[i];
      sel.appendChild(opt);
  }
  makeChart(currentColumn);
  setHeaderTitle(currentTitle);
});

function setHeaderTitle(currentTitle){
  var e = document.getElementById("headerTitle");
  e.innerHTML = "SHARP CPO Data Analytics </br> Column: " + currentTitle;
}


function getSelectedData(){
  var e = document.getElementById("dataCategoriesDropdown");
  currentColumn = e.options[e.selectedIndex].value;
  currentTitle = e.options[e.selectedIndex].text;
  console.log(currentColumn + ' ' + currentTitle);
  makeChart(currentColumn);
  setHeaderTitle(currentTitle);
}
