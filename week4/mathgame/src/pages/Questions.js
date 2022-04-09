import React,{ useContext, useState , useEffect } from "react";
import style from "../styles/questions.module.css";
import Blackboard from "../components/Blackboard";
import Options from "../components/Options";
import QuestionsContext from "../contexts/questions";
import { useNavigate, useParams } from "react-router-dom";

function Questions() {
  let navigate = useNavigate();
  let { id } = useParams();
  // Contextten gelen veriler
  const { questions, setQuestions, createQuestion , firstNumber, secondNumber, correctAnswer, firstFalseAnswer, secondFalseAnswer , setSelectedAnswer, click, setClick, score, setScore, tourCorrectAnswer, setTourCorrectAnswer,tour } = useContext(QuestionsContext);
  // Sadece bu page için geçerli stateler
  const [backgroundColor, setBackgroundColor] = useState("dark");
  const [optionArray, setOptionArray] = useState([]);
  // Verilen arrayin elemanlarının yerini random değiştiren fonksiyon
  const shuffledArr = (arr) => arr.sort(() => 0.5 - Math.random());
  
  // id her değiştiğinde yeni soru üretiyoruz
  useEffect(() => {
    createQuestion(id);
  }, [id]);

  // cevap verdikten sonra beklenen 3saniyede şıkların yerinin değişmemesi için kullandığım yapı 
  useEffect(() => {
    const arr = [firstFalseAnswer, secondFalseAnswer, correctAnswer];
    setOptionArray(x=> click ? x :shuffledArr(arr));
  }, [click,firstFalseAnswer,secondFalseAnswer,correctAnswer]);

  // Sıradaki soruya geçmemizi sağlayan fonksiyon;3saniye bekleme, cevaba göre arka plan renginin değişmesi, score un hesaplanması gibi işlemler bu fonksiyon içerisinde yapılıyor
  const handleNextQuestion = ( id, value ) => {
    const question = {
      id: id,
      firstNumber: firstNumber,
      secondNumber: secondNumber,
      correctAnswer: correctAnswer,
      firstFalseAnswer: firstFalseAnswer,
      secondFalseAnswer: secondFalseAnswer,
      selectedAnswer: value,
    };
    setClick(true);
    setSelectedAnswer(value);
    if(Number(id)<10){
      if(value === correctAnswer){
        setTourCorrectAnswer(tourCorrectAnswer+1);
        setBackgroundColor("green");
        setScore(x=>(Math.ceil(Math.sqrt(value))+x));
        setTimeout(() => {
          setClick(false);
          setBackgroundColor("dark");
          navigate(`/questions/${Number(id)+1}`);
        }, 3000);
      }
      else{
        setBackgroundColor("red");
        setTimeout(() => {
          setClick(false);
          setBackgroundColor("dark");
          navigate(`/questions/${Number(id)+1}`);
        }, 3000);
      }
    }else if(Number(id)===10){
      if(value === correctAnswer){
        setTourCorrectAnswer(tourCorrectAnswer+1);
        setBackgroundColor("green");
        setScore(x=>(Math.ceil(Math.sqrt(value))+x));
        setTimeout(() => {
          setClick(false);
          setBackgroundColor("dark");
          navigate("/results");
        }, 3000);
      }
      else{
        setBackgroundColor("red");
        setTimeout(() => {
          setClick(false);
          setBackgroundColor("dark");
          navigate("/results");
        }, 3000);
      }
    }

    setQuestions([...questions, question]);
  };

  return (
    <div className={`${style.questions} ${backgroundColor =="dark" && style.dark} ${backgroundColor =="green" && style.green} ${backgroundColor =="red" && style.red}`}>
      <div className={style.header}>
        <div className={style.option}>Score: {score}</div>
        <div className={style.option}>Tour: {tour}</div>
        <div className={style.option}>Questions: {tourCorrectAnswer}/{id}</div>
      </div>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <Blackboard firstNumber={firstNumber} secondNumber={secondNumber}/>
        </div>
        <div className={style.rightContainer}>
          {
            optionArray.map((item, i) => 
              (<button  key={i} disabled={click} onClick={()=>handleNextQuestion( id, item)}><Options number={item} click={click}/></button>)
            )
          }
        </div>

      </div>
    </div>
  );
}

export default Questions;