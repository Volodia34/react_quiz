import React from 'react';
import Answer from "./Answer";

const Question = ({question}) => {
    return (
        <div>
            <div className='question'>Quesion</div>
            <div className="answers">
                <Answer/>
                <Answer/>
                <Answer/>
                <Answer/>
            </div>

        </div>

    );
};

export default Question;