import React from "react";
import useSWR from "swr";
import { Message } from "../typing";
import fetcher from "../utils/fetchMessages";
import MessageComponent from "./MessageComponent";
function MessageList() {
  const {
    data: messages,
    mutate,
    error,
  } = useSWR<Message[]>("/api/getMessages", fetcher);

  return (
    <div>
      {messages?.map((message) => (
        <div key={message.id}>
          <MessageComponent key={message.id} message={message} />
        </div>
      ))}
    </div>
  );
}

export default MessageList;
