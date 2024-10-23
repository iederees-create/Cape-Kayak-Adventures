// Function for "Invest" button
function showInterest() {
    alert("Thank you for your interest! We'll get in touch with you shortly.");
}

// Function for "Rent" button
function rentKayak() {
    alert("Thank you for choosing us! Please follow the steps to complete your kayak rental.");
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will respond shortly.');
});


function calculateROI() {
    const investment = document.getElementById('investment').value;
    const roiPercentage = document.getElementById('roi-percentage').value;

    if (investment && roiPercentage) {
        const roi = (investment * roiPercentage) / 100;
        document.getElementById('roi-output').textContent = `R${roi.toFixed(2)} (based on ${roiPercentage}% return on your investment of R${investment})`;
    } else {
        document.getElementById('roi-output').textContent = 'Please enter valid inputs for investment and ROI percentage.';
    }
}
