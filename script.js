// Function to calculate the ROI based on user input
function calculateROI() {
    const investment = document.getElementById('investment').value;  // Get the investment amount from the input field
    const roiPercentage = document.getElementById('roi-percentage').value;  // Get the ROI percentage from the input field

    // Check if both inputs have values
    if (investment && roiPercentage) {
        // Calculate the ROI
        const roi = (investment * roiPercentage) / 100;
        // Display the result in the output section
        document.getElementById('roi-output').textContent = `R${roi.toFixed(2)} (based on ${roiPercentage}% return on your investment of R${investment})`;
    } else {
        // Display error message if inputs are invalid
        document.getElementById('roi-output').textContent = 'Please enter valid inputs for investment and ROI percentage.';
    }
}

// Function to display a pop-up when user shows interest in investing
function showInterest() {
    alert("Thank you for your interest in investing! We'll be in touch soon.");
}

// Function to validate the contact form (if you have a contact page with a form)
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert("Please fill out all the fields in the form.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thank you for contacting us! We'll get back to you soon.");
    return true;
}

// Helper function to validate email format
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Add any additional scripts or interactivity here, such as animations, toggles, or dynamic elements
