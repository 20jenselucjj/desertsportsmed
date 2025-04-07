// Desert Sports Med - Chatbot JavaScript

// Check if the chatbot has already been initialized to prevent duplicate initialization
if (typeof window.chatbotInitialized === 'undefined') {
    window.chatbotInitialized = true;

    document.addEventListener('DOMContentLoaded', function() {
        initChatbot();

        // Show welcome popup after 1.5 seconds (reduced from 3 seconds)
        setTimeout(function() {
            showWelcomePopup();
        }, 1500);
    });
}

// Chatbot knowledge base - trained on website content
// Use window object to prevent redeclaration
window.knowledgeBase = window.knowledgeBase || {
    // Services information
    services: {
        general: "At Desert Sports Med, we offer a variety of sports medicine and rehabilitation services including Sports Injury Assessment and Treatment, Physical Therapy and Rehabilitation, Performance Enhancement, Injury Prevention Programs, Manual Therapy, and Sports Massage.",
        performanceTherapy: "Performance Therapy is a specialized approach that combines various manual therapy techniques, movement assessments, and corrective exercises to enhance physical performance and accelerate recovery. Unlike traditional physical therapy that focuses primarily on rehabilitation, Performance Therapy aims to optimize function and prevent injuries before they occur.",
        physicalTherapy: "Our physical therapy and rehabilitation services are designed to help you recover from injuries, surgeries, or chronic conditions. Our expert therapists create personalized treatment plans that may include manual therapy techniques, therapeutic exercises, functional movement training, pain management strategies, and progressive return-to-sport protocols.",
        injuryRehabilitation: "Our comprehensive rehabilitation programs help you recover from injuries and return to your sport stronger than before. We create personalized recovery plans based on your specific injury, sport, and goals.",
        performanceEnhancement: "Our performance enhancement programs are designed to help athletes of all levels reach their full potential. These programs include biomechanical analysis, sport-specific training, strength and conditioning, movement efficiency optimization, and recovery strategies."
    },

    // Programs information
    programs: {
        general: "Desert Sports Med offers several specialized programs including Return to Sport Program (for athletes recovering from injuries), Performance Optimization (for athletes looking to improve their performance), Injury Prevention (proactive approach to prevent common sports injuries), and Recovery & Wellness (comprehensive recovery strategies).",
        returnToSport: "Our Return to Sport Program is designed for athletes recovering from injuries who want to safely return to their sport. The program includes comprehensive assessment of your injury and movement patterns, personalized rehabilitation plan, sport-specific training and conditioning, gradual progression to full sport participation, and ongoing monitoring and adjustments.",
        performanceOptimization: "Our Performance Optimization program is tailored to your specific sport, position, and individual needs. We analyze your movement patterns, identify areas for improvement, and develop a personalized training plan to help you achieve your performance goals.",
        injuryPrevention: "Our Injury Prevention program uses a proactive approach to identify and address potential issues before they lead to injuries. We conduct thorough assessments to identify risk factors and create personalized prevention strategies.",
        assessment: "We begin with a comprehensive assessment of your movement patterns, strength, power, speed, agility, and sport-specific skills to identify areas for improvement and establish baseline measurements."
    },

    // Contact and location information
    contact: {
        phone: "(801) 797-4043",
        email: "desertsportsmed@gmail.com",
        address: "St. George, UT 84770",
        hours: "Monday - Friday: 7:00 AM - 7:00 PM\nSaturday: 8:00 AM - 2:00 PM\nSunday: Closed"
    },

    // Booking information
    booking: {
        methods: "You can book an appointment in several ways: Visit our <a href='book-online.html' target='_blank'>Book Online</a> page, call us at (801) 797-4043, or email us at <a href='mailto:desertsportsmed@gmail.com'>desertsportsmed@gmail.com</a>.",
        online: "Our online booking system allows you to schedule appointments for various services including Initial Evaluation, Therapy Sessions, and Virtual Sessions.",
        freeIntro: "Start with a <a href='free-intro.html' target='_blank'>Free Intro</a> session to discuss your needs and see if we're a good fit for you. This is a quick strategy call to understand your goals and how we can help."
    },

    // Pricing information
    pricing: {
        general: "Our pricing varies depending on the service and program. For detailed pricing information, please contact us directly and we'll provide you with a personalized quote based on your specific needs.",
        insurance: "We work with most major insurance providers. However, coverage varies depending on your specific plan and the services you need. We recommend contacting your insurance provider to verify coverage for physical therapy and sports medicine services."
    },

    // About information
    about: {
        company: "Desert Sports Med was founded in 2015 with a simple mission: to provide the highest quality sports medicine and rehabilitation services to athletes and active individuals in St. George, Utah. What began as a small practice has grown into a comprehensive sports medicine center, offering a wide range of services from injury assessment and treatment to performance enhancement and preventive care.",
        approach: "Our approach combines evidence-based treatments with personalized care, ensuring that each client receives the attention and expertise they need to achieve their health and performance goals."
    }
};

