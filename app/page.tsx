import React from "react";
import "../styles/globals.css";
import { Message } from "../typing";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

async function HomePage() {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
    (res) => res.json()
  );
  const messages: Message[] = data.messages;

  return (
    <main>
      {/* message list */}
      <MessageList initialMessages={messages} />
      {/* chat input */}
      <ChatInput />
    </main>
  );
}

export default HomePage;
