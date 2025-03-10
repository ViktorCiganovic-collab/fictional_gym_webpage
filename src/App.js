import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Components/Navbar';
import About from './Components/About';
import Homepage from './Components/Homepage';
import Shop from './Components/Shop';
import './Styles/App.css';
import './Styles/App.scss';

function App() {
  return (
    <Router>
    <div className="App">
        <Menu />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
