import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const phone = "923460655066";
  const message = encodeURIComponent("Hi Abdullah! I visited your portfolio and would like to connect.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: hovered ? "50px" : "50%",
        width: hovered ? "auto" : "56px",
        height: "56px",
        padding: hovered ? "0 20px 0 16px" : "0",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(37,211,102,0.5)",
        textDecoration: "none",
        transition: "all 0.3s ease",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <FaWhatsapp size={28} style={{ flexShrink: 0 }} />
      {hovered && (
        <span style={{ fontSize: "14px", fontWeight: 600 }}>
          Chat with me
        </span>
      )}
    </a>
  );
}

export default WhatsAppButton;
