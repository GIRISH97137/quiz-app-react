// src/pages/Greeting.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Greeting.css';

const Greeting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="greeting">
      <h2>Thank you for taking the quiz!</h2>
      <button onClick={handleHome}>Go to Home</button>
    </div>
  );
};

export default Greeting;
