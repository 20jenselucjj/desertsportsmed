import ContactComponent from '../components/Contact';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="dsm-gradient-text">Us</span>
            </h1>
            <p className="text-xl text-gray-600">
              Have questions or ready to schedule an appointment? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactComponent />
    </div>
  );
};

export default Contact;
