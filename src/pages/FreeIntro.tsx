import { useState, useEffect } from 'react';
import { sendFreeIntroRequest } from '../utils/emailService';

const FreeIntro = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    interest: '',
    goals: '',
    agreeTerms: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Send the form data using EmailJS
      const result = await sendFreeIntroRequest(formData);

      if (result.success) {
        console.log('Form submitted successfully:', result.response);
        setSubmitted(true);
      } else {
        setSubmitError('There was an error sending your request. Please try again or contact us directly.');
        console.error('Form submission error:', result.error);
      }
    } catch (error) {
      setSubmitError('There was an error sending your request. Please try again or contact us directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your <span className="dsm-gradient-text">Free Intro</span>
            </h1>
            <p className="text-xl text-gray-600">
              Take the first step towards achieving your health and fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 text-center border-b border-gray-200">
              <img src="/images/dsm-logo.png" alt="Desert Sports Med Logo" className="h-24 mx-auto mb-6" />
              {submitted ? (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-dsm-orange mb-4">Thank You!</h2>
                  <p className="text-gray-600 mb-6">
                    We've received your request for a free intro session. One of our team members will contact you shortly to schedule your appointment.
                  </p>
                  <p className="text-gray-600">
                    If you have any questions, please don't hesitate to contact us at (801) 897-4043.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dsm-orange"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dsm-orange"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dsm-orange"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dsm-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-gray-700 font-medium mb-2">
                      I'm interested in:*
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dsm-orange"
                    >
                      <option value="">Select an option</option>
                      <option value="Performance Therapy">Performance Therapy</option>
                      <option value="Sports Performance">Sports Performance</option>
                      <option value="Semi-Private Training">Semi-Private Training</option>
                      <option value="Online Training">Online Training</option>
                      <option value="Not Sure">Not Sure - Need Guidance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-gray-700 font-medium mb-2">
                      What are your main goals?
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dsm-orange"
                      placeholder="Tell us about your fitness goals, any injuries or concerns, or what you hope to achieve..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="agreeTerms" className="text-gray-600 text-sm">
                      I agree to terms & conditions provided by Desert Sports Med. By providing my phone number,
                      I agree to receive text messages from the business.
                    </label>
                  </div>

                  {submitError && (
                    <div className="text-red-500 text-center mb-4">
                      {submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="dsm-gradient-btn w-full px-6 py-3 rounded-full font-bold text-white text-center disabled:opacity-70"
                  >
                    {isSubmitting ? 'Submitting...' : 'Book My Free Intro'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Initial Consultation</h3>
              <p className="text-gray-600">
                We'll start with a conversation about your goals, health history, and any concerns you may have. This helps us understand your unique needs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Movement Assessment</h3>
              <p className="text-gray-600">
                Our expert coaches will conduct a brief assessment to identify any movement limitations or areas that need attention.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Personalized Recommendations</h3>
              <p className="text-gray-600">
                Based on your goals and assessment, we'll recommend the best program to help you achieve optimal results and answer any questions you have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">James Wilson</h4>
                  <p className="text-gray-600">Client for 1 year</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "My free intro session was the turning point in my fitness journey. The team took the time to understand my goals and limitations, and created a program that was perfect for me. I've seen incredible results in just a few months."
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Emily Rodriguez</h4>
                  <p className="text-gray-600">Client for 6 months</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I was hesitant to try yet another fitness program, but the free intro convinced me that Desert Sports Med was different. The personalized approach and expert guidance have helped me overcome chronic pain and get back to the activities I love."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-4">
            If you have any questions about our free intro session or services, please contact us directly.
          </p>
          <p className="text-xl font-bold text-dsm-orange mb-8">
            (801) 897-4043
          </p>
          <p className="text-lg text-gray-600">
            Email: <a href="mailto:desertsportsmed@gmail.com" className="text-dsm-orange hover:underline">desertsportsmed@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FreeIntro;
