"use client";
import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../typing";
import useSWR from "swr";
import fetcher from "../utils/fetchMessages";
function ChatInput() {
  const [input, setInput] = useState("");

  /*fetching messages and store it into  cache >> [KEY - /api/getMessages]*/
  const { data: messages, mutate, error } = useSWR("/api/getMessages", fetcher);
  console.log("fetching messages...", messages);

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); /* it is not refresh */
    if (!input) return;
    const messageToSend: string = input;
    setInput('');
    const id = uuid();
    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "Elon Musk",
      profilePic: "pic",
      email: "test@test.email.com",
    };
    const uploadMessageToUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }).then((res) => res.json());
      return [data.message, ...messages!];
    };
    //@ts-ignore
    await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError:true,/*if their is an error it is going to rollback the previous cache*/
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="flex px-10 py-5 space-x-2 border-t border-gray-100 fixed bottom-0 z-50 w-full bg-white"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your message ...."
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus: border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
