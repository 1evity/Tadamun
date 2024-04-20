// Define constructor functions for cause objects
function CauseType1(description, category, duration, organization, charityType) {
    this.description = description;
    this.category = category;
    this.duration = duration;
    this.organization = organization;
    this.charityType = charityType;
}

function CauseType2(description, location, duration, organization, charityType) {
    this.description = description;
    this.location = location;
    this.duration = duration;
    this.organization = organization;
    this.charityType = charityType;
}

// Initialize arrays to store cause objects
var causesType1 = [
    new CauseType1("Clean water access for rural communities", "Water", "Temporary", "Charity Water", "Fundraiser"),
    new CauseType1("Education for underprivileged children", "Education", "Ongoing", "Save the Children", "Event"),
    new CauseType1("Support for victims of natural disasters", "Disaster Relief", "Temporary", "Red Cross", "Supplying Goods")
];

var causesType2 = [
    new CauseType2("Medical assistance for low-income families", "City Hospital", "Ongoing", "Doctors Without Borders", "Fundraiser"),
    new CauseType2("Animal welfare and protection", "Animal Shelter", "Ongoing", "ASPCA", "Event"),
    new CauseType2("Environmental conservation projects", "Local Parks", "Temporary", "Greenpeace", "Fundraiser")
];

// Function to display causes in the table
function displayCauses() {
    displayCausesOfType(causesType1, "causeType1");
    displayCausesOfType(causesType2, "causeType2");
}

function displayCausesOfType(causeArray, tableId) {
    var table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // Clear existing table rows
    causeArray.forEach(function(cause) {
        var row = table.insertRow();
        var descriptionCell = row.insertCell(0);
        var propertyCell1 = row.insertCell(1);
        var propertyCell2 = row.insertCell(2);
        var propertyCell3 = row.insertCell(3);
        var propertyCell4 = row.insertCell(4);
        descriptionCell.textContent = cause.description;
        propertyCell1.textContent = cause.category || cause.location;
        propertyCell2.textContent = cause.duration;
        propertyCell3.textContent = cause.organization;
        propertyCell4.textContent = cause.charityType;
    });
}

// Call displayCauses function to initially display causes
displayCauses();

// Function to search and filter the table
function searchTable() {
    var input, filter, tables, tr, td, i, txtValue;
    input = document.getElementById("searchInput"); // Get the search input element
    filter = input.value.toUpperCase(); // Convert input text to uppercase for case-insensitive search
    tables = document.querySelectorAll("table");
    
    tables.forEach(function(table) {
        tr = table.getElementsByTagName("tr"); // Get all table rows
        
        // Loop through all table rows, and hide those that don't match the search query
        for (i = 0; i < tr.length; i++) {
            var found = false;
            // Loop through all cells in current row
            for (var j = 0; j < tr[i].cells.length; j++) {
                td = tr[i].cells[j]; // Get current cell
                if (td) {
                    txtValue = td.textContent || td.innerText; // Get the text content of the cell
                    // Check if the text content matches the search filter
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        found = true;
                        break; // If found in this cell, no need to check other cells in this row
                    }
                }
            }
            // Show or hide the row based on search result
            tr[i].style.display = found ? "" : "none";
        }
    });
}