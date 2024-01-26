import React, {useContext, useEffect, useReducer, useState} from 'react';
import Question from "./Question";

import {QuizContext} from "../contexts/quiz";


const Quiz = React.memo(() => {
    const [quizState,dispatch] = useContext(QuizContext)
    const apiUrl = "https://opentdb.com/api.php?amount=10&encode=url3986"

    useEffect(() => {
        setTimeout(() => {
            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => {
                    console.log('data', data)
                    dispatch({ type: 'LOADED_QUESTIONS', payload: data.results })
                })
        }, 2000); // Змінивши на 2 секунди, можливо, допоможе уникнути помилки 429
    }, []);


    return (
        <div className='quiz'>
            {quizState.showResults && (
                <div className="results">
                    <div className='congratulations'>Congratulations</div>
                    <div className='results-info'>
                        <div>You habe cmpleated the quiz.</div>
                        <div>You`ve got {quizState.correntAnswerCount} of {quizState.questions.length }</div>
                    </div>
                    <div className='next-button' onClick={() => dispatch({type: "RESTART"})}>Restart</div>
                </div>
            )}
            {!quizState.showResults && quizState.questions.length > 0 && (
                <div>
                    <div
                        className='score'>Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
                    <Question question={quizState.questions}/>
                    <div className="next-button" onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Next Question</div>
                </div>)
            }
        </div>

    );
});

export default Quiz;