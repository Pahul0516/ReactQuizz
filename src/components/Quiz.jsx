import {useCallback, useState} from "react";
import QUESTIONS from "./../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {

    const [userAnswer, setUserAnswer] = useState([])

    const activeQuestionIndex = userAnswer.length
    const quizIsComplete = QUESTIONS.length === userAnswer.length

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, selectedAnswer];
        });
    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete){
        return (<Summary userAnswers={userAnswer}></Summary>

    )}



    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>)
}