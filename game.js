var cash;
    var lemons;
    var lemonade;
    var timer;
    var timeLimit = 60000; // 2 minutes
    var gameOver = false;

    function startGame() {
      // Initialize game variables
      cash = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
      lemons = 0;
      lemonade = 0;
      timer = timeLimit;
      gameOver = false;

      // Display initial values on the page
      document.getElementById("cash").innerHTML = "Cash: $" + cash;
      document.getElementById("lemons").innerHTML = "Lemons: " + lemons;
      document.getElementById("lemonade").innerHTML = "Lemonade: " + lemonade;
      document.getElementById("timer").innerHTML = "Time left: " + (timer / 1000) + " seconds";

      // Start the game timer
      setTimeout(updateTimer, 1000);
    }

    function updateTimer() {
      if (!gameOver) {
        // Update the timer display
        timer -= 1000;
        document.getElementById("timer").innerHTML = "Time left: " + (timer / 1000) + " seconds";

        if (timer <= 0) {
          // End the game when the timer runs out
          endGame();
        } else {
          // Update the timer after 1 second
          setTimeout(updateTimer, 1000);
        }
      }
    }

    function buyLemons() {
      if (!gameOver) {
        if (cash >= 1) {
          // Buy a lemon and update the budget and lemon count
          cash -= 1;
          lemons += 1;
          document.getElementById("cash").innerHTML = "Cash: $" + cash;
          document.getElementById("lemons").innerHTML = "Lemons: " + lemons;
        } else {
          // Show an alert if there is not enough budget to buy lemons
          alert("Not enough budget to buy lemons!");
        }
      }
    }

    function makeLemonade() {
      if (!gameOver) {
        if (lemons >= 3) {
          // Make a lemonade using 3 lemons and update the lemon and lemonade count
          lemons -= 3;
          lemonade += 1;
          document.getElementById("lemons").innerHTML = "Lemons: " + lemons;
          document.getElementById("lemonade").innerHTML = "Lemonade: " + lemonade;
          setTimeout(sellLemonade, 8000); // Set a timer to sell the lemonade after 8 seconds
        } else {
          // Show an alert if there are not enough lemons to make lemonade
          alert("Not enough lemons to make lemonade!");
        }
      }
    }

    function sellLemonade() {
      if (!gameOver) {
        if (lemonade >= 1) {
          // Sell a lemonade, update the budget and lemonade count
          lemonade -= 1;
          cash += 5;
          document.getElementById("cash").innerHTML = "Cash: $" + cash;
          document.getElementById("lemonade").innerHTML = "Lemonade: " + lemonade;
        }

        if (cash >= 160) {
          // End the game if the cash reaches $160
          endGame(true);
        }
      }
    }

    function endGame(won) {
      gameOver = true;

      if (won) {
        // Display a congratulatory message if the player wins
        document.getElementById("result").innerHTML = "Congratulations! You raised $150 for charity!";
      } else {
        // Display a game over message if the player loses
        document.getElementById("result").innerHTML = "Game over! You didn't reach double your budget.";
      }
    }