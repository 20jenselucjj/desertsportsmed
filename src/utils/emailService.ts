import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
// You'll need to replace this with your actual EmailJS user ID when you sign up
const initEmailJS = () => {
  // Using a public key for initialization - you should replace this with your actual EmailJS user ID
  emailjs.init('YOUR_USER_ID'); // Replace with your actual EmailJS user ID when you sign up for EmailJS
};

// Function to send pricing request emails
export const sendPricingRequest = async (formData: any) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_PRICING_TEMPLATE_ID', // Replace with your template ID for pricing requests
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        interest: formData.interest,
        to_email: 'desertsportsmed@gmail.com', // Your business email
      }
    );

    return { success: true, response };
  } catch (error) {
    console.error('Error sending pricing request:', error);
    return { success: false, error };
  }
};

// Function to send free intro booking emails
export const sendFreeIntroRequest = async (formData: any) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_FREE_INTRO_TEMPLATE_ID', // Replace with your template ID for free intro requests
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        interest: formData.interest,
        goals: formData.goals,
        to_email: 'desertsportsmed@gmail.com', // Your business email
      }
    );

    return { success: true, response };
  } catch (error) {
    console.error('Error sending free intro request:', error);
    return { success: false, error };
  }
};

// Function to send chatbot inquiries
export const sendChatbotInquiry = async (formData: any) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_CHATBOT_TEMPLATE_ID', // Replace with your template ID for chatbot inquiries
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'desertsportsmed@gmail.com', // Your business email
      }
    );

    return { success: true, response };
  } catch (error) {
    console.error('Error sending chatbot inquiry:', error);
    return { success: false, error };
  }
};

export default initEmailJS;
