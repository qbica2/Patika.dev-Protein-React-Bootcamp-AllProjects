import React from "react";
import style from "../styles/landing.module.css";
import Title from "../constants/Title";
import TitleVector from "../constants/TitleVector";
import Subtitle from "../constants/Subtitle";
import ButtonVector from "../constants/ButtonVector";
import { useNavigate } from "react-router-dom";

function Landing() {
  let navigate = useNavigate();
  // Landing page için local storagetan aldığım veriler.
  const totalScore = Number(localStorage.getItem("totalScore"));
  const totalQuestions = Number(localStorage.getItem("totalQuestions"));
  const totalCorrectAnswer = Number(localStorage.getItem("totalCorrectAnswer"));

  return (
    <div className={style.landing}>
      <div className={style.container}> 
        <div className={style.titleGroup}>
          <Title title="Mathematics Game" />
          <TitleVector width={640} height={10} color="#FF0000"/>
        </div>
        <Subtitle subtitle="Total Score:" score={totalScore ? totalScore : 0} />
        <Subtitle subtitle="Total Questions:" score={totalQuestions ? totalQuestions : 0} />
        <Subtitle subtitle="Correct Answers:" score={totalCorrectAnswer ? totalCorrectAnswer : 0} />
        <button onClick={()=>navigate("/questions/1")}>
          <ButtonVector width= {447} height= {139} text="Start"/>
        </button>
      </div>
    </div>
  );
}

export default Landing;