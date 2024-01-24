import React from 'react';
import Question from "./Question";

const Quiz = () => {
    return (
        <div className='quiz'>
            <div className='score'>Quiz</div>
            <Question/>
            <div className="next-button">Next</div>
        </div>

    );
};

export default Quiz;