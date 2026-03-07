
export default function Message({ text, sender }) {
  const isUser = sender === "user";

  return (
    <div className={`flex items-start ${isUser ? "justify-end" : "justify-start"} space-x-2`}>
      {/* Bot/User Icon */}
      <span>{isUser ? "👤" : "🤖"}</span>

      {/* Message bubble */}
      <div
        className={`px-4 py-2 rounded-lg max-w-[70%] text-sm ${
          isUser
            ? "bg-blue-500 text-white flex items-center justify-end"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {text}
      </div>
    </div>
  );
}