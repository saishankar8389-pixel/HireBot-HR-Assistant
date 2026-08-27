function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase();
    let chatBox = document.getElementById("chatBox");

    if (message.trim() === "") {
        return;
    }

    chatBox.innerHTML += `
        <div class="message user">
            <div class="bubble">${input.value}</div>
        </div>`;

    let reply = "";

    if (message.includes("hello") || message.includes("hi")) {
        reply = "Hello! How can I help you with recruitment today?";
    }
    else if (message.includes("job")) {
        reply = "We have several open positions! What role are you interested in?";
    }
    else if (message.includes("interview")) {
        reply = "Interviews are usually scheduled within a week of applying.";
    }
    else if (message.includes("skill")) {
        reply = "Please share your key skills so I can match you with a suitable role.";
    }
    else if (message.includes("salary")) {
        reply = "Salary depends on the role and experience level.";
    }
    else if (message.includes("who are you")) {
        reply = "I am HireBot, your HR recruitment assistant!";
    }
    else if (message.includes("thank")) {
        reply = "You're welcome! Happy to help.";
    }
    else if (message.includes("bye")) {
        reply = "Goodbye! All the best for your job search.";
    }
    else {
        reply = "Sorry, I didn't understand that. Try asking about jobs, interviews, or skills.";
    }

    setTimeout(() => {
        chatBox.innerHTML += `
            <div class="message bot">
                <div class="avatar"></div>
                <div class="bubble">${reply}</div>
            </div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 400);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("sendBtn").addEventListener("click", sendMessage);

document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});