// Function to type text with animation
function typeText(element, text, cursor, index, speed) {
    if (index < text.length) {
        // Handle HTML tags (like <strong>)
        if (text[index] === '<') {
            // Find the closing bracket
            const closingIndex = text.indexOf('>', index);
            if (closingIndex !== -1) {
                // Add the entire tag at once
                const tag = text.substring(index, closingIndex + 1);
                element.innerHTML = element.innerHTML.replace(cursor.outerHTML, '') + tag;
                element.appendChild(cursor);
                // Continue typing after the tag
                setTimeout(() => {
                    typeText(element, text, cursor, closingIndex + 1, speed);
                }, 0);
                return;
            }
        }

        // Handle closing tags
        if (text[index] === '<' && text[index + 1] === '/') {
            // Find the closing bracket
            const closingIndex = text.indexOf('>', index);
            if (closingIndex !== -1) {
                // Add the entire closing tag at once
                const tag = text.substring(index, closingIndex + 1);
                element.innerHTML = element.innerHTML.replace(cursor.outerHTML, '') + tag;
                element.appendChild(cursor);
                // Continue typing after the tag
                setTimeout(() => {
                    typeText(element, text, cursor, closingIndex + 1, speed);
                }, 0);
                return;
            }
        }

        // Regular character
        element.innerHTML = element.innerHTML.replace(cursor.outerHTML, '') + text[index];
        element.appendChild(cursor);

        // Random typing speed variation for realistic effect
        const randomSpeed = speed + Math.random() * 50 - 25;

        setTimeout(() => {
            typeText(element, text, cursor, index + 1, speed);
        }, randomSpeed);
    }
}

