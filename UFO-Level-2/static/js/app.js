// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!

data.forEach((ufoSeen) => {
    var row = tbody.append("tr");
    Object.values(ufoSeen).forEach(value => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
  var button = d3.select("#filter-btn");

  button.on("click", runEnter);

  function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    var filterData = tableData;

    var colList = ["datetime", "city", "state", "country", "shape"];

    for (var i = 0; i < colList.length; i++) {
      var inputCol = d3.select("#" + colList[i]);

      var inputValue = inputCol.property("value");

      if (inputValue != "") {
        filterData = filterData.filter(ufo => ufo[colList[i]] === inputValue);
        inputCol.property("value", "");
      }
    }

    tbody.html("");

    if (filterData.length === 0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        var td = d3.select("td");

        td.attr("colspan", "7");
        cell.text(`No sightings reported`);
    }
    else {
        filterData.forEach((dateSeen) => {
            var row = tbody.append("tr");
            Object.values(dateSeen).forEach(value => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
    }

  }
  
