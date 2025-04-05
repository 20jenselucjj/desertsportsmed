const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="dsm-gradient-text">Desert Sports Med</span>
            </h1>
            <p className="text-xl text-gray-600">
              Specialized sports medicine and rehabilitation services to help you perform at your best.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Desert Sports Med was founded by a team of sports medicine specialists and rehabilitation experts with a mission to bridge the gap between traditional physical therapy and performance training. We combine clinical expertise with evidence-based practices to deliver comprehensive care that addresses the root causes of pain and dysfunction.
              </p>
              <p className="text-gray-600 mb-6">
                Our integrated approach combines advanced manual therapy techniques, corrective exercise, and performance training methodologies. We utilize the latest research and technology to assess movement patterns, identify limitations, and develop personalized treatment plans that deliver measurable results.
              </p>
              <p className="text-gray-600">
                Whether you're a competitive athlete seeking to optimize performance, recovering from surgery, managing a chronic condition, or simply want to move without pain, our team provides the specialized care and guidance you need to achieve your goals and maintain long-term health.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-dsm-orange to-dsm-purple opacity-20 rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Sports Medicine Team"
                  className="rounded-lg shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Approach</h2>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-start">
                <div className="bg-dsm-orange text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive Assessment</h3>
                  <p className="text-gray-600">
                    We conduct thorough evaluations using advanced movement screening, functional testing, and detailed health history analysis. Our assessments identify movement dysfunctions, muscle imbalances, and biomechanical issues that contribute to pain or limit performance, allowing us to develop targeted treatment strategies.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start">
                <div className="bg-dsm-red text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Personalized Treatment</h3>
                  <p className="text-gray-600">
                    We utilize a diverse range of evidence-based techniques including joint mobilization, soft tissue manipulation, dry needling, instrument-assisted soft tissue mobilization, and cupping therapy. Our hands-on approach is complemented by targeted corrective exercises designed specifically for your body and goals.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start">
                <div className="bg-dsm-purple text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Progressive Rehabilitation</h3>
                  <p className="text-gray-600">
                    Our rehabilitation protocols follow a systematic progression from pain management and tissue healing to movement restoration, strength development, and functional integration. We establish clear milestones and objective measures to track your progress and adjust your program as needed to ensure optimal outcomes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start">
                <div className="bg-gradient-to-r from-dsm-orange to-dsm-purple text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                  <p className="text-gray-600">
                    We integrate cutting-edge performance training methodologies with our rehabilitation expertise to help you exceed your previous capabilities. Our approach includes movement efficiency training, power development, sport-specific conditioning, and recovery strategies tailored to your individual needs and competitive demands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experienced professionals is dedicated to helping you achieve your health and
              performance goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dr. Alex Johnson</h3>
                <p className="text-dsm-orange font-semibold mb-4">Sports Medicine Specialist</p>
                <p className="text-gray-600">
                  Board-certified in Sports Medicine with 12+ years of experience working with professional and Olympic athletes. Dr. Johnson specializes in advanced rehabilitation techniques and movement optimization for injury prevention and performance enhancement.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sarah Martinez</h3>
                <p className="text-dsm-red font-semibold mb-4">Performance Coach</p>
                <p className="text-gray-600">
                  Sarah is a certified strength and conditioning specialist with expertise in
                  performance enhancement and athletic development.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
                <p className="text-dsm-purple font-semibold mb-4">Rehabilitation Specialist</p>
                <p className="text-gray-600">
                  Michael specializes in advanced rehabilitation techniques and has helped numerous
                  clients recover from complex injuries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Take the first step towards better performance and recovery today.
            </p>
            <a
              href="/contact"
              className="dsm-gradient-btn px-8 py-3 rounded-full font-bold text-white inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
