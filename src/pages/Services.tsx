import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'sports-therapy',
      title: 'Sports Therapy',
      description:
        'Our sports therapy services are designed to help athletes recover from injuries and improve performance through specialized treatment plans.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      benefits: [
        'Specialized treatment for sports-related injuries',
        'Personalized recovery plans',
        'Advanced manual therapy techniques',
        'Sport-specific rehabilitation protocols',
        'Injury prevention strategies',
      ],
      features: [
        {
          title: 'Comprehensive Assessment',
          description:
            'We begin with a thorough assessment to identify the root cause of your injury or performance limitation.',
        },
        {
          title: 'Manual Therapy',
          description:
            'Our skilled therapists use hands-on techniques to address pain, improve mobility, and accelerate healing.',
        },
        {
          title: 'Therapeutic Exercise',
          description:
            'Customized exercise programs designed to restore function, build strength, and prevent future injuries.',
        },
        {
          title: 'Return-to-Sport Testing',
          description:
            "Objective testing to ensure you're ready to safely return to your sport or activity.",
        },
      ],
    },
    {
      id: 'performance-training',
      title: 'Performance Training',
      description:
        'Enhance your athletic performance with our specialized training programs designed to improve strength, speed, agility, and endurance.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      benefits: [
        'Improved athletic performance',
        'Enhanced strength and power',
        'Increased speed and agility',
        'Better endurance and stamina',
        'Sport-specific skill development',
      ],
      features: [
        {
          title: 'Performance Assessment',
          description:
            'Comprehensive testing to identify your strengths, weaknesses, and areas for improvement.',
        },
        {
          title: 'Customized Training Programs',
          description:
            'Individualized programs designed to address your specific goals and needs.',
        },
        {
          title: 'Movement Analysis',
          description:
            'Detailed analysis of your movement patterns to optimize technique and efficiency.',
        },
        {
          title: 'Periodized Programming',
          description:
            'Structured training cycles to ensure continued progress and peak performance when it matters most.',
        },
      ],
    },
    {
      id: 'rehabilitation',
      title: 'Rehabilitation',
      description:
        'Our comprehensive rehabilitation programs are tailored to help you recover from injuries and return to your active lifestyle.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      benefits: [
        'Effective pain management',
        'Restored mobility and function',
        'Accelerated recovery',
        'Reduced risk of re-injury',
        'Improved quality of life',
      ],
      features: [
        {
          title: 'Individualized Treatment Plans',
          description:
            'Customized rehabilitation programs based on your specific injury, goals, and lifestyle.',
        },
        {
          title: 'Progressive Rehabilitation',
          description:
            'Structured progression from pain management to functional restoration and return to activity.',
        },
        {
          title: 'Hands-On Therapy',
          description:
            'Manual techniques to address pain, improve tissue mobility, and facilitate healing.',
        },
        {
          title: 'Functional Training',
          description:
            'Practical exercises that translate to improved function in daily activities and sports.',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="dsm-gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600">
              Specialized care to help you move better, feel better, and perform at your best.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="md:w-1/2 mb-10 md:mb-0 md:px-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-dsm-orange to-dsm-purple opacity-20 rounded-lg"></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-lg shadow-xl relative z-10"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 md:px-6">
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="text-gray-600">{benefit}</li>
                      ))}
                    </ul>

                    <Link
                      to="/book-online"
                      className="dsm-gradient-btn px-6 py-2 rounded-full font-bold text-white inline-block"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-2xl font-bold mb-8 text-center">What to Expect</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="mt-20 border-b border-gray-200"></div>
                )}
              </div>
            ))}
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
            <Link
              to="/book-online"
              className="dsm-gradient-btn px-8 py-3 rounded-full font-bold text-white inline-block"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
