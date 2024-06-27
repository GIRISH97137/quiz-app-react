// src/pages/TestInfo.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../data';
import CustomButton from '../components/CustomButton';
import './TestInfo.css';

const TestInfo = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (name && subject) {
      localStorage.setItem('userInfo', JSON.stringify({ name, subject }));
      console.log('User Info Stored:', userInfo);
      navigate('/start-test');
    } else {
      alert('Please enter your name and select a subject.');
    }
  };

  return (
    <div className="test-info">
      <h2>Enter Test Information</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="" disabled>Select Subject</option>
        {SUBJECTS.map((sub) => (
          <option key={sub} value={sub}>{sub}</option>
        ))}
      </select>
      <CustomButton onClick={handleStart}>Start Quiz</CustomButton>
    </div>
  );
};

export default TestInfo;
