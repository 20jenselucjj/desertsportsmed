const PerformanceTherapySchedule = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              1:1 Performance Therapy <span className="dsm-gradient-text">Schedule</span>
            </h1>
            <p className="text-xl text-gray-600">
              Book your one-on-one performance therapy sessions with our expert therapists.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Embedded Scheduling Widget */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
              <h2 className="text-2xl font-bold mb-6 text-center">Select a Date & Time</h2>
              
              {/* This is a placeholder for your actual scheduling widget */}
              <div className="border-2 border-gray-200 rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-4">
                  Your scheduling widget would be embedded here. This could be from systems like Calendly, Acuity, or your preferred booking software.
                </p>
                <p className="text-gray-600">
                  For now, please call us at (801) 897-4043 to schedule your appointment.
                </p>
              </div>
            </div>

            {/* Session Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4">Session Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-dsm-orange mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span><strong>Duration:</strong> 60 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-dsm-orange mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span><strong>What's Included:</strong> Assessment, manual therapy, and personalized exercise prescription</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-dsm-orange mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Please contact us for pricing information</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4">Preparation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-dsm-orange mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    <span>Please bring any relevant medical records or imaging reports</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-dsm-orange mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <span>Wear comfortable clothing that allows for movement and access to the area of concern</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-dsm-orange mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Please arrive 10 minutes early to complete any necessary paperwork</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Cancellation Policy</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-4">
                We understand that situations arise that may require you to cancel or reschedule your appointment. We respectfully request at least 24 hours notice for any cancellations or changes to your scheduled appointment.
              </p>
              <p className="text-gray-600 mb-4">
                Appointments cancelled with less than 24 hours notice may be subject to a cancellation fee of 50% of the scheduled service price.
              </p>
              <p className="text-gray-600">
                If you have any questions about our cancellation policy, please contact us at (801) 897-4043.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">First Time Client?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            If this is your first time with us, we recommend starting with a free intro session to discuss your needs and goals.
          </p>
          <a
            href="/free-intro"
            className="dsm-gradient-btn inline-block px-8 py-3 rounded-full font-bold text-white text-lg"
          >
            Book Free Intro
          </a>
        </div>
      </section>
    </div>
  );
};

export default PerformanceTherapySchedule;
