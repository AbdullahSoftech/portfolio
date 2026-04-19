import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const SUGGESTIONS = [
  "What are Abdullah's skills?",
  "Tell me about his experience",
  "What projects has he built?",
  "How can I contact him?",
];

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Abdullah's AI assistant 👋 Ask me anything about his skills, experience, or projects!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Sorry, something went wrong." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Oops! Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        title="Chat with Abdullah's AI"
        style={{
          position: "fixed",
          bottom: "100px",
          right: "30px",
          zIndex: 9999,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #c770f0, #7b2ff7)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(199,112,240,0.5)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {open ? <FaTimes color="#fff" size={22} /> : <FaRobot color="#fff" size={24} />}
      </button>

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "170px",
            right: "30px",
            zIndex: 9998,
            width: "340px",
            maxHeight: "480px",
            borderRadius: "16px",
            background: "#0d0d1a",
            border: "1px solid rgba(199,112,240,0.3)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "chatSlideUp 0.25s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #c770f0, #7b2ff7)",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaRobot color="#fff" size={18} />
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}>
                Abdullah's AI Assistant
              </div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "11px" }}>
                Ask me anything about him!
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              maxHeight: "300px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 13px",
                    borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    background: msg.role === "user"
                      ? "linear-gradient(135deg, #c770f0, #7b2ff7)"
                      : "rgba(255,255,255,0.07)",
                    color: "#fff",
                    fontSize: "13px",
                    lineHeight: "1.5",
                    border: msg.role === "assistant" ? "1px solid rgba(199,112,240,0.2)" : "none",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "10px 16px",
                    borderRadius: "16px 16px 16px 4px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(199,112,240,0.2)",
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "#c770f0",
                        animation: `bounce 1.2s ease-in-out ${d * 0.2}s infinite`,
                        display: "inline-block",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions (only when only 1 message = initial) */}
          {messages.length === 1 && (
            <div style={{ padding: "0 14px 10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  style={{
                    background: "rgba(199,112,240,0.12)",
                    border: "1px solid rgba(199,112,240,0.35)",
                    borderRadius: "20px",
                    color: "#c770f0",
                    fontSize: "11px",
                    padding: "5px 10px",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(199,112,240,0.25)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(199,112,240,0.12)")}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            style={{
              padding: "12px",
              borderTop: "1px solid rgba(199,112,240,0.2)",
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about Abdullah..."
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(199,112,240,0.3)",
                borderRadius: "20px",
                padding: "9px 14px",
                color: "#fff",
                fontSize: "13px",
                outline: "none",
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: loading || !input.trim()
                  ? "rgba(199,112,240,0.3)"
                  : "linear-gradient(135deg, #c770f0, #7b2ff7)",
                border: "none",
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.2s",
              }}
            >
              <FaPaperPlane color="#fff" size={14} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%            { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}

export default ChatBot;
