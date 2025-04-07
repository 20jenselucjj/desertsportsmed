// Desert Sports Med - Chatbot JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initChatbot();

    // Show welcome popup after 3 seconds
    setTimeout(function() {
        showWelcomePopup();
    }, 3000);
});

// Function to show welcome bubble
function showWelcomePopup() {
    // Check if user has already seen the bubble (using sessionStorage to show once per session)
    if (sessionStorage.getItem('welcomeBubbleShown')) {
        return;
    }

    // Create welcome bubble elements
    const welcomeBubble = document.createElement('div');
    welcomeBubble.className = 'welcome-bubble';
    welcomeBubble.innerHTML = `
        <div class="welcome-bubble-content">Hi there, have a question?</div>
        <button class="welcome-bubble-close"><i class="fas fa-times"></i></button>
    `;

    // Add bubble to body
    document.body.appendChild(welcomeBubble);

    // Show bubble with animation
    setTimeout(() => {
        welcomeBubble.classList.add('active');
    }, 100);

    // Auto-hide bubble after 8 seconds
    setTimeout(() => {
        if (welcomeBubble.parentNode) {
            welcomeBubble.classList.remove('active');
            setTimeout(() => {
                if (welcomeBubble.parentNode) {
                    welcomeBubble.remove();
                }
            }, 300);
        }
    }, 8000);

    // Close bubble event
    const closeBtn = welcomeBubble.querySelector('.welcome-bubble-close');
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent bubble click event
        welcomeBubble.classList.remove('active');
        setTimeout(() => {
            welcomeBubble.remove();
        }, 300);

        // Set flag in sessionStorage
        sessionStorage.setItem('welcomeBubbleShown', 'true');
    });

    // Click on bubble to open chatbot
    welcomeBubble.addEventListener('click', () => {
        welcomeBubble.classList.remove('active');
        setTimeout(() => {
            welcomeBubble.remove();
        }, 300);

        // Open chatbot
        const chatbotContainer = document.querySelector('.chatbot-container');
        const chatbotInput = document.querySelector('.chatbot-input input');
        if (chatbotContainer) {
            chatbotContainer.classList.add('active');
            if (chatbotInput) chatbotInput.focus();

            // Trigger welcome message if it's the first time
            const chatbotMessages = document.querySelector('.chatbot-messages');
            if (chatbotMessages && chatbotMessages.children.length === 0) {
                setTimeout(() => {
                    addBotMessage("Hi there! 👋 I'm your Desert Sports Med virtual assistant. How can I help you today?");
                    showOptions([
                        "Tell me about your services",
                        "What programs do you offer?",
                        "How can I book an appointment?",
                        "Request pricing information",
                        "Where are you located?"
                    ]);
                }, 500);
            }
        }

        // Set flag in sessionStorage
        sessionStorage.setItem('welcomeBubbleShown', 'true');
    });
}

