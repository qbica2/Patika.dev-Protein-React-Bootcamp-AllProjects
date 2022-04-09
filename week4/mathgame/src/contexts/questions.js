/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";

const QuestionsContext = createContext();

export const QuestionsProvider = ( { children }) => {
  
  const array= [...Array(10).keys()].map(x=>x+1); 

  const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  
  const [firstNumber, setFirstNumber] = useState(getRandom(array));
  const [secondNumber, setSecondNumber] = useState(getRandom(array));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(firstNumber * secondNumber);
  const [firstFalseAnswer, setFirstFalseAnswer] = useState(0);
  const [secondFalseAnswer, setSecondFalseAnswer] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [tour, setTour] = useState(1);
  const [tourCorrectAnswer, setTourCorrectAnswer] = useState(0);
  const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0);
  const [click, setClick] = useState(false);

  const options=[
    (firstNumber+1)*secondNumber,
    firstNumber*(secondNumber+1),
    (firstNumber-1)*secondNumber,
    firstNumber*(secondNumber-1)
  ];

  useEffect(() => {
    setCorrectAnswer(firstNumber * secondNumber);
    setFirstFalseAnswer(x=> click ? x : getRandom(options));
  }, [firstNumber, secondNumber, click]);

  useEffect(() => {
    const newArr = options.filter(item => item !== firstFalseAnswer);
    setSecondFalseAnswer(y=> click ? y : getRandom(newArr));
  }, [firstFalseAnswer, click]);



  const createQuestion = () => {
    setFirstNumber(getRandom(array));
    setSecondNumber(getRandom(array));
  };



  const values= {
    questions,
    setQuestions,
    createQuestion,
    firstNumber,
    secondNumber,
    getRandom,
    correctAnswer,
    firstFalseAnswer,
    secondFalseAnswer,
    selectedAnswer,
    setSelectedAnswer,
    click,
    setClick,
    score,
    setScore,
    tour,
    setTour,
    tourCorrectAnswer,
    setTourCorrectAnswer,
    totalCorrectAnswer,
    setTotalCorrectAnswer
  };


  return <QuestionsContext.Provider value={values}>{ children }</QuestionsContext.Provider>;
};

export default QuestionsContext;