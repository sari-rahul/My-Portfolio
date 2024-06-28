import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import Portfolio from '../src/pages/Portfolio';
import About from '../src/pages/About';
import Resume from '../src/pages/Resume';
import Contact from './pages/Contact';
import MyStory from './pages/MyStory';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/mystory" element={<MyStory/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
