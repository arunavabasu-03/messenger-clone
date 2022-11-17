import React from "react";
import "../styles/globals.css";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
function HomePage() {
  return (
    <main>
      {/* message list */}
      <MessageList />
      {/* chat input */}
      <ChatInput />
    </main>
  );
}

export default HomePage;
