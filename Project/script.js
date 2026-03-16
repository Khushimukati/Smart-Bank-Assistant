function sendMessage() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += "<p><b>You:</b> " + input + "</p>";

    let response = "Sorry, please ask a banking related question.";

    if (input.includes("balance")) {
        response = "Your current account balance is ₹50,000.";
    }
    else if (input.includes("home loan")) {
        response = "Home loan interest rate starts from 8.5% per annum.";
    }
    else if (input.includes("car loan")) {
        response = "Car loan interest rate starts from 9% per annum.";
    }
    else if (input.includes("personal loan")) {
        response = "Personal loan available up to ₹10 Lakhs.";
    }
    else if (input.includes("credit card")) {
        response = "We offer Platinum, Gold and Silver Credit Cards.";
    }
    else if (input.includes("atm")) {
        response = "You can find nearest ATM using our mobile banking app.";
    }
    else if (input.includes("hello") || input.includes("hi")) {
        response = "Hello! Welcome to Smart Bank AI. How can I assist you?";
    }
    else if (input.includes("account opening")) {
        response = "You can open savings account with minimum ₹1000 balance.";
    }

    chatbox.innerHTML += "<p><b>Bot:</b> " + response + "</p>";
    document.getElementById("userInput").value = "";
}