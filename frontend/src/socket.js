import { io } from "socket.io-client";

export const socket = io("https://cartrizo.onrender.com", {
  transports: ["websocket"],     // Required for mobile stability
  withCredentials: true,
  reconnection: true,
  reconnectionAttempts: 10,
  timeout: 20000,
});

socket.on("connect", () => {
  console.log("✅ Connected to Render socket:", socket.id);
});

socket.on("disconnect", () => {
  console.log("⚠️ Socket disconnected");
});

socket.on("connect_error", (err) => {
  console.error("❌ Socket error:", err.message);
});
