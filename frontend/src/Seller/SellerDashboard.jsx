import { useState } from "react";
import ChatBox from "../components/ChatBox";
import "./SellerDashboard.css";

export default function SellerDashboard() {
  const [activeChat, setActiveChat] = useState(null);

  const sellerId = "seller1";

  // ONLY ONE BUYER: RAHUL
  const chats = [
    {
      buyerId: "buyer2",
      productId: "product1",
      buyerName: "Rahul",
      lastMessage: "Is this car available?",
    },
  ];

  return (
    <div className="seller-dashboard">
      {/* LEFT SIDEBAR */}
      <aside className="chat-sidebar">
        <div className="sidebar-header">
          <h2>Messages</h2>
        </div>

        <div className="chat-list">
          {chats.map((chat) => (
            <div
              key={chat.buyerId}
              className={`chat-item ${
                activeChat?.buyerId === chat.buyerId ? "active" : ""
              }`}
              onClick={() => setActiveChat(chat)}
            >
              <div className="avatar">{chat.buyerName[0]}</div>

              <div className="chat-info">
                <strong>{chat.buyerName}</strong>
                <p>{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* RIGHT CHAT AREA */}
      <main className="chat-area">
        {activeChat ? (
          <>
            <div className="chat-header">
              <div className="chat-user">
                <div className="avatar large">
                  {activeChat.buyerName[0]}
                </div>
                <div>
                  <strong>{activeChat.buyerName}</strong>
                  <p>Interested Buyer</p>
                </div>
              </div>
            </div>

            <div className="chat-window">
              <ChatBox
                roomId={`${activeChat.productId}_${activeChat.buyerId}`}
                currentUserId={sellerId}
                closeChat={() => setActiveChat(null)}
              />
            </div>
          </>
        ) : (
          <div className="empty-state">
            <h3>Select a conversation</h3>
            <p>Choose a buyer to start chatting</p>
          </div>
        )}
      </main>
    </div>
  );
}
