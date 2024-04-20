function validateForm() {

    // Name validation
    // Checks for at least 2 characters
    let name = document.getElementById('name').value;
      if (name.trim() === '') {
        alert('Please enter your name.');
        return false;
      }

    // Email validation  
    // Checks for @ and .
    let email = document.getElementById('email').value;
      if (email.trim() === '') {
        alert('Please enter your email.');
        return false;
      }
    

    // Rating validation
    // Checks if a rating is selected  
    let rating = document.getElementById('rating').value;
      if (rating === '') {
        alert('Please choose a rating.');
        return false;
      }

      return true;
    }