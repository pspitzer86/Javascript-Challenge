// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!

data.forEach((ufoSeen) => {
    var row = tbody.append("tr");
    Object.entries(ufoSeen).forEach(value => {
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

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    tbody.html("");

    filteredData.forEach((dateSeen) => {
        var row = tbody.append("tr");
        Object.entries(dateSeen).forEach(value => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

  }
  
