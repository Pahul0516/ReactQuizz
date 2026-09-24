import {useEffect, useState} from "react";

export default function QuestionTimer({timeout, onTimeout, mode}) {

    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        console.log('Seting timeout')
        const timer = setTimeout(onTimeout, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [timeout, onTimeout])

    useEffect(() => {
        console.log('Seting interval')

        const interval = setInterval( ()=>{
            setRemainingTime(prevRemainingTime => prevRemainingTime - 10)
        },10)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (<progress
        max={timeout}
        value={remainingTime}
        id="question-time"
        className= {mode}/> )
}