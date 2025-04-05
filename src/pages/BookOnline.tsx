const BookOnline = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book <span className="dsm-gradient-text">Online</span>
            </h1>
            <p className="text-xl text-gray-600">
              Schedule your sports medicine and rehabilitation appointments quickly and easily. Our online booking system allows you to find the perfect time for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Performance Therapy Booking */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Performance Therapy"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">1:1 Performance Therapy Schedule</h3>
                <p className="text-gray-600 mb-4">
                  Book your one-on-one performance therapy sessions with our expert therapists. Our specialized manual therapy techniques address movement dysfunctions, reduce pain, and accelerate recovery from sports injuries, chronic pain, and post-surgical rehabilitation.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>What to expect:</strong> Each session includes assessment, hands-on treatment, and personalized exercise prescription. Please wear comfortable clothing that allows for movement assessment and bring any relevant medical records or imaging reports.
                </p>
                <a
                  href="/book-online/performance-therapy"
                  className="dsm-gradient-btn inline-block px-6 py-2 rounded-full font-bold text-white"
                >
                  View Schedule
                </a>
              </div>
            </div>

            {/* Training Schedule Booking */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                alt="Training Schedule"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Training Schedule</h3>
                <p className="text-gray-600 mb-4">
                  View and book our sports performance, semi-private, and small group training sessions. Our evidence-based training programs focus on movement quality, strength development, power production, and sport-specific conditioning to help you perform at your highest level.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>What to expect:</strong> Come dressed in athletic clothing and appropriate footwear. Bring a water bottle and any specific equipment you normally use (braces, lifting belts, etc.). New clients will undergo movement screening and baseline testing before starting their program.
                </p>
                <a
                  href="/book-online/training"
                  className="dsm-gradient-btn inline-block px-6 py-2 rounded-full font-bold text-white"
                >
                  View Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Time Clients */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">First Time Client?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            If this is your first time with us, we recommend starting with a free intro session. During this complimentary consultation, we'll discuss your health history, assess your movement patterns, and identify the most appropriate program for your specific needs and goals.
          </p>
          <a
            href="/free-intro"
            className="dsm-gradient-btn inline-block px-8 py-3 rounded-full font-bold text-white text-lg"
          >
            Book Free Intro
          </a>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Booking?</h2>
          <p className="text-xl text-gray-600 mb-4">
            If you need assistance with scheduling or have questions about our services, please contact us directly.
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

export default BookOnline;
