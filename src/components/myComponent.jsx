import React, { useState, useEffect } from 'react';
import './style.css';

const MyComponent = ({ isDarkMode, setDarkMode }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
  
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className='container-slider'>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider"></span>
      </label>

      <div className='current-time'>
        Hora actual: {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default MyComponent;
