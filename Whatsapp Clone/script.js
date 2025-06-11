const chats = {
    Alice: [
      { text: "Hey, how are you?", type: "received", timestamp: getTime() },
      { text: "I’m good, how about you?", type: "sent", timestamp: getTime() }
    ],
    Bob: [
      { text: "Hello!", type: "received", timestamp: getTime() },
      { text: "Hi Bob, what's up?", type: "sent", timestamp: getTime() }
    ],
    Charlie: [
      { text: "Yo! Ready to play?", type: "received", timestamp: getTime() },
      { text: "Always!", type: "sent", timestamp: getTime() }
    ]
  };

  let currentChat = 'Alice';

  function getTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function switchChat(name) {
    currentChat = name;
    document.getElementById("chatHeader").textContent = name;
    renderMessages();
  }

  function renderMessages() {
    const messagesContainer = document.getElementById("messages");
    messagesContainer.innerHTML = "";
    chats[currentChat].forEach(msg => {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", msg.type);
      messageDiv.textContent = msg.text;

      const timeSpan = document.createElement("div");
      timeSpan.className = "timestamp";
      timeSpan.textContent = msg.timestamp;
      messageDiv.appendChild(timeSpan);

      messagesContainer.appendChild(messageDiv);
    });
  }

  function sendMessage() {
    const input = document.getElementById("inputMessage");
    const messageText = input.value.trim();
    if (messageText === "") return;

    const timestamp = getTime();

    const newMsg = { text: messageText, type: "sent", timestamp };
    chats[currentChat].push(newMsg);

    renderMessages();
    input.value = "";

    // Simulate reply
    setTimeout(() => {
      const reply = {
        text: `Reply to: ${messageText}`,
        type: "received",
        timestamp: getTime()
      };
      chats[currentChat].push(reply);
      renderMessages();
    }, 1000);
  }

  // Load initial chat
  switchChat(currentChat);
