import React from "react";
import PropTypes from "prop-types";
import style from "../styles/answers.module.css";
import TrueVector from "../constants/TrueVector";
import FalseVector from "../constants/FalseVector";

function Answers({firstNumber, secondNumber, answer , boolean }) {
  return (
    <div className={style.answers}>
      <div className={style.leftContainer}>
        {firstNumber} x {secondNumber} = {answer} 
      </div>
      <div className={style.rightContainer}>
        {boolean ? <TrueVector /> : <FalseVector />}
      </div>
    </div> 
  );
}

Answers.propTypes = {
  firstNumber: PropTypes.number.isRequired,
  secondNumber: PropTypes.number.isRequired,
  answer: PropTypes.number.isRequired,
  boolean: PropTypes.bool.isRequired
};

export default Answers;