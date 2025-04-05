import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WelcomeMessage from './components/WelcomeMessage';
import Home from './pages/Home';
import About from './pages/About';
// Import new pages
import Programs from './pages/Programs';
import PerformanceTherapy from './pages/PerformanceTherapy';
import SportsPerformance from './pages/SportsPerformance';
import SemiPrivateTraining from './pages/SemiPrivateTraining';
import SmallGroupTraining from './pages/SmallGroupTraining';
import OnlineTraining from './pages/OnlineTraining';
import Pricing from './pages/Pricing';
import BookOnline from './pages/BookOnline';
import PerformanceTherapySchedule from './pages/PerformanceTherapySchedule';
import TrainingSchedule from './pages/TrainingSchedule';
import FreeIntro from './pages/FreeIntro';
import Services from './pages/Services';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatOpen = () => {
    setIsChatOpen(true);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Programs routes */}
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/performance-therapy" element={<PerformanceTherapy />} />
            <Route path="/programs/sports-performance" element={<SportsPerformance />} />
            <Route path="/programs/semi-private-training" element={<SemiPrivateTraining />} />
            <Route path="/programs/small-group-training" element={<SmallGroupTraining />} />
            <Route path="/programs/online-training" element={<OnlineTraining />} />

            {/* Pricing route */}
            <Route path="/pricing" element={<Pricing />} />

            {/* Book Online routes */}
            <Route path="/book-online" element={<BookOnline />} />
            <Route path="/book-online/performance-therapy" element={<PerformanceTherapySchedule />} />
            <Route path="/book-online/training" element={<TrainingSchedule />} />

            {/* Free Intro route */}
            <Route path="/free-intro" element={<FreeIntro />} />

            {/* Services route */}
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot isInitiallyOpen={isChatOpen} />
        <WelcomeMessage onChatOpen={handleChatOpen} isChatOpen={isChatOpen} />
      </div>
    </Router>
  );
}

export default App
