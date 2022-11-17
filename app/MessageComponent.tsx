import { Message } from "../typing";

type props = {
  message: Message;
};

function MessageComponent({ message }: props) {
  return <div></div>;
}

export default MessageComponent;
