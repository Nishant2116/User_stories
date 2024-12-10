function showLogin() {
    document.getElementById("mainOptions").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function showRegisterOptions() {
    document.getElementById("mainOptions").classList.add("hidden");
    document.getElementById("registerOptions").classList.remove("hidden");
}

function showRegister(role) {
    document.getElementById("registerOptions").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");

    const title = role === "admin" ? "Register as Admin" : "Register as Customer";
    document.getElementById("registerTitle").innerText = title;
}

function goBack() {
    document.querySelectorAll(".hidden").forEach((el) => el.classList.add("hidden"));
    document.getElementById("mainOptions").classList.remove("hidden");
}

document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login Successful!");
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Registration Successful!");
    goBack();
});
