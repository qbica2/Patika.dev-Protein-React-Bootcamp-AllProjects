import React, { useContext, useEffect} from "react";
import style from "../styles/results.module.css";
import Title from "../constants/Title";
import TitleVector from "../constants/TitleVector";
import Subtitle from "../constants/Subtitle";
import ButtonVector from "../constants/ButtonVector";
import Answers from "../components/Answers";
import QuestionsContext from "../contexts/questions";
import { useNavigate } from "react-router-dom";

function Results() {
  let navigate = useNavigate();
  const { questions, setQuestions, tourCorrectAnswer, setTourCorrectAnswer, setTour, score, setScore } = useContext(QuestionsContext);
  //local storage a kayıt edeceğimiz veriler
  const totalScore = Number(localStorage.getItem("totalScore"));
  const totalQuestions =Number(localStorage.getItem("totalQuestions"));
  const totalCorrect = Number(localStorage.getItem("totalCorrectAnswer"));

  //component render edildiği gibi verileri kayıt ediyoruz.
  useEffect(() => {
    updateLocalStorage();
  }, []);

  const handleRestart = () => {
    setTour(x=>x+1);
    setScore(0);
    setTourCorrectAnswer(0);
    setQuestions([]);
    navigate("/questions/1");
  };

  const updateLocalStorage = () => {
    localStorage.setItem("totalScore", totalScore + score);
    localStorage.setItem("totalQuestions", totalQuestions + 10);
    localStorage.setItem("totalCorrectAnswer", totalCorrect + tourCorrectAnswer);
  };

  return (
    <div className={style.results}>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <div className={style.titleGroup}>
            <Title title="Final" />
            <TitleVector width={228} height={8} color="#FF0000"/>
          </div>
          <Subtitle subtitle="Points:" score={score}/>
          <Subtitle subtitle="Questions:" score={10}/>
          <Subtitle subtitle="Correct Answers:" score={tourCorrectAnswer}/>
          <button onClick={()=>handleRestart()}>
            <ButtonVector width= {447} height= {139} text="Restart"/>
          </button>
        </div>
        <div className={style.rightContainer}>
          <div className={style.titleGroup}>
            <div className={style.title}>All Questions</div> 
            <TitleVector width={350} height={8} color="#FF0000"/>
          </div>
          <>
            {questions.map((question) => (
              <Answers firstNumber={question.firstNumber} secondNumber={question.secondNumber}   answer={question.selectedAnswer} boolean={question.selectedAnswer === question.correctAnswer ? true : false} key={question.id}/>
            ))}
          </>
        </div>
      </div>
    </div>
  );
}

export default Results;