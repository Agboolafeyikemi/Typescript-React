import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";

//components
import { fetchQuizQuestions } from "./components/API";

//Types
import { QuestionState, Difficulty } from "./components/API";

const TOTAL_QUESTION = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(
    "fetchQuizQuestions",
    fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY)
  );

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTION,
      Difficulty.EASY
    );
  }; 
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startQuiz}>
        Start
      </button>
      <p className="score"> Score:</p>
      <p>Loading Questions ....</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTION}
        question={questions[number].question}
        answer={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
