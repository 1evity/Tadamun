// This event listener waits for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Define the company name, current date, and current time
    const companyName = "Tadamun";
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    // Set the company name, current date, and current time in their HTML elements
    document.getElementById('company-name').textContent = companyName;
    document.getElementById('current-date').textContent = currentDate;
    document.getElementById('current-time').textContent = currentTime;

    // Select the banner text and its container to calculate their widths
    const bannerText = document.querySelector('.banner-text');
    const bannerContainer = document.querySelector('.banner-container');
     // Get the widths of the banner container and banner text
    const bannerWidth = bannerContainer.clientWidth;
    const textWidth = bannerText.clientWidth;

    // Define a function to animate the banner text
    function animateBanner() {
        let currentPosition = -textWidth;// Initialize the current position to start the text off-screen to the left
        // Calculate the total animation duration based on the widths of the banner and text then calculate the speeed
        const animationDuration = (bannerWidth + textWidth) * 3;  
        const speed = (bannerWidth + textWidth) / animationDuration;
        
        // Define a function to move the banner text
        function move() {
            //if text has moved across banner 
            if (currentPosition < bannerWidth) {
                currentPosition += speed; //update the current position based on speed
                bannerText.style.left = currentPosition + 'px'; //move the banner to the new position
            } else {
                currentPosition = -textWidth; // Reset the current position to start the animation again
                bannerText.style.left = currentPosition + 'px';// Move the banner text back off-screen to the left
            }
            // Request the next animation frame to continue the animation
            requestAnimationFrame(move);
        }
        //start animation
        move();
    }
    // Call the animateBanner function to start the animation
    animateBanner();
});
