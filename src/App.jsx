
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ServicesPage from './pages/servicepage/ServicesPage';
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';
import ShopPage from './pages/shop/ShopPage';
import { DarkModeProvider } from './DarkModeContext';

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/test" element={<div style={{padding: '2rem', fontSize: '2rem'}}>Test Route Works!</div>} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;