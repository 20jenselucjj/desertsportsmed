const OnlineTraining = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Online Training
            </h1>
            <p className="text-xl text-gray-600">
              Expert coaching and personalized programs, delivered virtually.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img
                src="https://images.unsplash.com/photo-1593476123561-9516f2097158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Online Training"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Train Anywhere, Anytime</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Online Training program brings the expertise of Desert Sports Med coaches directly to you, no matter where you are. Whether you're traveling, prefer to work out at home, or simply want the flexibility to train on your own schedule, our online coaching provides the guidance and support you need to achieve your goals.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Each program is completely personalized to your specific goals, equipment availability, and schedule, ensuring you get the most effective workouts possible in your unique circumstances.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <h2 className="text-3xl font-bold mb-10 text-center">How Online Training Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-dsm-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">
                Begin with a video consultation to discuss your goals, training history, and available equipment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-dsm-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Movement Assessment</h3>
              <p className="text-gray-600">
                Complete a guided virtual movement assessment to identify strengths, weaknesses, and potential limitations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-dsm-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Custom Program</h3>
              <p className="text-gray-600">
                Receive a personalized training program delivered through our easy-to-use mobile app.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-dsm-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Enjoy regular check-ins, form feedback, and program adjustments to ensure continued progress.
              </p>
            </div>
          </div>

          {/* Features */}
          <h2 className="text-3xl font-bold mb-10 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Personalized Programming</h3>
              <p className="text-gray-600">
                Custom-designed workouts based on your goals, available equipment, and schedule, delivered weekly through our mobile app.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Video Exercise Library</h3>
              <p className="text-gray-600">
                Access to a comprehensive library of exercise demonstrations to ensure proper form and technique.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Form Feedback</h3>
              <p className="text-gray-600">
                Submit videos of your exercises for professional feedback and technique corrections from your coach.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">04</div>
              <h3 className="text-xl font-bold mb-4">Nutrition Guidance</h3>
              <p className="text-gray-600">
                Basic nutrition recommendations to complement your training program and support your goals.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">05</div>
              <h3 className="text-xl font-bold mb-4">Progress Tracking</h3>
              <p className="text-gray-600">
                Track your workouts, measurements, and progress photos all in one place to visualize your improvements over time.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">06</div>
              <h3 className="text-xl font-bold mb-4">Direct Coach Communication</h3>
              <p className="text-gray-600">
                Regular check-ins and direct messaging with your coach for questions, adjustments, and accountability.
              </p>
            </div>
          </div>

          {/* Pricing */}
          <h2 className="text-3xl font-bold mb-10 text-center">Online Training Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Option 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gray-50 p-6 text-center border-b border-gray-200">
                <h3 className="text-2xl font-bold">Monthly</h3>
                <div className="text-4xl font-bold my-4">$199</div>
                <p className="text-gray-600">per month</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Custom weekly programming</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Form feedback</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Weekly check-ins</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Basic nutrition guidance</span>
                  </li>
                </ul>
                <a
                  href="/free-intro"
                  className="dsm-gradient-btn w-full text-center inline-block px-6 py-3 rounded-full font-bold text-white mt-6"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform scale-105">
              <div className="bg-dsm-orange p-6 text-center border-b border-gray-200">
                <h3 className="text-2xl font-bold text-white">Quarterly</h3>
                <div className="text-4xl font-bold my-4 text-white">$549</div>
                <p className="text-white opacity-80">$183 per month</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Everything in Monthly</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Monthly video consultation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Priority messaging</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Detailed nutrition planning</span>
                  </li>
                </ul>
                <a
                  href="/free-intro"
                  className="dsm-gradient-btn w-full text-center inline-block px-6 py-3 rounded-full font-bold text-white mt-6"
                >
                  Best Value
                </a>
              </div>
            </div>

            {/* Option 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gray-50 p-6 text-center border-b border-gray-200">
                <h3 className="text-2xl font-bold">Annual</h3>
                <div className="text-4xl font-bold my-4">$1,899</div>
                <p className="text-gray-600">$158 per month</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Everything in Quarterly</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Two free in-person sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Quarterly program review</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Access to exclusive content</span>
                  </li>
                </ul>
                <a
                  href="/free-intro"
                  className="dsm-gradient-btn w-full text-center inline-block px-6 py-3 rounded-full font-bold text-white mt-6"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Online Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Robert Taylor</h4>
                  <p className="text-gray-600">Online Client for 6 months</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The online training program has been a game-changer for me. Despite traveling frequently for work, I've been able to maintain a consistent training schedule and make significant progress. The app is intuitive, and the feedback on my form has been invaluable."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Lisa Rodriguez</h4>
                  <p className="text-gray-600">Online Client for 1 year</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a busy mom, getting to the gym regularly was impossible. The online training program from Desert Sports Med has allowed me to work out at home on my schedule while still getting expert guidance. The results have exceeded my expectations, and the ongoing support keeps me motivated."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Training Online?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the benefits of personalized coaching from anywhere in the world. Schedule your free consultation today.
          </p>
          <a
            href="/free-intro"
            className="dsm-gradient-btn inline-block px-8 py-3 rounded-full font-bold text-white text-lg"
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default OnlineTraining;
