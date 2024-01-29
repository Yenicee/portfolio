import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './pages/header';
import MyComponent from './components/myComponent';
import Home from './pages';
import Projects from './pages/projects';
import Contact from './pages/contact';
import { useState } from 'react';


function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <MyComponent isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <Navigation />
      <Routes>
        <Route path='/index' element={<Home />} />
        <Route path='/projects' element= {<Projects />} />
        <Route path='/contact' element= {<Contact />} />
      </Routes>
    </div>
      
  );
}

export default App;


