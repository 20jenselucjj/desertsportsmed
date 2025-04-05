import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  useEffect(() => {
    // Animation for program cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const programElements = document.querySelectorAll('.program-item');
    programElements.forEach((el) => observer.observe(el));

    return () => {
      programElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-dsm-red blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">TRAINING PROGRAMS</span>
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-dsm-red"></span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Evidence-based sports medicine and rehabilitation programs designed by specialists to help you move better, perform stronger, and recover faster. Our integrated approach addresses both immediate concerns and long-term athletic development.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive programs combine clinical expertise with advanced training methodologies to address your specific needs, whether you're recovering from injury, seeking to enhance athletic performance, or wanting to improve your overall movement quality and function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 1:1 Performance Therapy */}
            <div className="program-item bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl opacity-0">
              <div className="relative">
                <img
                  src="/images/performance-therapy.jpg"
                  alt="Performance Therapy"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
                  }}
                />
                <div className="absolute top-0 left-0 bg-dsm-red text-white text-xl font-bold p-4">
                  01
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">1:1 Performance Therapy</h3>
                <p className="text-gray-600 mb-6">
                  Our 1:1 Performance Therapy combines advanced manual therapy techniques with corrective exercise to address pain, improve mobility, and enhance performance. Each session includes comprehensive assessment, hands-on treatment, and personalized exercise prescription to deliver measurable results in minimal time.
                </p>
                <Link
                  to="/programs/performance-therapy"
                  className="group relative inline-flex items-center overflow-hidden rounded bg-dsm-red px-6 py-3 text-white focus:outline-none focus:ring active:bg-dsm-red/90"
                >
                  <span className="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      className="h-5 w-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <span className="font-bold transition-all group-hover:me-4">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>

            {/* Sports Performance */}
            <div className="program-item bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl opacity-0">
              <div className="relative">
                <img
                  src="/images/sports-performance.jpg"
                  alt="Sports Performance"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80';
                  }}
                />
                <div className="absolute top-0 left-0 bg-dsm-red text-white text-xl font-bold p-4">
                  02
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Sports Performance</h3>
                <p className="text-gray-600 mb-6">
                  Our Sports Performance program utilizes biomechanical analysis and sport-specific training methodologies to help athletes improve strength, power, speed, and injury resilience. We create periodized training plans based on your competitive schedule and performance goals, with regular assessments to track progress and adjust programming.
                </p>
                <Link
                  to="/programs/sports-performance"
                  className="group relative inline-flex items-center overflow-hidden rounded bg-dsm-red px-6 py-3 text-white focus:outline-none focus:ring active:bg-dsm-red/90"
                >
                  <span className="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      className="h-5 w-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <span className="font-bold transition-all group-hover:me-4">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>

            {/* Small Group Personal Training */}
            <div className="program-item bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl opacity-0">
              <div className="relative">
                <img
                  src="/images/small-group-training.jpg"
                  alt="Small Group Personal Training"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80';
                  }}
                />
                <div className="absolute top-0 left-0 bg-dsm-red text-white text-xl font-bold p-4">
                  03
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Small Group Personal Training</h3>
                <p className="text-gray-600 mb-6">
                  Work out in a small group setting to achieve your goals faster. Get all the benefits of group training and personal training in one. Our energetic environment provides motivation and accountability.
                </p>
                <Link
                  to="/programs/small-group-training"
                  className="group relative inline-flex items-center overflow-hidden rounded bg-dsm-red px-6 py-3 text-white focus:outline-none focus:ring active:bg-dsm-red/90"
                >
                  <span className="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      className="h-5 w-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <span className="font-bold transition-all group-hover:me-4">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-dsm-red blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Training?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Take the first step towards achieving your health and fitness goals in St. George. Schedule a free intro session today and discover which program is right for you.
          </p>
          <Link
            to="/free-intro"
            className="relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-white rounded-full group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-dsm-red via-red-600 to-orange-600"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-xl">BOOK FREE INTRO</span>
            <svg className="w-5 h-5 ml-2 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;
