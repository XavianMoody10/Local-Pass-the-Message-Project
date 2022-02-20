"use strict";
const messageInput = document.querySelector("#message-content input");
const messageDisplay = document.querySelector(
  "#message-content p:nth-child(5)"
);
const submitButton = document.querySelector("#message-content button");
submitButton.addEventListener("click", writeMessage);

function writeMessage() {
  messageInput.value == ""
    ? (messageDisplay.textContent = "Please enter a message")
    : (messageDisplay.textContent = messageInput.value);
  console.log(messageInput.value);
  messageInput.value = "";
}
