import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import GetStarted from '../components/GetStarted';

const Home = () => {
  return (
    <div>
      <Hero />
      <GetStarted />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
