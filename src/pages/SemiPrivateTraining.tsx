const SemiPrivateTraining = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Semi-Private Training
            </h1>
            <p className="text-xl text-gray-600">
              The perfect balance of personalized attention and group motivation.
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
                src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                alt="Semi-Private Training"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Small Group, Big Results</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Semi-Private Training program offers the perfect balance between personalized attention and the motivational benefits of group training. With a maximum of 4 clients per coach, you'll receive individualized coaching while enjoying the energy and camaraderie of training with others.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Each session is carefully designed to accommodate different fitness levels and goals, ensuring that everyone is appropriately challenged and making progress toward their specific objectives.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <h2 className="text-3xl font-bold mb-10 text-center">Benefits of Semi-Private Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {/* Benefit 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Personalized Attention</h3>
              <p className="text-gray-600">
                With our small group size, you'll receive individualized coaching and program adjustments to ensure you're training optimally for your specific goals and needs.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Motivational Environment</h3>
              <p className="text-gray-600">
                Training alongside others creates a supportive and motivating atmosphere that pushes you to give your best effort and stay consistent with your training.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Cost-Effective</h3>
              <p className="text-gray-600">
                Semi-private training offers many of the benefits of personal training at a more accessible price point, making expert coaching more affordable.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">04</div>
              <h3 className="text-xl font-bold mb-4">Scheduled Accountability</h3>
              <p className="text-gray-600">
                Regular scheduled sessions with your training group create built-in accountability, helping you stay consistent with your fitness routine.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">05</div>
              <h3 className="text-xl font-bold mb-4">Community Support</h3>
              <p className="text-gray-600">
                Build relationships with like-minded individuals who share your commitment to health and fitness, creating a supportive community that extends beyond the gym.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="text-dsm-orange text-4xl font-bold mb-4">06</div>
              <h3 className="text-xl font-bold mb-4">Varied Workouts</h3>
              <p className="text-gray-600">
                Our semi-private training sessions incorporate a variety of training modalities and equipment, keeping your workouts fresh, engaging, and effective.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-dsm-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
              <p className="text-gray-600">
                Begin with a comprehensive assessment to identify your goals, movement patterns, and fitness level.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-dsm-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Group Placement</h3>
              <p className="text-gray-600">
                We'll match you with a training group that aligns with your schedule and fitness level.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-dsm-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Customized Programming</h3>
              <p className="text-gray-600">
                Receive a personalized training program that will be implemented within the group setting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-dsm-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Regular Progress Checks</h3>
              <p className="text-gray-600">
                Periodic reassessments ensure your program evolves as you progress toward your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Jennifer Adams</h4>
                  <p className="text-gray-600">Member for 8 months</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I was hesitant about group training, but the semi-private format is perfect. I get personalized attention while also feeding off the energy of the group. I've made more progress in 6 months than I did in years of training on my own."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">David Chen</h4>
                  <p className="text-gray-600">Member for 1 year</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The semi-private training at Desert Sports Med offers the perfect balance. I get a customized program that addresses my specific needs, but I also get to train with others who push me to work harder. The community aspect has been just as valuable as the expert coaching."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join a Training Group?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the benefits of personalized coaching in a motivating group environment. Schedule your free intro session today.
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

export default SemiPrivateTraining;
