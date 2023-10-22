// const chatInput =  document.querySelector(".chat-input textarea");
// const sendChatBtn =  document.querySelector(".chat-input span");
// const chatbox =  document.querySelector(".chatbox");

// let userMessage;

// const createChatLi = (message, className) => {
//     // create a chat <li> element passed messsage and className
//     const chatLi = document.createElement("li");
//     chatLi.classList.add("chat" ,className);
//     let chatContent = className === "outgoing" ?  `<p>${message}</p>`: `<p><span class="material-symbols-outlined">smart_toy</span>${message}</p>`
//     chatLi.innerHTML = chatContent;
//     return chatLi;
// }

// const handleChat = () => {
//       userMessage = chatInput.value.trim();
//       if(!userMessage) return;
//      // append the user message to the chatbox 
//       chatbox.appendChild(createChatLi(userMessage, "outgoing"));
//     // Display thinking message while waiting for response
//       setTimeout(() => {
//         chatbox.appendChild(createChatLi("Thinking", "incoming"));
//       },600)
// }

// sendChatBtn.addEventListener("click", handleChat);
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<p><span class="material-symbols-outlined">smart_toy</span>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));

  setTimeout(() => {
    chatbox.appendChild(createChatLi("Thinking", "incoming"));
    sendBotResponse();
  }, 600);

  chatInput.value = ""; // Clear the input field
};

const sendBotResponse = () => {
  // Simulate a bot response (replace with your bot logic)
  setTimeout(() => {
    const botResponse = "This is a bot response. Replace this with your bot logic.";
    chatbox.appendChild(createChatLi(botResponse, "incoming"));
  }, 1000); // Simulate a 1-second delay
};

sendChatBtn.addEventListener("click", handleChat);

// Listen for the Enter key (key code 13)
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent the default behavior of Enter (new line)
    handleChat(); // Trigger the chat handling function
  }
});
