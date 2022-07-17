// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// function
function buildTable(data) {
  //clear any existing data  
  tbody.html("");
  //loop through each object in the data
  //and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    //append a row to the table body
    let row = tbody.append("tr");
    //loop through each field n the dataRow and add
    //each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);           
    }
  );    
});
};
function handleClick() {
    //grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check to see if a date entered and filter the data using date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    //rebuild table using filtered data or original if no filter
    buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);