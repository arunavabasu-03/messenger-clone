import { Message} from '../typing.d';
const fetcher = async () => {
  const res = await fetch("/api/getMessages");
    const data = await res.json();
    const messages: [] = await data.messages;
    return messages;
};

export default fetcher;
