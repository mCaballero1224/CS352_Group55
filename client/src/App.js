/* IMPORTS */
// npm packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// stylesheet
import './App.css';
//components
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
      <p id="copyright">&copy; Future Gadget Team (2024)</p>
    </div>
  );
}

export default App;
