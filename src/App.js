import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Vehicles from './components/Vehicles';
import Powertrains from './components/Powertrains';
import Transmissions from './components/Transmissions';
import BodyTypes from './components/BodyTypes';
import Suspension from './components/Suspension';
import WheelsTires from './components/WheelsTires';
import Manufacturers from './components/Manufacturers';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="container">
            <div className="nav-brand">
              <Link to="/">🚗 Car Encyclopedia</Link>
            </div>
            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/vehicles" className="nav-link">Vehicles</Link>
              <Link to="/powertrains" className="nav-link">Engines</Link>
              <Link to="/transmissions" className="nav-link">Transmissions</Link>
              <Link to="/body-types" className="nav-link">Body Types</Link>
              <Link to="/suspension" className="nav-link">Suspension</Link>
              <Link to="/wheels-tires" className="nav-link">Wheels & Tires</Link>
              <Link to="/manufacturers" className="nav-link">Manufacturers</Link>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/powertrains" element={<Powertrains />} />
            <Route path="/transmissions" element={<Transmissions />} />
            <Route path="/body-types" element={<BodyTypes />} />
            <Route path="/suspension" element={<Suspension />} />
            <Route path="/wheels-tires" element={<WheelsTires />} />
            <Route path="/manufacturers" element={<Manufacturers />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Car Encyclopedia. Built with React.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
