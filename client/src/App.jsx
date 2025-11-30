import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import StoreInfoBanner from './components/StoreInfoBanner';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Delivery from './pages/Delivery';
import About from './pages/About';
import Contact from './pages/Contact';
import Refill from './pages/Refill';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="sticky top-0 z-50 shadow-md">
          <Header />
          <StoreInfoBanner />
        </div>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/refill" element={<Refill />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
