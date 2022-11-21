import { unstable_getServerSession } from "next-auth";
import React from "react";
import "../styles/globals.css";
import { Message } from "../typing";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { Providers } from "./providers";

async function HomePage() {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
    (res) => res.json()
  );
  const messages: Message[] = data.messages;
const session = await unstable_getServerSession();
  return (
    <Providers session={session}>
      {" "}
      <main>
        {/* message list */}
        <MessageList initialMessages={messages} />
        {/* chat input */}
        <ChatInput session={session} />
      </main>
    </Providers>
  );
}

export default HomePage;
