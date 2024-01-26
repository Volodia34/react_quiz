import React from 'react';

const Answer = ({answerText,onSelectAnswer,index,currentAnswer,correctAnswer}) => {
    const latterMapping = ['A','B','C','D']

    const isCorrectAnswer = currentAnswer && answerText === correctAnswer
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer
    const correntAnswerClass= isCorrectAnswer ? 'correct-answer' : ''
    const wrongAnswerClass = isWrongAnswer ? 'wrong-answer' : ''
    const disabledClass = currentAnswer ? 'disabled-answer' : ''
    return (
        <div className={`answer ${correntAnswerClass} ${wrongAnswerClass} ${disabledClass}`} onClick={() => onSelectAnswer(answerText)}>
            <div className="answer-letter">{latterMapping[index]}</div>
            <div className="answer-text">{answerText}</div>
        </div>
    );
};

export default Answer;