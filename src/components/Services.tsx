import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Performance Therapy",
      description:
        "Our specialized manual therapy techniques address movement dysfunctions, reduce pain, and accelerate recovery. We combine hands-on treatment with corrective exercises to restore optimal function and prevent future injuries.",
      icon: (
        <svg
          className="w-12 h-12 text-dsm-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      link: "/programs/performance-therapy",
    },
    {
      id: 2,
      title: "Sports Performance",
      description:
        "Elevate your athletic potential with our evidence-based training programs. We focus on movement quality, strength development, power production, and sport-specific conditioning to help you perform at your highest level and reduce injury risk.",
      icon: (
        <svg
          className="w-12 h-12 text-dsm-red"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      link: "/programs/sports-performance",
    },
    {
      id: 3,
      title: "Injury Rehabilitation",
      description:
        "Our comprehensive rehabilitation approach integrates advanced manual therapy, progressive exercise prescription, and movement re-education. We don't just treat symptoms—we address the root causes to get you back to your active lifestyle stronger than before.",
      icon: (
        <svg
          className="w-12 h-12 text-dsm-purple"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      link: "/programs",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine clinical expertise with evidence-based practices to deliver comprehensive
            sports medicine and rehabilitation services that address your specific needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center font-semibold text-dsm-red hover:text-dsm-purple"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
