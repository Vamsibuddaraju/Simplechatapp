    const socket = io("http://localhost:8080");

    const messageForm = document.getElementById("send-container");
    const messageInput = document.getElementById("message-input");
    const messageContainer = document.getElementById("message-container");

    // Event listener for submitting the form
    messageForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission from reloading the page
        const message = messageInput.value.trim(); // Trim leading and trailing whitespace

        if (message) {
            // Emit the message to the server
            socket.emit("message", message);
            // Clear the input field
            messageInput.value = "";
        }
        const messageElement = document.createElement("p");
            messageElement.textContent = message;
            messageContainer.appendChild(messageElement);
    });

        socket.on("message", function(message) {
            const messageElement = document.createElement("p");
            messageElement.textContent = message;
            messageContainer.appendChild(messageElement);
        });



