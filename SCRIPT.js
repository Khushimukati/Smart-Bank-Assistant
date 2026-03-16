let balance = 5000;
document.getElementById("balance").innerText = balance;

// Add Money
function addMoney() {
    balance += 1000;
    document.getElementById("balance").innerText = balance;
}

// Deduct Money
function deductMoney() {
    balance -= 500;
    document.getElementById("balance").innerText = balance;
}

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Theme Toggle
document.getElementById("themeToggle").onclick = function () {
    document.body.classList.toggle("dark");
};

// Contact Form
function submitForm() {
    alert("Message Sent Successfully!");
    return false;
}

// Chatbot
function toggleChat() {
    let chat = document.getElementById("chatbox");
    chat.style.display = chat.style.display === "block" ? "none" : "block";
}

function handleKey(event) {
    if (event.key === "Enter") {
        let input = document.getElementById("chatInput");
        let message = input.value;
        if (message.trim() === "") return;

        let chatBody = document.getElementById("chatBody");
        chatBody.innerHTML += "<p><b>You:</b> " + message + "</p>";

        let reply = "Sorry, I didn't understand.";
        if (message.toLowerCase().includes("balance")) {
            reply = "Your current balance is ₹" + balance;
        }
        if (message.toLowerCase().includes("loan")) {
            reply = "You are eligible for a personal loan up to ₹5,00,000.";
        }

        chatBody.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";
        chatBody.scrollTop = chatBody.scrollHeight;
        input.value = "";
    }
}