import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useDarkMode } from '../DarkModeContext';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: "Hi! I'm Devora AI, your virtual assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { isDarkMode } = useDarkMode();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const GEMINI_API_KEY = 'AIzaSyBG8xd20wlIwlH2Kbzhx2n_CxjmNV4x2mw';
  const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

  // Company context for the AI
  const COMPANY_CONTEXT = `You are Devora AI, a professional assistant for DEVORA Pvt Ltd.

Company Information:
- Company Name: DEVORA Pvt Ltd
- Founded: June 15, 2025
- Tagline: "We Code The Future You Imagine"
- Location: Sri Lanka
- Contact: +94 76 030 7168
- Email: devoragroup8@gmail.com
- Working Hours: Monday - Friday, 9:00 AM - 6:00 PM

Services We Offer:
1. Custom Software Development - Tailored software solutions (Starting from Rs. 20,000)
2. Web & Mobile App Development - Responsive web apps and native mobile apps (Starting from Rs. 15,000)
3. UI/UX Design - User-centered design (Starting from Rs. 5,000)
4. IT Consulting - Technology strategy and guidance (Starting from Rs. 5,000)
5. Maintenance & Support - 24/7 monitoring and support (Starting from Rs. 4,000/month)
6. Cloud Solutions, Database Management, DevOps, Cybersecurity, Performance Optimization

Technologies: React, Node.js, Python, Java, PHP, Laravel, MongoDB, MySQL, Flutter, React Native, Firebase, Figma, and more.

Key Stats:
- 15+ Projects Delivered
- 15+ Happy Clients
- 1+ Years Experience

Important Instructions:
- Keep responses SHORT and PROFESSIONAL (2-3 sentences maximum)
- Be friendly and helpful
- If asked about services, pricing, or contact info, provide specific details
- For complex questions, suggest contacting the team directly
- Never make up information not provided above
- Encourage users to visit the Contact page for detailed inquiries`;

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${COMPANY_CONTEXT}\n\nUser Question: ${inputMessage}\n\nProvide a SHORT, professional response (2-3 sentences max):`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 150,
            topP: 0.8,
            topK: 40
          }
        })
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const botMessage = {
          role: 'bot',
          content: data.candidates[0].content.parts[0].text,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        role: 'bot',
        content: "I apologize, but I'm having trouble connecting right now. Please contact us at +94 76 030 7168 or devoragroup8@gmail.com.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          className={`chatbot-float-button ${isDarkMode ? 'dark' : 'light'}`}
          onClick={() => setIsOpen(true)}
          aria-label="Open Chat"
        >
          <MessageCircle className="chatbot-icon" />
          <span className="chatbot-pulse-ring"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`chatbot-window ${isDarkMode ? 'dark' : 'light'}`}>
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <img src="/logo.png" alt="Devora AI" className="chatbot-avatar-image" />
              </div>
              <div className="chatbot-header-text">
                <h3>Devora AI</h3>
                <span className="chatbot-status">
                  <span className="chatbot-status-dot"></span>
                  Online
                </span>
              </div>
            </div>
            <button
              className="chatbot-close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
            >
              <X className="chatbot-close-icon" />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${message.role === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <div className="chatbot-message-avatar">
                  {message.role === 'user' ? (
                    <User className="chatbot-user-icon" />
                  ) : (
                    <img src="/logo.png" alt="Devora AI" className="chatbot-avatar-image" />
                  )}
                </div>
                <div className="chatbot-message-content">
                  <p>{message.content}</p>
                  <span className="chatbot-message-time">
                    {message.timestamp.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message bot-message">
                <div className="chatbot-message-avatar">
                  <img src="/logo.png" alt="Devora AI" className="chatbot-avatar-image" />
                </div>
                <div className="chatbot-message-content">
                  <div className="chatbot-typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input-container">
            <textarea
              className="chatbot-input"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              rows="1"
              disabled={isLoading}
            />
            <button
              className="chatbot-send-button"
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isLoading}
              aria-label="Send Message"
            >
              <Send className="chatbot-send-icon" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
