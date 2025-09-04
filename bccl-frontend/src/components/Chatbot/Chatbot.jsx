import React, { useState } from 'react';
import ChatWindow from './ChatWindow.jsx';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! I am CoalBot, the BCCL digital assistant. How can I help you today?' }
    ]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = async (message) => {
        const userMessage = { sender: 'user', text: message };
        setMessages(prev => [...prev, userMessage]);

        setTimeout(async () => {
            try {
                const response = await fetch('https://bccl-backend.onrender.com/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message }),
                });

                if (!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();
                const botMessage = { sender: 'bot', text: data.response };
                setMessages(prev => [...prev, botMessage]);

            } catch (error) {
                console.error("Error fetching chat response:", error);
                const errorMessage = { sender: 'bot', text: 'Sorry, I\'m having trouble connecting. Please try again later.' };
                setMessages(prev => [...prev, errorMessage]);
            }
        }, 500);
    };

    return (
        <>
            <ChatWindow messages={messages} handleSendMessage={handleSendMessage} toggleChat={toggleChat} isOpen={isOpen} />
            <button className="fab-chatbot" onClick={toggleChat} aria-label="Toggle Chatbot">
                 {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                )}
            </button>
        </>
    );
};

export default Chatbot;
