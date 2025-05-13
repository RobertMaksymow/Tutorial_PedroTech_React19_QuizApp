import React from "react";

const Results = ({ userAnswers, questionBank, restartQuiz }) => {
  const calculateScore = () => {
    let finalScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalScore++;
      }
    });

    return finalScore;
  };

  const score = calculateScore();

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score}/{questionBank.length}
      </p>
      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;
