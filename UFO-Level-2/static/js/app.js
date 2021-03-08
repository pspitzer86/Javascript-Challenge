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
  
    // Select the input element and get the raw HTML node, and get the value property of the input element
    var inputDate = d3.select("#datetime");
    var inputDvalue = inputDate.property("value");

    if (inputDvalue === "") {
      inputDvalue = "/*/"
    }

    // Select the input element and get the raw HTML node, and get the value property of the input element
    var inputCity = d3.select("#city");
    var inputCvalue = inputCity.property("value");

    if (inputCvalue === "") {
      inputCvalue = "/*/"
    }   

    // Select the input element and get the raw HTML node, and get the value property of the input element
    var inputState = d3.select("#state");
    var inputSvalue = inputState.property("value");

    if (inputSvalue === "") {
      inputSvalue = "/*/"
    }        

    // Select the input element and get the raw HTML node, and get the value property of the input element
    var inputCountry = d3.select("#country");
    var inputCOvalue = inputCountry.property("value");

    if (inputCOvalue === "") {
      inputCOvalue = "/*/"
    }
    // Select the input element and get the raw HTML node, and get the value property of the input element
    var inputShape = d3.select("#shape");
    var inputSvalue = inputShape.property("value");

    if (inputSvalue === "") {
      inputSvalue = "/*/"
    }    

    if (inputValue === "") {
        var filteredData = tableData;
    }
    else {
        var filteredData = tableData.filter(ufo => ufo.datetime === inputDvalue);
    }

    tbody.html("");

    if (filteredData.length === 0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        var td = d3.select("td");

        td.attr("colspan", "7");
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
  
