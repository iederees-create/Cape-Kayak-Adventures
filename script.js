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
