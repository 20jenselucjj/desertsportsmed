import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="dsm-gradient-text">Desert Sports Med</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Specialized Sports Medicine & Rehabilitation
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're a competitive athlete, weekend warrior, or recovering from injury,
              our evidence-based approach combines cutting-edge rehabilitation techniques with
              personalized performance training to help you move better, feel stronger, and
              achieve your health goals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/book-online"
                className="dsm-gradient-btn px-8 py-3 rounded-full font-bold text-white text-center"
              >
                Book Appointment
              </Link>
              <Link
                to="/programs"
                className="bg-white border-2 border-dsm-orange px-8 py-3 rounded-full font-bold text-dsm-orange text-center hover:bg-dsm-orange hover:text-white transition duration-300"
              >
                Our Programs
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-dsm-orange to-dsm-purple opacity-20 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Sports Medicine"
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
