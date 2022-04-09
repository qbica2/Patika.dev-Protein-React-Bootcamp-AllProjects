import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import QuestionsContext from "../contexts/questions";


function Options({ number, click }) {
  const [color,setColor] = useState("white");
  const {correctAnswer,selectedAnswer} = useContext(QuestionsContext);

  useEffect(() => {
    if(click){
      if(number === selectedAnswer){
        setColor("#2D2D2D");
      }
      else if((number !== selectedAnswer) && (number === correctAnswer)){
        setColor("#00BF63");
      }

      else if((number !== selectedAnswer) && (number !== correctAnswer)){
        setColor("white");
      }
    }else{
      setColor("white");
    }
  }, [click]);

  return (
    <svg width="140" height="120" viewBox="0 0 203 178" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x={100} y={115} fill="white" fontSize="90" textAnchor="middle"  >{number}</text>
      <path fill={color} d="M17.6845 123.733C-22.3844 43.9272 60.1765 8.10654 105.37 9.33661C109.791 6.97489 102.546 5.64641 98.3701 5.27739C62.8783 2.81726 0 26.3115 0 83.1405C0 164.694 79.2118 175.764 97.6332 177.61C131.529 181.005 211.477 163.218 202.267 86.4617C193.056 9.70561 116.791 -1.29401 92.4752 0.111112C77.1487 0.996765 80.6856 3.92431 84.3698 5.27739C164.687 -2.47203 194.53 63.5825 194.53 97.1632C194.53 189.787 49.7377 187.573 17.6845 123.733Z" />
    </svg>
  );
}
Options.propTypes = {
  number: PropTypes.number.isRequired,
  click: PropTypes.bool.isRequired,
};

export default Options;