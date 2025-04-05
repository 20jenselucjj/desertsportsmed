const SportsPerformance = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sports Performance
            </h1>
            <p className="text-xl text-gray-600">
              Unlock your athletic potential with our specialized sports performance training.
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
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                alt="Sports Performance Training"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Elite Training for Athletes</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Sports Performance program is designed to help athletes of all levels reach their full potential. Whether you're a professional athlete looking to gain a competitive edge or a weekend warrior aiming to improve your game, our expert coaches will develop a personalized training program to help you achieve your goals.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Using the latest in sports science and performance training methodologies, we focus on developing strength, power, speed, agility, and sport-specific skills while reducing the risk of injury.
              </p>
            </div>
          </div>

          {/* Program Features */}
          <h2 className="text-3xl font-bold mb-10 text-center">Program Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Personalized Assessment</h3>
              <p className="text-gray-600">
                We begin with a comprehensive assessment of your movement patterns, strengths, weaknesses, and goals to create a truly personalized training program.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Sport-Specific Training</h3>
              <p className="text-gray-600">
                Our programs are tailored to the specific demands of your sport, focusing on the movements, energy systems, and skills that will have the greatest impact on your performance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Injury Prevention</h3>
              <p className="text-gray-600">
                We integrate injury prevention strategies into every aspect of your training program, addressing imbalances and weaknesses before they lead to injury.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">04</div>
              <h3 className="text-xl font-bold mb-4">Performance Tracking</h3>
              <p className="text-gray-600">
                Regular assessments and performance tracking ensure that your program continues to evolve as you progress, keeping you on the path to peak performance.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">05</div>
              <h3 className="text-xl font-bold mb-4">Recovery Strategies</h3>
              <p className="text-gray-600">
                Learn effective recovery techniques to optimize your training response and ensure you're always ready for your next training session or competition.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">06</div>
              <h3 className="text-xl font-bold mb-4">Nutrition Guidance</h3>
              <p className="text-gray-600">
                Receive guidance on fueling strategies to support your training and performance goals, ensuring your nutrition complements your physical training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Athletes Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Johnson</h4>
                  <p className="text-gray-600">College Basketball Player</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The sports performance program has completely transformed my game. I'm faster, stronger, and more explosive than ever before. The personalized approach and attention to detail have made all the difference."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Williams</h4>
                  <p className="text-gray-600">Professional Soccer Player</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "After struggling with recurring injuries, the team at Desert Sports Med helped me not only recover but come back stronger than before. Their integrated approach to performance and injury prevention has been a game-changer for my career."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Performance?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take the first step towards reaching your full athletic potential. Schedule your free intro session today.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/free-intro"
              className="dsm-gradient-btn inline-block px-8 py-3 rounded-full font-bold text-white text-lg"
            >
              Book Free Intro
            </a>
            <a
              href="/book-online/training"
              className="bg-white border-2 border-dsm-orange text-dsm-orange hover:bg-dsm-orange hover:text-white transition-colors inline-block px-8 py-3 rounded-full font-bold text-lg"
            >
              View Schedule
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsPerformance;