function initChatbot() {
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotInput = document.querySelector('.chatbot-input input');
    const chatbotSendBtn = document.querySelector('.chatbot-input button');
    const chatbotMessages = document.querySelector('.chatbot-messages');

    if (!chatbotToggle || !chatbotContainer) return;

    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.classList.toggle('active');
        if (chatbotContainer.classList.contains('active')) {
            chatbotInput.focus();
            if (chatbotMessages.children.length === 0) {
                // Send welcome message if it's the first time opening
                setTimeout(() => {
                    addBotMessage("Hi there! 👋 I'm your Desert Sports Med virtual assistant. How can I help you today?");
                    showOptions([
                        "Tell me about your services",
                        "What programs do you offer?",
                        "How can I book an appointment?",
                        "Request pricing information",
                        "Where are you located?"
                    ]);
                }, 500);
            }
        }
    });

    // Close chatbot
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.classList.remove('active');
        });
    }

    // Send message on button click
    if (chatbotSendBtn) {
        chatbotSendBtn.addEventListener('click', sendMessage);
    }

    // Send message on Enter key
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Function to send user message
    function sendMessage() {
        const message = chatbotInput.value.trim();

        if (message === '') return;

        // Add user message to chat
        addUserMessage(message);

        // Clear input
        chatbotInput.value = '';

        // Show typing indicator
        showTypingIndicator();

        // Process the message and respond (with a slight delay to simulate thinking)
        setTimeout(() => {
            processMessage(message);
        }, 1000);
    }

    // Function to add user message to chat
    function addUserMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message user';
        messageElement.innerHTML = `<div class="message-content">${text}</div>`;
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();
    }

    // Function to add bot message to chat
    function addBotMessage(text) {
        // Remove typing indicator if it exists
        const typingIndicator = chatbotMessages.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }

        const messageElement = document.createElement('div');
        messageElement.className = 'message bot';
        messageElement.innerHTML = `<div class="message-content">${text}</div>`;
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();
    }

    // Function to show typing indicator
    function showTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.className = 'typing-indicator';
        typingElement.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        chatbotMessages.appendChild(typingElement);
        scrollToBottom();
    }

    // Function to show clickable options
    function showOptions(options) {
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'chatbot-options';

        options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'chatbot-option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', function() {
                addUserMessage(option);
                showTypingIndicator();
                setTimeout(() => {
                    processMessage(option);
                }, 1000);
            });
            optionsContainer.appendChild(optionElement);
        });

        const messageElement = document.createElement('div');
        messageElement.className = 'message bot';
        messageElement.appendChild(optionsContainer);
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();
    }

    // Function to scroll chat to bottom
    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Function to process user message and generate response
    function processMessage(message) {
        message = message.toLowerCase();

        // Check for keywords and respond accordingly
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            addBotMessage("Hello! How can I help you today?");
            showOptions([
                "Tell me about your services",
                "What programs do you offer?",
                "How can I book an appointment?",
                "Request pricing information"
            ]);
        }
        else if (message.includes('services') || message.includes('what do you offer')) {
            addBotMessage("At Desert Sports Med, we offer a variety of sports medicine and rehabilitation services including:");
            addBotMessage("• Sports Injury Assessment and Treatment<br>• Physical Therapy and Rehabilitation<br>• Performance Enhancement<br>• Injury Prevention Programs<br>• Manual Therapy<br>• Sports Massage");
            showOptions([
                "Tell me more about physical therapy",
                "What about performance enhancement?",
                "How can I book a service?",
                "Request pricing information"
            ]);
        }
        else if (message.includes('physical therapy') || message.includes('rehab') || message.includes('rehabilitation')) {
            addBotMessage("Our physical therapy and rehabilitation services are designed to help you recover from injuries, surgeries, or chronic conditions. Our expert therapists create personalized treatment plans that may include:");
            addBotMessage("• Manual therapy techniques<br>• Therapeutic exercises<br>• Functional movement training<br>• Pain management strategies<br>• Progressive return-to-sport protocols");
            showOptions([
                "How long does rehabilitation take?",
                "Do I need a referral?",
                "Book a physical therapy session"
            ]);
        }
        else if (message.includes('performance') || message.includes('enhancement')) {
            addBotMessage("Our performance enhancement programs are designed to help athletes of all levels reach their full potential. These programs include:");
            addBotMessage("• Biomechanical analysis<br>• Sport-specific training<br>• Strength and conditioning<br>• Movement efficiency optimization<br>• Recovery strategies");
            showOptions([
                "Is this for professional athletes only?",
                "How do I get started?",
                "Request pricing information"
            ]);
        }
        else if (message.includes('programs')) {
            addBotMessage("Desert Sports Med offers several specialized programs:");
            addBotMessage("• Return to Sport Program - For athletes recovering from injuries<br>• Performance Optimization - For athletes looking to improve their performance<br>• Injury Prevention - Proactive approach to prevent common sports injuries<br>• Recovery & Wellness - Comprehensive recovery strategies");
            showOptions([
                "Tell me about Return to Sport",
                "What's included in Performance Optimization?",
                "How does Injury Prevention work?",
                "Book a program consultation"
            ]);
        }
        else if (message.includes('return to sport')) {
            addBotMessage("Our Return to Sport Program is designed for athletes recovering from injuries who want to safely return to their sport. The program includes:");
            addBotMessage("• Comprehensive assessment of your injury and movement patterns<br>• Personalized rehabilitation plan<br>• Sport-specific training and conditioning<br>• Gradual progression to full sport participation<br>• Ongoing monitoring and adjustments");
            showOptions([
                "How long does it take?",
                "Book a Return to Sport consultation",
                "Request pricing information"
            ]);
        }
        else if (message.includes('book') || message.includes('appointment') || message.includes('schedule')) {
            addBotMessage("You can book an appointment in several ways:");
            addBotMessage("• Visit our <a href='book-online.html'>Book Online</a> page<br>• Call us at (801) 797-4043<br>• Email us at desertsportsmed@gmail.com");
            addBotMessage("Would you like me to help you schedule a specific service?");
            showOptions([
                "Book a physical therapy session",
                "Book a performance assessment",
                "Book a free consultation"
            ]);
        }
        else if (message.includes('price') || message.includes('cost') || message.includes('fee')) {
            addBotMessage("Our pricing varies depending on the service and program. Here's a general overview:");
            addBotMessage("• Initial Assessment: $120<br>• Physical Therapy Session: $90-$120<br>• Performance Enhancement Session: $100-$150<br>• Package Deals: Save 10-20% when purchasing multiple sessions");
            addBotMessage("For detailed pricing information, please contact us directly and we'll provide you with a personalized quote based on your specific needs.");
            showOptions([
                "Do you accept insurance?",
                "Are there package discounts?",
                "Book a free consultation"
            ]);
        }
        else if (message.includes('insurance')) {
            addBotMessage("We work with most major insurance providers. However, coverage varies depending on your specific plan and the services you need.");
            addBotMessage("We recommend contacting your insurance provider to verify coverage for physical therapy and sports medicine services. We're also happy to help you understand your benefits - just give us a call at (801) 797-4043.");
            showOptions([
                "Book a free consultation",
                "What if I don't have insurance?",
                "Contact you directly"
            ]);
        }
        else if (message.includes('location') || message.includes('address') || message.includes('where')) {
            addBotMessage("Desert Sports Med is located in St. George, Utah at:");
            addBotMessage("123 Sports Medicine Way<br>St. George, UT 84770");
            addBotMessage("We're conveniently located near the center of town with plenty of parking available.");
            showOptions([
                "What are your hours?",
                "How do I get there?",
                "Book an appointment"
            ]);
        }
        else if (message.includes('hours') || message.includes('when are you open')) {
            addBotMessage("Our hours of operation are:");
            addBotMessage("Monday - Friday: 7:00 AM - 7:00 PM<br>Saturday: 8:00 AM - 2:00 PM<br>Sunday: Closed");
            addBotMessage("We offer early morning and evening appointments to accommodate busy schedules.");
            showOptions([
                "Book an appointment",
                "Contact you directly"
            ]);
        }
        else if (message.includes('contact') || message.includes('talk to someone') || message.includes('speak')) {
            addBotMessage("You can contact our team directly through:");
            addBotMessage("• Phone: (801) 797-4043<br>• Email: desertsportsmed@gmail.com<br>• Visit our <a href='contact.html'>Contact</a> page to send us a message");
            addBotMessage("We typically respond to all inquiries within 24 hours during business days.");
            showOptions([
                "I have another question",
                "Book an appointment"
            ]);
        }
        else if (message.includes('thank')) {
            addBotMessage("You're welcome! Is there anything else I can help you with today?");
            showOptions([
                "Yes, I have another question",
                "No, that's all for now"
            ]);
        }
        else if (message.includes('no, that') || message.includes("that's all")) {
            addBotMessage("Great! Feel free to come back if you have any other questions. Have a wonderful day!");
        }
        else {
            addBotMessage("I'm not sure I understand. Could you please choose from one of these options or rephrase your question?");
            showOptions([
                "Services information",
                "Programs information",
                "Booking and appointments",
                "Pricing information",
                "Contact information"
            ]);
        }
    }
}
