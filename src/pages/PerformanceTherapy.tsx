const PerformanceTherapy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              1:1 Performance Therapy
            </h1>
            <p className="text-xl text-gray-600">
              Physical Therapy. Redefined.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of 1:1 Performance Therapy</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto text-center">
            This isn't standard PT. This is what Physical Therapy is supposed to be. Work with a rehab expert 1 on 1, every session, and through our detailed assessment, discover the hidden opportunities to feel better, move better, and perform your best, on and off the field. Guaranteed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Benefit 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="In-Depth Assessment"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">In-Depth Assessment</h3>
                <p className="text-gray-600">
                  The power of personalized therapy is unlocked in our comprehensive assessment of posture, movement and biomechanics. Together, we will reveal the WHY behind whatever injury you're facing, and create a personalized pathway towards a pain-free you! An in-depth assessment ensures we target the source of pain and guides our hands-on therapies and program design process so you get the best rehab and fitness results in the least amount of time.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Custom Bodywork"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Custom Bodywork</h3>
                <p className="text-gray-600">
                  Every session is tailored to your needs, guided by our comprehensive assessment, and executed by a highly skilled manual therapist. Our hands-on approach ensures we address pain, improve mobility, and aid recovery. Experience the feeling when your body finally unlocks!
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Tailored Rehab Programming"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Tailored Rehab Programming</h3>
                <p className="text-gray-600">
                  After treatment, your therapist will teach you a customized therapy program, designed to eliminate the underlying causes of pain and limited performance. Each week, the program is progressed to keep you moving towards your goals!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take the first step towards a pain-free, high-performance life. Schedule your free intro session today.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/free-intro"
              className="dsm-gradient-btn inline-block px-8 py-3 rounded-full font-bold text-white text-lg"
            >
              Book Free Intro
            </a>
            <a
              href="/book-online/performance-therapy"
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

export default PerformanceTherapy;
