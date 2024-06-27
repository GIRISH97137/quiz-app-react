// src/components/question/Question.js
import React from 'react';
import CustomButton from '../components/CustomButton';
import './Question.css';

const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="question-container">
      <h2 className="question-text">{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <CustomButton key={index} onClick={() => onAnswer(option)} className="option-button">
            {option}
          </CustomButton>
        ))}
      </div>
    </div>
  );
};

export default Question;
