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

  // Creating a variable for the button that has an event set to it to run a function.
  
  var button = d3.select("#filter-btn");

  button.on("click", runEnter);

  // Function called on event to compare the value inputed to values in the data table in order to filter them by date, city, state, country and shape.

  function runEnter() {

    // Prevent the page from refreshing

    d3.event.preventDefault();

    // Setting the page to the whole data table if there is no input.
  
    var filterData = tableData;

    // Setting a list of the five columns to be potentially filtered on.

    var colList = ["datetime", "city", "state", "country", "shape"];

    // For loop that runs through the column list that calls the id for each column from the html and grabs the values to be compared with
    // whatever information is inputted in any of the five filters.  Setting the input and the table data to lowercase to compare them if the input
    // contains any capital letters.  Filters out any data that matches any of the inputs then clears the inputs.

    for (var i = 0; i < colList.length; i++) {
      var inputCol = d3.select("#" + colList[i]);

      var inputValue = inputCol.property("value");

      if (inputValue != "") {
        filterData = filterData.filter(ufo => ufo[colList[i]].toLowerCase() === inputValue.toLowerCase());
        inputCol.property("value", "");
      }
    }

    // First clear the table body of the html to create new table on filtered data.  If the input does not match anything in the table and therefore
    // has a length of 0 after filtering, make a message taking up all columns claiming there are no sightings for the inputs.  Else, create new
    // tr and td tags to create a table out of the values from the filtered data.

    tbody.html("");

    if (filterData.length === 0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        var td = d3.select("td");

        td.attr("colspan", "7");
        td.attr("class", "none-found")
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
  
