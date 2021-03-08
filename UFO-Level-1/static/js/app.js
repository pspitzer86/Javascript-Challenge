// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Running through each object in the data.js and appending all values to tr and td tags to make a table for the html.

data.forEach((ufoSeen) => {
    var row = tbody.append("tr");
    Object.values(ufoSeen).forEach(value => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Creating a variable for the button and input form that have events set to them to run a function.
  
  var button = d3.select("#filter-btn");

  var form = d3.select("#form");

  button.on("click", runEnter);
  form.on("submit", runEnter);

  // Function called on event to compare the value inputed to values in the data table in order to filter them by date.

  function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputForm = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputForm.property("value");

    // If there is no input, defaults to the entire data table, else filter the data by the inputed datetime.

    if (inputValue === "") {
        var filteredData = tableData;
    }
    else {
        var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    }

    // First clear the table body of the html to create new table on filtered data.  If the input does not match anything in the table and therefore
    // has a length of 0 after filtering, make a message taking up all columns claiming there are no sightings for that date.  Else, create new
    // tr and td tags to create a table out of the values from the filtered data.

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

    // After the event occurs, clear the input.
        
    inputForm.property("value", "");

    }

  }
  
