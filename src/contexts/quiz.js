import {createContext, useReducer} from "react";
import questions from "../data";
import {normalizeQuestions, shuffleAnswers} from "../helpers";

const initialState = {
    currentQuestionIndex: 0,
    questions: questions,
    showResults: false,
      answers: shuffleAnswers(questions[0]),
    currentAnswer: '',
    correntAnswerCount: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case "SELECT_ANSWER": {
            const correntAnswerCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer ? state.correntAnswerCount + 1 : state.correntAnswerCount
            return {
                ...state,
                currentAnswer: action.payload,
                correntAnswerCount
            }
        }
        case "NEXT_QUESTION": {
            const showResults = state.currentQuestionIndex === state.questions.length - 1
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1
            const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex])
            return {...state, currentQuestionIndex, showResults,answers,currentAnswer: '' }
        }
        case "RESTART": {
            return initialState
        }
        case "LOADED_QUESTIONS": {
            const normalizedQuestions = normalizeQuestions(action.payload)
            return {
                ...state,
                questions: normalizedQuestions,
                answers: shuffleAnswers(normalizedQuestions[0])
            }
        }

        default: {
            return state
        }
    }

}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, initialState)
    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>

    )
}