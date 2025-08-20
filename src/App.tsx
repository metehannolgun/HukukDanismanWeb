import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ortak layout */}
        <Route path="/" element={<MainLayout />}>
          {/* Scrollview landing page */}
          <Route index element={<Home />} />

          {/* Diğer sayfalar */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
