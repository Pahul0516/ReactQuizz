import QuestionTimer from "./QuestionTimer.jsx";
import Answer from "./Answers.jsx";
import QUESTIONS from "./../questions.js";
import { useState } from "react";

export default function Question({
                                     index,
                                     onSelectAnswer,
                                     onSkipAnswer
                                 }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(selectedAnswer) {
        setAnswer({
            selectedAnswer: selectedAnswer,
            isCorrect: null
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: selectedAnswer,
                isCorrect: QUESTIONS[index].answers[0] === selectedAnswer
            });

            setTimeout(() => {
                onSelectAnswer(selectedAnswer);
            }, 2000);
        }, 1000);
    }

    let answerState = '';

    // ✅ FIX: Check if selectedAnswer has a value, not if it equals true
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div id="question">
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
                mode={answerState}
            />
            <h2>{QUESTIONS[index].text}</h2>
            <Answer
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}