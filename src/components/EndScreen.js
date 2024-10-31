import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/Questions';
import "../App.css";

function EndScreen() {
    const {score, setScore, setGameState} = useContext(QuizContext);
  return (
    <div className="EndScreen">
        <h1>Quiz Finished</h1>
        <h3 className="score">Your Result: {score} / {Questions.length}</h3>
        <button onClick={() => {setGameState("menu"); setScore(0);}}>Back to Menu</button>
    </div>
  )
}

export default EndScreen
