import {
    GET_CATEGORY,
    GET_NUMBER, GET_OPENED,
    GET_QUESTIONS,
    GET_VALUE,
    LOADING_FALSE,
    LOADING_TRUE
} from "../ActionTypes/ActionTypes";

const initialState = {
    loading: false,
    questions:[],
    category:[],
    number:0,
    nowValue:1,
    onOpened:false,

};

export const questionReducer = (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {

        case LOADING_TRUE:
            return {
                ...state,
                loading: true,
            };

        case LOADING_FALSE:

            return {
                ...state,
                loading: false,
            };
        case GET_QUESTIONS:
            return{
                ...state,
                questions: payload.results,
                loading: false,
            }
        case GET_CATEGORY:
            return {
                ...state,
                category: payload.trivia_categories,
                loading: false,
            }
        case GET_NUMBER:
            return {
                ...state,
                number: payload,
                loading: false,
            }
        case GET_VALUE:
            return {
                ...state,
                nowValue: payload,
                loading: false,
            }
        case GET_OPENED:
            return {
                ...state,
                onOpened: payload,
                loading: false,
            }

        default:
            return state;
    }
};