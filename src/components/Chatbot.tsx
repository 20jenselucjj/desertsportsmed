import { useState, useEffect, useRef } from 'react';
import { sendChatbotInquiry } from '../utils/emailService';

// Define types for our messages and contact form
type MessageType = {
  text: string;
  sender: 'user' | 'bot';
  isHtml?: boolean;
};

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// Knowledge base for the chatbot
const knowledgeBase = {
  greeting: [
    'Hello! How can I help you today?',
    'Hi there! Welcome to Desert Sports Med. What can I assist you with?',
    'Welcome! How may I assist you with our sports medicine and rehabilitation services today?'
  ],

  services: {
    general: 'At Desert Sports Med in St. George, Utah, we offer specialized sports medicine and rehabilitation services including Performance Therapy, Sports Performance Training, Semi-Private Training, Small Group Training, and Online Training programs. Our evidence-based approach combines clinical expertise with advanced training methodologies.',
    performanceTherapy: 'Our 1:1 Performance Therapy combines advanced manual therapy techniques (joint mobilization, soft tissue manipulation, dry needling, IASTM) with corrective exercises to address pain, improve mobility, and enhance performance. Each session is tailored to your specific needs and goals.',
    sportsPerformance: 'Our Sports Performance programs utilize biomechanical analysis and sport-specific training to help athletes improve strength, power, speed, agility, and injury resilience. We create periodized training plans based on your competitive schedule and performance goals.',
    semiPrivateTraining: 'Semi-Private Training (2-3 people) offers personalized coaching with individualized programming in a collaborative environment. It\'s perfect for those who want expert guidance while training with a friend or family member.',
    smallGroupTraining: 'Our Small Group Personal Training (4-6 people) provides a motivating group environment with personalized attention. Work out in a small group setting to achieve your goals faster, getting all the benefits of group training and personal training in one.',
    onlineTraining: 'Our Online Training programs include customized workout plans, video exercise demonstrations, progress tracking, and regular coaching check-ins. Ideal for clients who travel frequently or prefer to train at their own facility.',
    rehabilitation: 'Our rehabilitation services address both acute injuries and chronic conditions through a progressive approach that focuses on restoring optimal movement patterns, building strength, and preventing re-injury.'
  },

  pricing: 'Our pricing varies depending on the service and program duration. We offer flexible packages to meet your needs and goals. For detailed pricing information, please fill out our pricing request form on the website or contact us at (801) 897-4043.',

  location: 'We are located in St. George, Utah. Our facility is equipped with state-of-the-art rehabilitation and performance training equipment. Please contact us at (801) 897-4043 for our current address and directions.',

  hours: 'We are open Monday to Friday from 8am to 7pm, Saturday from 9am to 2pm, and closed on Sunday. Early morning and evening appointments are available for those with busy schedules.',

  booking: 'You can book an appointment through our online scheduling system on the Book Online page, or by calling us at (801) 897-4043. For new clients, we recommend scheduling a Free Intro session to determine the best program for your needs.',

  insurance: 'We accept most major insurance plans for our Performance Therapy services. HSA/FSA accounts can also be used for eligible services. Please contact us with your specific insurance information to verify coverage and benefits.',

  injuries: {
    sportInjuries: 'We treat a wide range of sports injuries including sprains, strains, tendinopathies, muscle tears, post-surgical rehabilitation, and overuse injuries. Our approach focuses on addressing the root cause of the injury, not just the symptoms.',
    chronicPain: 'For chronic pain conditions, we utilize a comprehensive approach that may include manual therapy, corrective exercise, movement re-education, and lifestyle modifications to provide lasting relief and improved function.',
    recovery: 'Our recovery services include specialized techniques to enhance tissue healing, reduce inflammation, and restore optimal function following injury or intense training.'
  },

  faq: {
    whatToBring: 'For your first appointment, please bring your ID, insurance card (if applicable), comfortable athletic clothing, appropriate footwear, and any relevant medical records, imaging reports, or previous treatment notes.',
    firstVisit: 'Your first visit includes a comprehensive assessment with movement screening, functional testing, and detailed history taking. We\'ll develop a personalized treatment or training plan and begin implementation during this initial session.',
    cancellation: 'We have a 24-hour cancellation policy. Please notify us at least 24 hours in advance if you need to reschedule or cancel your appointment to avoid a cancellation fee.',
    covid: 'We follow all recommended health and safety protocols to ensure a safe environment for our clients. Please reschedule if you\'re experiencing any symptoms of illness.'
  },

  team: 'Our team consists of highly qualified professionals with extensive experience in sports medicine, physical therapy, strength and conditioning, and performance enhancement. Each team member is committed to helping you achieve your health and fitness goals.',

  contact: 'You can reach us by phone at (801) 897-4043 or by email at desertsportsmed@gmail.com. Would you like to send us a message now?'
};

interface ChatbotProps {
  isInitiallyOpen?: boolean;
}

