import Chat from "./classes/chat";

document.addEventListener("DOMContentLoaded", () => {
  const url = "localhost:7070";

  const chat = new Chat(url);
  chat.start();
});
