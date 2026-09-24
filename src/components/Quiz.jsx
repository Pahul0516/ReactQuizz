import {useCallback, useState} from "react";
import QUESTIONS from "./../questions.js";
import quizComplete from "./../assets/quiz-complete.png"
import Question from "./Question.jsx";

export default function Quiz() {

    const [answerState, setAnswerState] = useState('')
    const [userAnswer, setUserAnswer] = useState([])


    const activeQuestionIndex = answerState==='' ? userAnswer.length : userAnswer.length-1
    const quizIsComplete = QUESTIONS.length === userAnswer.length

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered')
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, selectedAnswer];
        });
        setTimeout(()=>{
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct')
            }
            else{
                setAnswerState('wrong')
            }
            setTimeout(()=>{
                setAnswerState('')
            },2000)
        },1000)
    }, [activeQuestionIndex])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete){
        return (
            <div id="summary">
                <img src={quizComplete} alt="Quiz Completed" />
                <h2>Quiz Completed!</h2>
            </div>
    )}



    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                questionText={QUESTIONS[activeQuestionIndex].text}
                answers={QUESTIONS[activeQuestionIndex].answers}
                answerState={answerState}
                selectedAnswer={userAnswer[userAnswer.length-1]}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>)
}