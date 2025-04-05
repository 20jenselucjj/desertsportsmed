const GetStarted = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          GET STARTED AT THE BEST GYM IN<br />ST. GEORGE, UTAH
        </h2>

        {/* Three Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-dsm-red text-white text-4xl font-bold p-6 inline-block mb-6">
              01
            </div>
            <h3 className="text-xl font-bold mb-4">
              Schedule a Free Strategy Call
            </h3>
            <p className="text-gray-300">
              – Book a no-pressure consultation to discuss your goals, challenges, and needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-dsm-red text-white text-4xl font-bold p-6 inline-block mb-6">
              02
            </div>
            <h3 className="text-xl font-bold mb-4">
              Get Your Personalized Assessment
            </h3>
            <p className="text-gray-300">
              – Our expert team will uncover the root cause of your pain, performance issue, or injury.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-dsm-red text-white text-4xl font-bold p-6 inline-block mb-6">
              03
            </div>
            <h3 className="text-xl font-bold mb-4">
              Start Your Custom Program
            </h3>
            <p className="text-gray-300">
              – Experience tailored solutions designed to help you feel better, move better, and finally achieve your Goals.
            </p>
          </div>
        </div>

        {/* Taking the First Step Section */}
        <div className="bg-dsm-red py-16 px-8 md:px-16 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                TAKING THE FIRST STEP TOWARD YOUR HEALTH AND FITNESS GOALS CAN FEEL OVERWHELMING—BUT IT DOESN'T HAVE TO BE.
              </h2>
            </div>
            <div>
              <p className="text-lg mb-6">
                Starting something new—whether it's addressing lingering pain, recovering from an injury, or embarking on a fitness journey—can be daunting. Questions swirl: Will I fit in? Can I keep up? Will this actually work? At Desert Sports Med, we understand those fears and meet you exactly where you are.
              </p>
              <p className="text-lg mb-6">
                Whether you're a competitive athlete striving to return to elite performance, a weekend warrior refusing to give up your active lifestyle, or someone simply seeking to move pain-free and feel strong again, we've got your back. We blend science-backed methods, expert coaching, and a personalized approach that bridges the gap between rehab and peak performance.
              </p>
              <p className="text-lg">
                Our programs are more than exercises or treatments—they're tailored blueprints designed to unlock your potential, restore your confidence, and build a foundation for lasting health. With us, you're not just stepping into a gym; you're joining a community dedicated to your success.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/free-intro"
            className="dsm-gradient-btn inline-block px-8 py-4 rounded-full font-bold text-white text-lg"
          >
            Book Your Free Intro
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
