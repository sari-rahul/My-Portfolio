import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import { Routes, Route } from 'react-router-dom';
import Portfolio from '../src/pages/Portfolio';
import About from '../src/pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
