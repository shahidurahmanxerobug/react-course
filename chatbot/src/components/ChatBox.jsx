import { useState, useRef, useEffect } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import { getGeminiReply } from "../services/geminiService";

export default function ChatBox() {
  const BOT_GREETING = "Hello! I am your virtual customer care assistant. How can I help you today?";
  
  const [messages, setMessages] = useState([{ id: 1, text: BOT_GREETING, sender: "bot" }]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom on message update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isBotTyping]);

  // Send user message and get AI reply
  const sendMessage = async (text) => {
    setMessages(prev => [...prev, { id: Date.now(), text, sender: "user" }]);
    setIsBotTyping(true);

    // You can prepend a system prompt to make AI act as customer care agent
    const reply = await getGeminiReply(
      `You are a helpful customer care agent.\nUser: ${text}`
    );

    setMessages(prev => [...prev, { id: Date.now(), text: reply, sender: "bot" }]);
    setIsBotTyping(false);
  };

  // Clear chat history
  const clearChat = () => {
    setMessages([{ id: 1, text: BOT_GREETING, sender: "bot" }]);
  };

  return (
    <div className="flex flex-col h-[500px] w-[400px] bg-white shadow-lg rounded-xl border">
      {/* Header */}
      <div className="bg-blue-500 text-white flex justify-between items-center px-4 py-3 rounded-t-xl font-semibold">
        <span>Customer Care</span>
        <button
          onClick={clearChat}
          className="text-sm bg-blue-700 hover:bg-blue-800 px-2 py-1 rounded"
        >
          Clear
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
        {messages.map(msg => (
          <Message key={msg.id} text={msg.text} sender={msg.sender} />
        ))}
        {isBotTyping && <Message text="..." sender="bot" />}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <MessageInput onSend={sendMessage} />
    </div>
  );
}