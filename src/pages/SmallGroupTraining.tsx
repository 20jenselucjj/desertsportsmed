import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const SmallGroupTraining = () => {
  return (
    <div>
      <PageHeader title="Small Group Personal Training" />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get the Best of Both Worlds</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Small Group Personal Training program in St. George, Utah combines the benefits of 
                personalized attention with the motivation and energy of group training. Work out in a small 
                group setting to achieve your goals faster.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a maximum of 6 participants per session, you'll receive individualized coaching while 
                enjoying the camaraderie and friendly competition that comes with training alongside others.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/book-online/training"
                  className="dsm-gradient-btn inline-block px-8 py-3 rounded-full font-bold text-white"
                >
                  Book a Session
                </Link>
                <Link
                  to="/free-intro"
                  className="inline-block px-8 py-3 rounded-full font-bold border-2 border-dsm-red text-dsm-red hover:bg-dsm-red hover:text-white transition-colors"
                >
                  Free Intro
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/small-group-training.jpg"
                alt="Small Group Training"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80';
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-dsm-red text-white text-4xl font-bold p-6 rounded-lg shadow-lg">
                03
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-100 rounded-lg p-12 mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Benefits of Small Group Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-dsm-red text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h4 className="text-xl font-bold mb-3">Personalized Attention</h4>
                <p className="text-gray-700">
                  With small group sizes, our coaches can provide individualized attention and form corrections while still creating a fun group atmosphere.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-dsm-red text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h4 className="text-xl font-bold mb-3">Motivation & Accountability</h4>
                <p className="text-gray-700">
                  Training with others creates natural motivation and accountability. You'll push harder and show up more consistently.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-dsm-red text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h4 className="text-xl font-bold mb-3">Cost-Effective</h4>
                <p className="text-gray-700">
                  Get many of the benefits of personal training at a fraction of the cost, making expert coaching more accessible.
                </p>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Program Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">What to Expect</h4>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Small groups of 2-6 participants</li>
                  <li>60-minute training sessions</li>
                  <li>Customized programming based on your goals</li>
                  <li>Expert coaching and form correction</li>
                  <li>Progress tracking and regular assessments</li>
                  <li>Flexible scheduling options</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Who It's For</h4>
                <p className="text-gray-700 mb-4">
                  Our Small Group Personal Training is perfect for:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Those who want personalized coaching but enjoy the energy of group training</li>
                  <li>People looking for a more affordable alternative to 1-on-1 personal training</li>
                  <li>Individuals who thrive in a supportive, community environment</li>
                  <li>Anyone looking to improve strength, lose weight, or enhance overall fitness</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our Small Group Personal Training program in St. George and experience the perfect balance of personalized coaching and group motivation.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                to="/book-online/training"
                className="dsm-gradient-btn inline-block px-8 py-4 rounded-full font-bold text-white text-lg"
              >
                Book a Session
              </Link>
              <Link
                to="/free-intro"
                className="inline-block px-8 py-4 rounded-full font-bold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                Schedule Free Intro
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallGroupTraining;
