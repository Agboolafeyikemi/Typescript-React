import { shuffleArray } from "../components/utlis";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  answer:
};

export type QuestionState = Question & { answer: string[] };

export enum Difficulty {
  HARD = "HARD",
  MEDIUM = "medium",
  EASY = "easy"
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  console.log("data", data);
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer
    ])
  }));
};
