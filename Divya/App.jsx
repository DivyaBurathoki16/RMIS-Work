import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Approach from './Approach';
import Industries from './Industries';
import Training from './Training';
import Blog from './Blog';
import Contact from './Contact';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Router>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/training" element={<Training />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          

          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
