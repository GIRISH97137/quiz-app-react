// src/data.js
export const SUBJECTS = ['Math', 'Science', 'History'];

export const QUESTIONS_BY_SUBJECT = {
  Math: [
    { question: 'What is 2 + 2?', options: ['3', '4', '5'], correct: '4' },
    { question: 'What is 3 * 3?', options: ['6', '8', '9'], correct: '9' },
  ],
  Science: [
    { question: 'What planet is closest to the sun?', options: ['Earth', 'Venus', 'Mercury'], correct: 'Mercury' },
    { question: 'What is H2O?', options: ['Oxygen', 'Hydrogen', 'Water'], correct: 'Water' },
  ],
  History: [
    { question: 'Who discovered America?', options: ['Columbus', 'Vikings', 'Magellan'], correct: 'Columbus' },
    { question: 'In which year did World War II end?', options: ['1945', '1939', '1918'], correct: '1945' },
  ],
};
