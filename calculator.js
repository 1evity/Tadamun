// Function to calculate the Return on Investment (ROI)
function calculateROI() {
  // Get the values of money raised and expenses from their respective input fields
    var revenue = document.getElementById("money raised").value;
    var expenses = document.getElementById("expenses").value;

    // Check if both money raised and expenses are provided
    if (revenue !== "" && expenses !== "") {
      // Calculate ROI and round it to 2 decimal places then display it
      var roi = (revenue / expenses).toFixed(2);
      document.getElementById("result").innerHTML = "Fundraising ROI: " + roi;
    } else {
      // Display an error message if either money raised or expenses is missing
      document.getElementById("result").innerHTML = "Please enter both money raised and expenses.";
    }
  }

  // Function to calculate the Cost Per Dollar Raised (CPDR)
  function calculateCPDR() {
     // Get the values of money raised and expenses
    var revenue = document.getElementById("money raised").value;
    var expenses = document.getElementById("expenses").value;
    
    //check if they are provided
    if (revenue !== "" && expenses !== "") {
      // Calculate CPDR and round it to 2 decimal places and display it
      var cpdr = (expenses / revenue).toFixed(2);
      document.getElementById("result").innerHTML = "Cost per Dollar Raised: " + cpdr;
    } else {
      // Display an error message if either money raised or expenses is missing
      document.getElementById("result").innerHTML = "Please enter both money raised and expenses.";
    }
  }