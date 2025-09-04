import React, { useState, useEffect, useRef } from 'react';
// Styles are in Chatbot.css

const ChatWindow = ({ messages, handleSendMessage, toggleChat, isOpen }) => {
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            handleSendMessage(input);
            setInput('');
        }
    };

    return (
        <div className={`chat-window ${!isOpen ? 'closed' : ''}`}>
            <div className="chat-header">
                <h3>CoalBot Assistant</h3>
                <button onClick={toggleChat} className="chat-close-btn" aria-label="Close Chat">&times;</button>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <div className="bubble">{msg.text}</div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="chat-input-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    aria-label="Chat Input"
                />
                <button type="submit" aria-label="Send Message">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </form>
        </div>
    );
};

export default ChatWindow;
