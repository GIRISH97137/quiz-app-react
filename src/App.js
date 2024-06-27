// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TestInfo from './pages/TestInfo';
import StartTest from './pages/StartTest';
import Greeting from './pages/Greeting';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestInfo />} />
        <Route path="/start-test" element={<StartTest />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </Router>
  );
};

export default App;
