const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Professional Runner",
      quote:
        "Desert Sports Med helped me recover from a serious knee injury and get back to competitive running. Their personalized approach made all the difference.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Basketball Coach",
      quote:
        "I've been sending my athletes to Desert Sports Med for years. Their expertise in sports-specific rehabilitation is unmatched in the area.",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Weekend Warrior",
      quote:
        "After struggling with chronic back pain for years, the team at Desert Sports Med created a treatment plan that finally gave me relief. I can enjoy my active lifestyle again!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their
            experience with Desert Sports Med.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
