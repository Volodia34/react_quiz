import React, {useContext, useReducer, useState} from 'react';
import Question from "./Question";

import {QuizContext} from "../contexts/quiz";


const Quiz = () => {
    const [quizState,dispatch] = useContext(QuizContext)
    console.log(quizState)
    console.log('render', quizState)

    return (
        <div className='quiz'>
            <div className='score'>Quiz</div>
            <Question question={quizState.question}/>
            <div className="next-button" onClick={() =>  dispatch({type: 'NEXT_QUESTION'})}>Next Question {quizState.currentQuestionIndex}</div>
        </div>

    );
};

export default Quiz;