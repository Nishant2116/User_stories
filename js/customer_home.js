// Mock function to simulate login (in real scenarios, login details would be stored in session or cookies)
document.addEventListener("DOMContentLoaded", function() {
    // Simulating retrieving username from local storage or session after login
    const username = localStorage.getItem("username");
    
    if (username) {
        document.getElementById("usernameDisplay").innerText = username;
    } else {
        // Redirect to login page if no username is found (user not logged in)
        window.location.href = "../html/login.html";
    }
});

// Function to redirect to the Home page (reload current page)
function redirectToHome() {
    window.location.href = "../html/customer_home.html"; // Redirect to same page
}

// Function to redirect to Booking Service page
function redirectToBooking() {
    window.location.href = "../html/booking.html"; // Example redirect to booking page
}

// Function to redirect to Tracking page
function redirectToTracking() {
    window.location.href = "tracking.html"; // Example redirect to tracking page
}

// Function to redirect to Previous Booking page
function redirectToPreviousBooking() {
    window.location.href = "previous-booking.html"; // Example redirect to previous booking page
}

// Function to redirect to Support page
function redirectToSupport() {
    window.location.href = "support.html"; // Example redirect to support page
}

// Function to logout and clear user details
function logout() {
    localStorage.removeItem("username"); // Remove user details from local storage
    window.location.href = "../html/login.html"; // Redirect to login page
}