// Function to show welcome bubble
function showWelcomePopup() {
    // Clear any existing welcome bubble flag to ensure it shows up
    sessionStorage.removeItem('welcomeBubbleShown');

    // For testing purposes, always show the welcome bubble
    // In production, you can uncomment the check below
    /*
    // Check if user has already seen the bubble (using sessionStorage to show once per session)
    if (sessionStorage.getItem('welcomeBubbleShown')) {
        return;
    }
    */

    // Create welcome bubble elements
    const welcomeBubble = document.createElement('div');
    welcomeBubble.className = 'welcome-bubble';
    welcomeBubble.innerHTML = `
        <div class="welcome-bubble-icon"><i class="fas fa-comment-dots"></i></div>
        <div class="welcome-bubble-content"></div>
        <button class="welcome-bubble-close"><i class="fas fa-times"></i></button>
    `;

    // Text to type - define it here so it's available in the entire function scope
    const textToType = '<strong>Hi there!</strong> Have a question about our services?';

    // Calculate approximate typing time (average 50ms per character plus buffer)
    const typingTime = textToType.length * 50 + 1000;

    // Add bubble to body
    document.body.appendChild(welcomeBubble);

    // Show bubble with animation
    setTimeout(() => {
        welcomeBubble.classList.add('active');

        // Get the content element for typing animation
        const contentElement = welcomeBubble.querySelector('.welcome-bubble-content');

        // Add typing cursor
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        contentElement.appendChild(cursor);

        // Start typing animation after bubble appears
        setTimeout(() => {
            typeText(contentElement, textToType, cursor, 0, 50);
        }, 300);
    }, 100);

    // Auto-hide bubble after typing is complete plus 10 seconds for reading
    setTimeout(() => {
        if (welcomeBubble.parentNode) {
            welcomeBubble.classList.remove('active');
            setTimeout(() => {
                if (welcomeBubble.parentNode) {
                    welcomeBubble.remove();
                }
            }, 300);
        }
    }, typingTime + 10000);

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
                "Request pricing information",
                "Book a Free Intro"
            ]);
        }
        else if (message.includes('services') || message.includes('what do you offer')) {
            addBotMessage(window.knowledgeBase.services.general);
            addBotMessage("• <a href='performance-therapy.html'>Performance Therapy</a><br>• <a href='sports-performance.html'>Physical Therapy and Rehabilitation</a><br>• <a href='sports-performance.html'>Performance Enhancement</a><br>• <a href='performance-therapy.html'>Injury Prevention Programs</a><br>• Manual Therapy<br>• Sports Massage");
            showOptions([
                "Tell me about Performance Therapy",
                "Tell me about Physical Therapy",
                "What about Injury Rehabilitation?",
                "What about Performance Enhancement?",
                "How can I book a service?"
            ]);
        }
        else if (message.includes('performance therapy')) {
            addBotMessage(window.knowledgeBase.services.performanceTherapy);
            showOptions([
                "How is this different from regular PT?",
                "Book a Performance Therapy session",
                "Request pricing information"
            ]);
        }
        else if (message.includes('physical therapy') || message.includes('rehab') || message.includes('rehabilitation')) {
            addBotMessage(window.knowledgeBase.services.physicalTherapy);
            showOptions([
                "How long does rehabilitation take?",
                "Do I need a referral?",
                "Book a physical therapy session",
                "Request pricing information"
            ]);
        }
        else if (message.includes('injury rehabilitation')) {
            addBotMessage(window.knowledgeBase.services.injuryRehabilitation);
            showOptions([
                "Tell me about your Return to Sport program",
                "Book an injury assessment",
                "Request pricing information"
            ]);
        }
        else if (message.includes('performance') || message.includes('enhancement')) {
            addBotMessage(window.knowledgeBase.services.performanceEnhancement);
            showOptions([
                "Is this for professional athletes only?",
                "How do I get started?",
                "Book a performance assessment",
                "Request pricing information"
            ]);
        }
        else if (message.includes('programs')) {
            addBotMessage(window.knowledgeBase.programs.general);
            addBotMessage("You can learn more about our programs in the Programs dropdown menu on our website.");
            showOptions([
                "Tell me about Return to Sport",
                "What's included in Performance Optimization?",
                "How does Injury Prevention work?",
                "Book a program consultation"
            ]);
        }
        else if (message.includes('return to sport')) {
            addBotMessage(window.knowledgeBase.programs.returnToSport);
            showOptions([
                "How long does it take?",
                "Book a Return to Sport consultation",
                "Request pricing information"
            ]);
        }
        else if (message.includes('performance optimization')) {
            addBotMessage(window.knowledgeBase.programs.performanceOptimization);
            showOptions([
                "What sports do you work with?",
                "Book a performance assessment",
                "Request pricing information"
            ]);
        }
        else if (message.includes('injury prevention')) {
            addBotMessage(window.knowledgeBase.programs.injuryPrevention);
            showOptions([
                "Is this covered by insurance?",
                "Book an injury prevention assessment",
                "Request pricing information"
            ]);
        }
        else if (message.includes('book') || message.includes('appointment') || message.includes('schedule') || message.includes('free intro')) {
            addBotMessage(window.knowledgeBase.booking.methods);
            addBotMessage("Would you like me to help you book a specific service?");
            showOptions([
                "Book a Free Intro",
                "Book an Initial Evaluation",
                "Book a Therapy session",
                "Book a Virtual session",
                "View all booking options"
            ]);
        }
        else if (message.includes('view all booking') || message.includes('booking options')) {
            addBotMessage("You can view all our booking options and schedule directly on our booking page:");
            addBotMessage("<a href='book-online.html' target='_blank'>Click here to open our booking page</a>");
            addBotMessage("Or I can help you book a specific type of appointment right here.");
            showOptions([
                "Book a Free Intro",
                "Book an Initial Evaluation",
                "Book a Therapy session",
                "Book a Virtual session"
            ]);
        }
        else if (message.includes('book a free intro') || message.includes('free intro') || message.includes('strategy call')) {
            addBotMessage(window.knowledgeBase.booking.freeIntro);
            addBotMessage("<a href='free-intro.html' target='_blank'>Click here to book your Free Intro session</a>");
            showOptions([
                "What happens during the Free Intro?",
                "I have more questions"
            ]);
        }
        else if (message.includes('book an initial evaluation') || message.includes('initial evaluation') || message.includes('first appointment')) {
            addBotMessage("An Initial Evaluation is the best way to start if you're new to Desert Sports Med. Our specialist will conduct a comprehensive assessment of your condition and create a personalized treatment plan.");
            addBotMessage("<a href='book-online.html' target='_blank'>Click here to book an Initial Evaluation</a>");
            addBotMessage("Or if you prefer, I can help you contact us directly to book.");
            showOptions([
                "Book a Free Intro",
                "I have more questions"
            ]);
        }
        else if (message.includes('book a therapy') || message.includes('therapy session')) {
            addBotMessage("We offer different types of therapy sessions depending on your needs:");
            addBotMessage("• 60-minute Therapy Session<br>• 30-minute Therapy Session<br>• Corrective Movement Coaching");
            addBotMessage("<a href='book-online.html' target='_blank'>Click here to book a Therapy session</a>");
            showOptions([
                "What's the difference between these options?",
                "Book a Free Intro",
                "Request pricing information"
            ]);
        }
        else if (message.includes('book a virtual') || message.includes('virtual session')) {
            addBotMessage("Our Virtual Sessions allow you to receive expert guidance from anywhere. We offer:");
            addBotMessage("• Assessment & Program Design (60 min)<br>• Follow-up Session (30 min)");
            addBotMessage("<a href='book-online.html' target='_blank'>Click here to book a Virtual session</a>");
            showOptions([
                "How do virtual sessions work?",
                "Request pricing information"
            ]);
        }
        else if (message.includes('price') || message.includes('cost') || message.includes('fee') || message.includes('request pricing')) {
            showPricingRequestForm();
        }
        else if (message.includes('insurance')) {
            addBotMessage(window.knowledgeBase.pricing.insurance);
            showOptions([
                "Book a free consultation",
                "What if I don't have insurance?",
                "Book a Free Intro"
            ]);
        }
        else if (message.includes('location') || message.includes('address') || message.includes('where')) {
            addBotMessage("Desert Sports Med is located in:");
            addBotMessage(`<a href="https://maps.google.com/?q=${encodeURIComponent(window.knowledgeBase.contact.address)}" target="_blank">${window.knowledgeBase.contact.address}</a>`);
            addBotMessage("We're conveniently located in St. George with plenty of parking available. You can find more information on our <a href='free-intro.html' target='_blank'>Free Intro page</a>.");
            showOptions([
                "What are your hours?",
                "How do I get there?",
                "Book a Free Intro"
            ]);
        }
        else if (message.includes('hours') || message.includes('when are you open')) {
            addBotMessage("Our hours of operation are:");
            addBotMessage(window.knowledgeBase.contact.hours.replace(/\n/g, '<br>'));
            addBotMessage("We offer early morning and evening appointments to accommodate busy schedules.");
            showOptions([
                "Book an appointment",
                "Book a Free Intro"
            ]);
        }
        else if (message.includes('contact') || message.includes('talk to someone') || message.includes('speak') || message.includes('contact you directly')) {
            addBotMessage("You can visit our <a href='free-intro.html' target='_blank'>Free Intro page</a> to book a free intro session, or use this quick form:");
            showContactForm();
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
                "Request pricing information",
                "Contact information"
            ]);
        }
    }

    // Function to show pricing request form
    function showPricingRequestForm() {
        addBotMessage("I'd be happy to help you request detailed pricing information. Please fill out this quick form:");

        const formHTML = `
        <div class="chatbot-form">
            <h4>Pricing Request Form</h4>
            <div class="chatbot-form-field">
                <label for="pricing-name">Your Name</label>
                <input type="text" id="pricing-name" placeholder="Full Name">
            </div>
            <div class="chatbot-form-field">
                <label for="pricing-email">Email Address</label>
                <input type="email" id="pricing-email" placeholder="email@example.com">
            </div>
            <div class="chatbot-form-field">
                <label for="pricing-phone">Phone Number</label>
                <input type="tel" id="pricing-phone" placeholder="(123) 456-7890">
            </div>
            <div class="chatbot-form-field">
                <label>Services of Interest (select all that apply)</label>
                <div>
                    <input type="checkbox" id="pricing-pt" value="Physical Therapy">
                    <label for="pricing-pt" style="display:inline;">Physical Therapy</label>
                </div>
                <div>
                    <input type="checkbox" id="pricing-performance" value="Performance Enhancement">
                    <label for="pricing-performance" style="display:inline;">Performance Enhancement</label>
                </div>
                <div>
                    <input type="checkbox" id="pricing-virtual" value="Virtual Sessions">
                    <label for="pricing-virtual" style="display:inline;">Virtual Sessions</label>
                </div>
            </div>
            <button class="chatbot-form-submit" id="pricing-submit">Request Pricing</button>
        </div>
        `;

        const messageElement = document.createElement('div');
        messageElement.className = 'message bot';
        messageElement.innerHTML = `<div class="message-content">${formHTML}</div>`;
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();

        // Add event listener to the submit button
        document.getElementById('pricing-submit').addEventListener('click', function() {
            const name = document.getElementById('pricing-name').value.trim();
            const email = document.getElementById('pricing-email').value.trim();
            const phone = document.getElementById('pricing-phone').value.trim();

            // Validate form
            if (!name || !email || !phone) {
                alert('Please fill out all required fields.');
                return;
            }

            // Get selected services
            const services = [];
            if (document.getElementById('pricing-pt').checked) services.push('Physical Therapy');
            if (document.getElementById('pricing-performance').checked) services.push('Performance Enhancement');
            if (document.getElementById('pricing-virtual').checked) services.push('Virtual Sessions');

            // Process form submission
            addUserMessage(`Requested pricing information for: ${services.join(', ')}`);
            addBotMessage("Thank you for your request! We'll send detailed pricing information to you shortly. A member of our team will contact you within 24 business hours.");
            showOptions([
                "I have another question",
                "Book an appointment"
            ]);
        });
    }

    // Function to show contact form
    function showContactForm() {
        addBotMessage("You can contact our team directly through:");
        addBotMessage(`• Phone: <a href="tel:${window.knowledgeBase.contact.phone}">${window.knowledgeBase.contact.phone}</a><br>• Email: <a href="mailto:${window.knowledgeBase.contact.email}">${window.knowledgeBase.contact.email}</a><br>• Or fill out this quick form and we'll get back to you:`);

        const formHTML = `
        <div class="chatbot-form">
            <h4>Contact Form</h4>
            <div class="chatbot-form-field">
                <label for="contact-name">Your Name</label>
                <input type="text" id="contact-name" placeholder="Full Name">
            </div>
            <div class="chatbot-form-field">
                <label for="contact-email">Email Address</label>
                <input type="email" id="contact-email" placeholder="email@example.com">
            </div>
            <div class="chatbot-form-field">
                <label for="contact-phone">Phone Number</label>
                <input type="tel" id="contact-phone" placeholder="(123) 456-7890">
            </div>
            <div class="chatbot-form-field">
                <label for="contact-message">Message</label>
                <textarea id="contact-message" rows="3" placeholder="How can we help you?"></textarea>
            </div>
            <button class="chatbot-form-submit" id="contact-submit">Send Message</button>
        </div>
        `;

        const messageElement = document.createElement('div');
        messageElement.className = 'message bot';
        messageElement.innerHTML = `<div class="message-content">${formHTML}</div>`;
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();

        // Add event listener to the submit button
        document.getElementById('contact-submit').addEventListener('click', function() {
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const phone = document.getElementById('contact-phone').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            // Validate form
            if (!name || !email || !phone || !message) {
                alert('Please fill out all required fields.');
                return;
            }

            // Process form submission
            addUserMessage("Sent contact request");
            addBotMessage("Thank you for reaching out! Your message has been sent to our team. We'll get back to you within 24 business hours.");
            showOptions([
                "I have another question",
                "Book an appointment"
            ]);
        });
    }
}
