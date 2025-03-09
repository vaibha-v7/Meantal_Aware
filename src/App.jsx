import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SurveyStats from './components/SurveyStats';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <SurveyStats />
                <InfoSection />
              </>
            } />
            {/* Add more routes as needed */}
            <Route path="/about" element={<div className="container mx-auto px-6 py-32">About Page Coming Soon</div>} />
            <Route path="/resources" element={<div className="container mx-auto px-6 py-32">Resources Page Coming Soon</div>} />
            <Route path="/surveys" element={<div className="container mx-auto px-6 py-32">Surveys Page Coming Soon</div>} />
            <Route path="/contact" element={<div className="container mx-auto px-6 py-32">Contact Page Coming Soon</div>} />
            <Route path="/get-help" element={<div className="container mx-auto px-6 py-32">Get Help Page Coming Soon</div>} />
            <Route path="*" element={<div className="container mx-auto px-6 py-32">Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
