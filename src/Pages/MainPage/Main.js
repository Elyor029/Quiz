import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategory, getQuestions} from "../../Redux/Actions/questionActions";
import {useHistory, useLocation} from "react-router-dom";
import {Category} from "@mui/icons-material";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css"


let harnarsa = [
    5, 10, 15, 20, 25, 30
];

const Main = () => {

    const history = useHistory()

    const dispatch = useDispatch();

    const {questions, category} = useSelector(state => state.questionReducer)
    const [number, setNumber] = useState(5)
    const [categoryID, setCategoryID] = useState(9)
    const [opened,setOpened]=useState(false)

    useEffect(() => {
        dispatch(getQuestions(number))
    }, [number,opened])

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    const openQuiz = () => {
        history.push('/Quiz')
        setOpened(true)
    }


    return (
        <div>
            <div className="container">
                <div className="row first-row">
                    <div className="col-8 first-col">
                        <label htmlFor="quiznum" className="numberQuiz">Number Of Questions</label>
                        <select className="first-select" name="quiznum" id="quiznum"
                                onChange={e => setNumber(e.target.value)}>
                            {harnarsa?.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row second-row">
                    <div className="col-8 second-col">
                        <label htmlFor="category">Select Language</label>
                        <select className="second-select" name="quizCategory" id="quizCategory"
                                onChange={e => setCategoryID(e.target.value)}>
                            <option value="English">English</option>
                        </select>
                        <div className="d-flex justify-center">
                        <button onClick={openQuiz}>Start Quiz</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;