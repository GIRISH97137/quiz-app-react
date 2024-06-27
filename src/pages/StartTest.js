// src/pages/start-test/StartTest.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUESTIONS_BY_SUBJECT } from '../data';
import Question from '../components/Question';
import ResultDialog from '../components/Dialog';
import './StartTest.css';

const StartTest = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log('Retrieved User Info:', userInfo);
    if (!userInfo) {
      navigate('/');
      return;
    }
    setQuestions(QUESTIONS_BY_SUBJECT[userInfo.subject]);
  }, [navigate]);

  const handleAnswer = (answer) => {
    const isCorrect = questions[currentQuestion].correct === answer;
    setScore((prevScore) => prevScore + (isCorrect ? 2 : -1));
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/greeting');
  };

  if (questions.length === 0) return null;

  return (
    <div className="start-test">
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
      />
      <ResultDialog open={open} onClose={handleClose} score={score} passFail={score >= 0} />
    </div>
  );
};

export default StartTest;
