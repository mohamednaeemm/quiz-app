import React, {useState, useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from "../Helpers/Questions";

function Quiz() {
    const {score, setScore, setGameState} = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);

    const nextQuestion = (ans) => {
        
        if (Questions[currQuestion].answer == ans) {
            setScore(score + 1);
        }
        if (currQuestion != Questions.length - 1) {
            setCurrQuestion(currQuestion + 1);
            
        } else {
            setGameState("endScreen");
        }
    };

  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="option">
        <button onClick={() => nextQuestion("A")}>{Questions[currQuestion].optionA}</button>
        <button onClick={() => nextQuestion("B")}>{Questions[currQuestion].optionB}</button>
        <button onClick={() => nextQuestion("C")}>{Questions[currQuestion].optionC}</button>
        <button onClick={() => nextQuestion("D")}>{Questions[currQuestion].optionD}</button>
        </div>
      
    </div>
  )
}

export default Quiz
