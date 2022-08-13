import {
    GET_CATEGORY,
    GET_NUMBER, GET_OPENED,
    GET_QUESTIONS,
    GET_VALUE,
    LOADING_FALSE,
    LOADING_TRUE
} from "../ActionTypes/ActionTypes";
import axios from "axios";

export const getQuestions = (number,value,categoryID,defaultNumber,opened) => {
    return async (dispatch) => {

        dispatch({
            type: LOADING_TRUE
        });

        try {

            const res = await axios.get(decodeURI(`https://opentdb.com/api.php?amount=${number > 0 ? number : defaultNumber}&type=multiple`));


            dispatch({
                type: GET_QUESTIONS,
                payload: res.data,
            });
            dispatch({
                type: GET_NUMBER,
                payload: number,
            })
            dispatch({
                type:GET_VALUE,
                payload:value,
            })
            dispatch({
                type:GET_OPENED,
                payload:opened,
            })


        } catch (err) {
            dispatch({
                type: LOADING_FALSE
            })
        }
    };
};


export const getCategory = () => async (dispatch) => {

    dispatch({
        type: LOADING_TRUE
    });

    try {

        const res = await axios.get(`https://opentdb.com/api_category.php`);


        dispatch({
            type: GET_CATEGORY,
            payload: res.data
        });


    } catch (err) {
        dispatch({
            type: LOADING_FALSE
        })
    }
};