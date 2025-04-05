import { useState, useEffect } from 'react';

interface WelcomeMessageProps {
  onChatOpen: () => void;
  isChatOpen: boolean;
}

const WelcomeMessage = ({ onChatOpen, isChatOpen }: WelcomeMessageProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the welcome message after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Hide welcome message when chat is opened
  useEffect(() => {
    if (isChatOpen) {
      setIsVisible(false);
    }
  }, [isChatOpen]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleChatOpen = () => {
    onChatOpen();
    handleClose();
  };

  if (!isVisible || isChatOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 max-w-xs bg-white p-4 rounded-lg shadow-lg border-l-4 border-dsm-orange animate-bounce-in z-40">
      <p className="text-gray-800 mb-2">👋 Hi there! Welcome to Desert Sports Med. How can we help you today?</p>
      <div className="flex space-x-2">
        <button
          onClick={handleChatOpen}
          className="text-dsm-orange hover:text-dsm-red font-medium"
        >
          Chat with us
        </button>
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          aria-label="Close welcome message"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default WelcomeMessage;
