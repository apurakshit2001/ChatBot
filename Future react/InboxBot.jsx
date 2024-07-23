import React, { useState, useEffect } from 'react';
import botResponses from './botResponses'; // Adjust the path if necessary
import './InboxBot.css'; // Optional: For custom styling

const InboxBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [language, setLanguage] = useState('english');

  const appendMessage = (sender, message) => {
    setMessages((prevMessages) => [...prevMessages, { sender, message }]);
  };

  const getBotResponse = (userMessage) => {
    const normalizedMessage = userMessage.toLowerCase();
    return botResponses[language][normalizedMessage] || botResponses[language]['default'];
  };

  const sendMessage = () => {
    if (userInput.trim() !== '') {
      appendMessage('user', userInput);
      setUserInput('');

      setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        appendMessage('bot', botResponse);
      }, 500);
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    const chatOutput = document.getElementById('chat-output');
    chatOutput.scrollTop = chatOutput.scrollHeight;
  }, [messages]);

  return (
    <div id="chat-container">
      <div id="chat-window">
        <div id="chat-output">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender}>
              {msg.message}
            </div>
          ))}
        </div>
      </div>
      <div className="inputSection">
        <select id="language-select" value={language} onChange={handleLanguageChange}>
          <option value="english">English</option>
          <option value="bengali">Bengali</option>
        </select>
        <div className="inputbox">
          <input
            type="text"
            id="user-input"
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
          />
          <button id="send-button" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default InboxBot;
