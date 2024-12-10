document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to server

    // Capture the form values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Dummy hardcoded user credentials (can be replaced with actual backend validation)
    const validUsers = [
        { username: "adminUser", password: "Admin123$", role: "admin" },
        { username: "customerUser", password: "Customer123$", role: "customer" },
        { username: "shwet_1606", password: "Nish@2116", role: "customer" }
    ];

    // Check if credentials are valid
    const user = validUsers.find(u => u.username === username && u.password === password);

    if (user) {
        // Store user details in localStorage
        localStorage.setItem("username", username); // Store the username
        localStorage.setItem("userRole", user.role);  // Store user role (admin/customer)

        // Redirect based on user role
        if (user.role === "admin") {
            window.location.href = "dashboard.html"; // Redirect to admin dashboard
        } else if (user.role === "customer") {
            window.location.href = "../html/customer_home.html"; // Redirect to customer home page
        }
    } else {
        alert("Invalid username or password.");
    }
});
