import { useState, useEffect } from 'react';
import { sendPricingRequest } from '../utils/emailService';

const Pricing = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    interest: '',
    agreeTerms: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      const result = await sendPricingRequest(formData);

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
              <span className="dsm-gradient-text">Pricing</span> Request
            </h1>
            <p className="text-xl text-gray-600">
              Please let us know where to send the pricing info.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 text-center border-b border-gray-200">
              <img src="/images/dsm-logo.png" alt="Desert Sports Med Logo" className="h-24 mx-auto mb-6" />
              {submitted ? (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-dsm-orange mb-4">Thank You!</h2>
                  <p className="text-gray-600 mb-6">
                    We've received your request and will send pricing information to your email shortly.
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
                      <option value="Semi-Private Training">Semi-Private Training</option>
                      <option value="Both">Both</option>
                    </select>
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
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            If you'd like to speak with someone directly about our pricing options, please call us at (801) 897-4043.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/free-intro"
              className="dsm-gradient-btn inline-block px-8 py-3 rounded-full font-bold text-white text-lg"
            >
              Book Free Intro
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
