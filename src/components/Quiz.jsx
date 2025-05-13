import React, { useState } from "react";
import Results from "./Results";

const Quiz = () => {
  const questionBank = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Saturn"],
      answer: "Jupiter",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "Harper Lee",
        "Mark Twain",
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
      ],
      answer: "Harper Lee",
    },
  ];

  const initialAnswers = [null, null, null];
  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const selectedAnswer = userAnswers[currentQuestion];

  //   const [optionSelected, setOptionSelected] = useState(null);

  const handleSelectOption = (option) => {
    console.log(`Selected option: ${option}`);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = option;
    setUserAnswers(newAnswers);
    console.log(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      console.log("Already at the first question");
    }
  };

  const restartQuiz = () => {
    console.log("Restarting quiz...");
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizCompleted(false);
  };

  if (isQuizCompleted) {
    return (
      <Results
        userAnswers={userAnswers}
        questionBank={questionBank}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion].options.map((option) => (
        <button
          className={"option" + (selectedAnswer === option ? " selected" : "")}
          onClick={() => handleSelectOption(option)}
          //   key={option}
        >
          {option}
        </button>
      ))}
      <div className="nav-buttons">
        <button
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
          {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
