document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to server

    // Capture form field values
    const customerName = document.getElementById("customerName").value.trim();
    const email = document.getElementById("email").value.trim();
    const countryCode = document.getElementById("countryCode").value.trim();
    const mobileNumber = document.getElementById("mobileNumber").value.trim();
    const address = document.getElementById("address").value.trim();
    const userID = document.getElementById("userID").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const isAdmin = document.getElementById("isAdmin").checked;

    // Form validation logic
    if (customerName === "" || customerName.length > 50) {
        alert("Customer name must be filled and not exceed 50 characters.");
        return;
    }

    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (address === "") {
        alert("Address is required.");
        return;
    }

    if (userID === "" || userID.length < 5 || userID.length > 20) {
        alert("User ID must be between 5 and 20 characters.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Generate random username (can also be customized as per your need)
    const randomUsername = `${userID}_${Math.floor(Math.random() * 1000)}`;

    // Display acknowledgment with collected details
    document.getElementById("ackUserID").innerText = randomUsername;
    document.getElementById("ackName").innerText = customerName;
    document.getElementById("ackEmail").innerText = email;

    // Update form display (hide registration form and show acknowledgment screen)
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("acknowledgment").style.display = "block";

    // Log role (Admin/User) - you can further use this information for conditional display
    console.log(`Registered as: ${isAdmin ? "Admin" : "Customer"}`);
});
