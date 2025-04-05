let currentUser = "User1"; // Start with User1
let user1Nickname = ""; // Store User1's nickname

function selectAgent(agentName) {
    document.getElementById("selectedAgent").textContent = agentName;
}

function startChat() {
    const nickname = document.getElementById("nickname").value.trim();
    if (!nickname) {
        alert("Please enter your nickname.");
        return;
    }

    user1Nickname = nickname; // Assign the nickname to User1
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("chat-screen").style.display = "block";
}

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();
    if (message === "") return;

    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    // Use User1's nickname if currentUser is User1
    const displayName = currentUser === "User1" ? user1Nickname : "User2";
    messageElement.textContent = `${displayName}: ${message}`;

    // Add class for styling based on the user
    messageElement.classList.add(currentUser === "User1" ? "user1" : "user2");

    chatBox.appendChild(messageElement);
    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Alternate between User1 and User2
    currentUser = currentUser === "User1" ? "User2" : "User1";
}