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

  var form = d3.select("#form");

  button.on("click", runEnter);
  form.on("submit", runEnter);

  function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputForm = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputForm.property("value");

    if (inputValue === "") {
        var filteredData = tableData;
    }
    else {
        var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    }

    tbody.html("");

    if (filteredData.length === 0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        var td = d3.select("td");

        td.attr("colspan", "7");
        td.attr("class", "none-found");
        cell.text(`No sightings reported`);
    }
    else {
        filteredData.forEach((dateSeen) => {
            var row = tbody.append("tr");
            Object.values(dateSeen).forEach(value => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
        
    inputForm.property("value", "");

    }

  }
  
