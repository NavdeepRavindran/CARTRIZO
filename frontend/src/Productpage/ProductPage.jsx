import { useState } from "react";
import ChatBox from "../components/ChatBox";
import car1 from "../assets/cars/tesla.jpg";
import car2 from "../assets/cars/ford.jpg";
import car3 from "../assets/cars/honda.jpg";
import "./ProductPage.css";

export default function ProductPage() {
  const [openChat, setOpenChat] = useState(false);

  const productId = "product1";
  const buyerId = "buyer2"; // Rahul
  const roomId = `${productId}_${buyerId}`;

  return (
    <div className="product-page">
    
      {/* LEFT: IMAGES */}
      <div className="product-images">
        <img src={car1} alt="car" className="main-img" />
        <div className="thumbs">
          <img src={car1} />
          <img src={car2} />
          <img src={car3} />
        </div>
      </div>

      {/* RIGHT: DETAILS */}
      <div className="product-info">
        <h1>Tesla Model 3</h1>
        <h2 className="price">₹56,00,000</h2>

        <div className="specs">
          <span>⚡ Electric</span>
          <span>📍 Coimbatore</span>
          <span>📅 2021</span>
          <span>🪑 5 Seats</span>
        </div>

        <p className="desc">
          Well maintained Tesla Model 3 with excellent battery health.
          Single owner, no accidents, full service history available.
        </p>

        <button className="chat-btn" onClick={() => setOpenChat(true)}>
          💬 Chat with Owner
        </button>
      </div>

      {/* CHAT */}
      {openChat && (
        <div className="chat-float">
          <ChatBox
            roomId={roomId}
            currentUserId={buyerId}
            closeChat={() => setOpenChat(false)}
          />
        </div>
      )}
    </div>
  );
}