const Chatbot = ({ isInitiallyOpen = false }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  const [messages, setMessages] = useState<MessageType[]>([
    { text: 'Hi there! How can I help you today?', sender: 'bot' },
    {
      text: 'You can ask me about our services, pricing, location, hours, or click one of the options below:',
      sender: 'bot',
      isHtml: true
    },
  ]);
  const [input, setInput] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [quickButtons, setQuickButtons] = useState<string[]>([
    'Services', 'Pricing', 'Location', 'Hours', 'Book Appointment', 'Contact Us'
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleQuickButtonClick = (buttonText: string) => {
    // Add user message as if they typed the button text
    const newMessage = { text: buttonText, sender: 'user' as const };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    // Log for debugging
    console.log('Quick button clicked:', buttonText);
    console.log('Current messages:', newMessages);

    // Process the button click after a short delay
    setTimeout(() => {
      processUserInput(buttonText);
    }, 300);
  };

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setIsSubmitting(true);

    try {
      // For development purposes, simulate a successful submission
      // In production, uncomment the line below to actually send the email
      // const result = await sendChatbotInquiry(contactForm);
      const result = { success: true }; // Simulate success for testing

      console.log('Form submission result:', result);

      if (result.success) {
        const successMessage = {
          text: 'Thank you for your message! We will get back to you as soon as possible.',
          sender: 'bot' as const
        };
        setMessages(prevMessages => [...prevMessages, successMessage]);
        setShowContactForm(false);
        setContactForm({ name: '', email: '', phone: '', message: '' });
      } else {
        const errorMessage = {
          text: 'Sorry, there was an error sending your message. Please try again or call us at (801) 897-4043.',
          sender: 'bot' as const
        };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      const errorMessage = {
        text: 'Sorry, there was an error sending your message. Please try again or call us at (801) 897-4043.',
        sender: 'bot' as const
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const processUserInput = (userInput: string) => {
    const userMessage = userInput.toLowerCase();
    let botResponse = '';
    let isHtml = false;

    // Show typing indicator
    setIsTyping(true);

    // Check for contact form request
    if (userMessage.includes('contact') || userMessage.includes('email') || userMessage.includes('message') || userMessage.includes('contact us')) {
      setShowContactForm(true);
      botResponse = 'Please fill out the form below to send us a message. Click the Send button when you\'re done.';
    }
    // Check for appointment booking
    else if (userMessage.includes('appointment') || userMessage.includes('book') || userMessage.includes('schedule')) {
      botResponse = knowledgeBase.booking;
    }
    // Check for hours inquiry
    else if (userMessage.includes('hour') || userMessage.includes('open') || userMessage.includes('time')) {
      botResponse = knowledgeBase.hours;
    }
    // Check for services inquiry
    else if (userMessage.includes('service') || userMessage.includes('offer') || userMessage.includes('provide') || userMessage.includes('program')) {
      if (userMessage.includes('performance therapy') || userMessage.includes('therapy')) {
        botResponse = knowledgeBase.services.performanceTherapy;
      } else if (userMessage.includes('sports performance') || userMessage.includes('athletic')) {
        botResponse = knowledgeBase.services.sportsPerformance;
      } else if (userMessage.includes('semi-private') || userMessage.includes('semi private')) {
        botResponse = knowledgeBase.services.semiPrivateTraining;
      } else if (userMessage.includes('small group') || userMessage.includes('group training')) {
        botResponse = knowledgeBase.services.smallGroupTraining;
      } else if (userMessage.includes('online') || userMessage.includes('remote')) {
        botResponse = knowledgeBase.services.onlineTraining;
      } else {
        botResponse = knowledgeBase.services.general + ' Would you like to know more about a specific service?';
        isHtml = true;
      }
    }
    // Check for location inquiry
    else if (userMessage.includes('location') || userMessage.includes('address') || userMessage.includes('where') || userMessage.includes('st george') || userMessage.includes('utah')) {
      botResponse = knowledgeBase.location;
    }
    // Check for pricing inquiry
    else if (userMessage.includes('cost') || userMessage.includes('price') || userMessage.includes('fee') || userMessage.includes('pricing')) {
      botResponse = knowledgeBase.pricing;
    }
    // Check for insurance inquiry
    else if (userMessage.includes('insurance') || userMessage.includes('coverage')) {
      botResponse = knowledgeBase.insurance;
    }
    // Check for injury and rehabilitation inquiries
    else if (userMessage.includes('injury') || userMessage.includes('hurt') || userMessage.includes('pain') || userMessage.includes('sprain') || userMessage.includes('strain')) {
      botResponse = knowledgeBase.injuries.sportInjuries;
    }
    else if (userMessage.includes('chronic pain') || userMessage.includes('ongoing pain') || userMessage.includes('persistent')) {
      botResponse = knowledgeBase.injuries.chronicPain;
    }
    else if (userMessage.includes('recovery') || userMessage.includes('healing') || userMessage.includes('inflammation')) {
      botResponse = knowledgeBase.injuries.recovery;
    }
    // Check for rehabilitation inquiry
    else if (userMessage.includes('rehab') || userMessage.includes('rehabilitation')) {
      botResponse = knowledgeBase.services.rehabilitation;
    }
    // Check for team/staff inquiry
    else if (userMessage.includes('team') || userMessage.includes('staff') || userMessage.includes('therapist') || userMessage.includes('trainer') || userMessage.includes('doctor')) {
      botResponse = knowledgeBase.team;
    }
    // Check for FAQ inquiries
    else if (userMessage.includes('bring') || userMessage.includes('what to bring')) {
      botResponse = knowledgeBase.faq.whatToBring;
    }
    else if (userMessage.includes('first visit') || userMessage.includes('first appointment') || userMessage.includes('initial') || userMessage.includes('assessment')) {
      botResponse = knowledgeBase.faq.firstVisit;
    }
    else if (userMessage.includes('cancel') || userMessage.includes('reschedule')) {
      botResponse = knowledgeBase.faq.cancellation;
    }
    else if (userMessage.includes('covid') || userMessage.includes('safety') || userMessage.includes('protocol')) {
      botResponse = knowledgeBase.faq.covid;
    }
    // Check for gratitude
    else if (userMessage.includes('thank')) {
      botResponse = "You\'re welcome! Is there anything else I can help you with?";
    }
    // Check for greeting
    else if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
      const randomIndex = Math.floor(Math.random() * knowledgeBase.greeting.length);
      botResponse = knowledgeBase.greeting[randomIndex];
    }
    // Default response
    else {
      botResponse = "I\'m not sure I understand. Can you please rephrase your question or call us at (801) 897-4043 for more information? You can ask about our services, pricing, location, hours, or specific injuries and rehabilitation options.";
    }

    // Store the response for later use
    const finalResponse = { text: botResponse, sender: 'bot' as const, isHtml };
    const typingDelay = Math.min(1500, 500 + botResponse.length * 10);

    // Add bot response after a realistic typing delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(currentMessages => [...currentMessages, finalResponse]);
    }, typingDelay);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = input;

    // Force update the messages array with the user message
    const newMessage = { text: userMessage, sender: 'user' as const };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    // Clear input field
    setInput('');

    // Log for debugging
    console.log('User message added:', userMessage);
    console.log('Current messages:', newMessages);

    // Process the user input after a short delay to ensure the user message is displayed
    setTimeout(() => {
      processUserInput(userMessage);
    }, 300);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Update isOpen when isInitiallyOpen prop changes
  useEffect(() => {
    if (isInitiallyOpen) {
      setIsOpen(true);
    }
  }, [isInitiallyOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="dsm-gradient-btn w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden animate-slide-in"
        >
          <div className="bg-gradient-to-r from-dsm-orange to-dsm-purple p-4">
            <h3 className="text-white font-bold">Desert Sports Med Chat</h3>
            <p className="text-white text-sm opacity-80">Ask us anything!</p>
          </div>

          <div className="h-80 overflow-y-auto p-4 bg-gray-50 hide-scrollbar">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 message-item animate-fade-in ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gray-200 text-gray-800 font-medium border-2 border-dsm-orange shadow-md'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  {message.sender === 'user' && (
                    <div className="flex items-center mb-1">
                      <span className="text-xs text-dsm-red font-medium">You</span>
                    </div>
                  )}
                  {message.isHtml ? (
                    <div dangerouslySetInnerHTML={{ __html: message.text }} />
                  ) : (
                    <span className="whitespace-pre-wrap">{message.text}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gray-200 p-3 rounded-lg flex items-center">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}

            {/* Contact Form */}
            {showContactForm && (
              <div className="bg-white p-4 rounded-lg border-2 border-dsm-orange mb-4 shadow-md">
                <h4 className="font-bold text-gray-800 mb-3 text-center text-lg border-b pb-2 border-gray-200">Contact Us</h4>
                <form onSubmit={handleContactFormSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactFormChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dsm-orange"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactFormChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dsm-orange"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactFormChange}
                      placeholder="Your Phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dsm-orange"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactFormChange}
                      placeholder="Your Message"
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dsm-orange"
                    ></textarea>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-300 disabled:opacity-50 font-medium"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Quick Buttons */}
            {!showContactForm && (
              <div className="flex flex-wrap gap-2 mt-4 mb-2">
                <p className="w-full text-xs text-gray-500 mb-1">Quick options:</p>
                {quickButtons.map((button, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickButtonClick(button)}
                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm hover:bg-gray-300 hover:text-dsm-red transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm"
                  >
                    {button}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          {!showContactForm && (
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-dsm-orange"
                />
                <button
                  type="submit"
                  className="bg-dsm-orange text-white px-4 py-2 rounded-r-lg hover:bg-dsm-red transition duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Removed the welcome message as it's now a separate component */}
    </div>
  );
};

export default Chatbot;
