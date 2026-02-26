const existingUsers = ["john", "admin", "rahul", "divya"];
const usernameInput = document.getElementById("username");
const feedback = document.getElementById("feedback");
const loader = document.getElementById("loader");
const form = document.getElementById("registerForm");

let isAvailable = false;

usernameInput.addEventListener("input", () => {
    const value = usernameInput.value.trim();
    if (!value) return;

    loader.textContent = "Checking...";
    feedback.textContent = "";

    setTimeout(() => {
        if (existingUsers.includes(value.toLowerCase())) {
            feedback.textContent = "Username already taken";
            feedback.style.color = "red";
            isAvailable = false;
        } else {
            feedback.textContent = "Username available";
            feedback.style.color = "green";
            isAvailable = true;
        }
        loader.textContent = "";
    }, 1000);
});

form.addEventListener("submit", (e) => {
    if (!isAvailable) {
        e.preventDefault();
        feedback.textContent = "Please choose a valid username";
        feedback.style.color = "red";
    }
});