import { useEffect, useState } from "react";
import { socket } from "../socket";

export default function ChatBox({ roomId, currentUserId, closeChat }) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("join_chat", roomId);

    const handleReceive = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("receive_message", handleReceive);

    return () => {
      socket.off("receive_message", handleReceive);
    };
  }, [roomId]);

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("send_message", {
      roomId,
      senderId: currentUserId,
      text,
    });

    setText("");
  };

  return (
    <div style={styles.box}>
      <div style={styles.header}>
        Chat
        <button onClick={closeChat}>X</button>
      </div>

      <div style={styles.body}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.msg,
              alignSelf:
                m.senderId === currentUserId ? "flex-end" : "flex-start",
              background:
                m.senderId === currentUserId ? "#dcf8c6" : "#eee",
            }}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  box: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ddd",
    background: "#fff",
  },
  header: {
    padding: 10,
    background: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
  body: {
    flex: 1,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    overflowY: "auto",
  }, 
  msg: {
    padding: 8,
    borderRadius: 6,
    maxWidth: "70%",
  },
  footer: {
    display: "flex",
    padding: 6,
    gap: 6,
  },
};
