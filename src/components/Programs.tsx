import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Programs = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

    const programElements = document.querySelectorAll('.program-card');
    programElements.forEach((el) => observer.observe(el));

    return () => {
      programElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-dsm-red blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">PROGRAMS</span>
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-dsm-red"></span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Training programs designed for athletes and fitness enthusiasts in St. George, Utah</p>
        </div>

        {/* Program 1: 1:1 Performance Therapy */}
        <div className="program-card grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-center opacity-0 transition-all duration-700 transform translate-y-8">
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/images/performance-therapy.jpg" 
              alt="1:1 Performance Therapy" 
              className="rounded-lg shadow-lg w-full transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x400/333/white?text=Performance+Therapy';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-4 right-4 bg-dsm-red text-white px-4 py-2 rounded font-bold">
              1:1 Performance Therapy
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-dsm-red text-white text-5xl font-bold p-6 inline-block mb-6 self-start transform -skew-x-12">
              <span className="inline-block transform skew-x-12">01</span>
            </div>
            <h3 className="text-4xl font-bold mb-6 text-white">1:1 PERFORMANCE THERAPY</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              With 1:1 Performance Therapy, your rehab experience is 100% customized to you. Our expert trainers in 
              St. George provide personalized 1-on-1 sessions, hands-on treatment, and tailored programming that unlocks 
              superior results in minimal time.
            </p>
            <Link 
              to="/programs/performance-therapy" 
              className="group relative inline-flex items-center overflow-hidden rounded bg-dsm-red px-8 py-3 text-white focus:outline-none focus:ring active:bg-dsm-red/90"
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

              <span className="text-lg font-bold transition-all group-hover:me-4">
                LEARN MORE
              </span>
            </Link>
          </div>
        </div>

        {/* Program 2: Sports Performance */}
        <div className="program-card grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-center opacity-0 transition-all duration-700 transform translate-y-8">
          <div className="flex flex-col md:order-1 order-2">
            <div className="bg-dsm-red text-white text-5xl font-bold p-6 inline-block mb-6 self-start transform -skew-x-12">
              <span className="inline-block transform skew-x-12">02</span>
            </div>
            <h3 className="text-4xl font-bold mb-6 text-white">SPORTS PERFORMANCE</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Our sports performance training helps athletes in St. George develop strength, power, and agility, 
              ensuring long-term athletic success. Whether you're training for competition or looking to improve 
              your game, our specialized programs will take your performance to the next level.
            </p>
            <Link 
              to="/programs/sports-performance" 
              className="group relative inline-flex items-center overflow-hidden rounded bg-dsm-red px-8 py-3 text-white focus:outline-none focus:ring active:bg-dsm-red/90"
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

              <span className="text-lg font-bold transition-all group-hover:me-4">
                LEARN MORE
              </span>
            </Link>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg md:order-2 order-1">
            <img 
              src="/images/sports-performance.jpg" 
              alt="Sports Performance" 
              className="rounded-lg shadow-lg w-full transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x400/333/white?text=Sports+Performance';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-4 right-4 bg-dsm-red text-white px-4 py-2 rounded font-bold">
              Sports Performance
            </div>
          </div>
        </div>

        {/* Program 3: Small Group Personal Training */}
        <div className="program-card grid grid-cols-1 md:grid-cols-2 gap-8 items-center opacity-0 transition-all duration-700 transform translate-y-8">
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/images/small-group-training.jpg" 
              alt="Small Group Personal Training" 
              className="rounded-lg shadow-lg w-full transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x400/333/white?text=Small+Group+Training';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-4 right-4 bg-dsm-red text-white px-4 py-2 rounded font-bold">
              Small Group Training
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-dsm-red text-white text-5xl font-bold p-6 inline-block mb-6 self-start transform -skew-x-12">
              <span className="inline-block transform skew-x-12">03</span>
            </div>
            <h3 className="text-4xl font-bold mb-6 text-white">SMALL GROUP PERSONAL TRAINING</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Work out in a small group setting in St. George to achieve your goals faster. Get all the benefits of group 
              training and personal training in one. Our energetic environment provides motivation, accountability, and 
              expert coaching to help you reach your fitness goals.
            </p>
            <Link 
              to="/programs/small-group-training" 
              className="group relative inline-flex items-center overflow-hidden rounded bg-dsm-red px-8 py-3 text-white focus:outline-none focus:ring active:bg-dsm-red/90"
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

              <span className="text-lg font-bold transition-all group-hover:me-4">
                LEARN MORE
              </span>
            </Link>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 border-t border-gray-600"></div>
          </div>
          <Link
            to="/programs"
            className="relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-white rounded-full group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-dsm-red via-red-600 to-orange-600"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-xl">VIEW ALL PROGRAMS</span>
            <svg className="w-5 h-5 ml-2 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
