import React, {useEffect, useState} from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import "./Header.css";
import {getCategory, getQuestions} from "../../Redux/Actions/questionActions";
import {useDispatch, useSelector} from "react-redux";
import Variants from "../Variants/Variants";
import {decode} from "html-entities";
import {Box, Tab, Tabs} from "@mui/material";
import {TabList, TabContext, TabPanel} from '@mui/lab';
import Buttons from "../Buttons/Buttons";
import {isDisabled} from "@testing-library/user-event/dist/utils";
import {tab} from "@testing-library/user-event/dist/tab";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const Header = () => {

    const {questions, number, nowValue, onOpened} = useSelector(state => state.questionReducer)
    const location = useLocation();
    const dispatch = useDispatch();


    const [open, setOpen] = useState(false)
    const [finish, setFinish] = useState(false);
    const [defaultNumber, setDefaultNumber] = useState(10)
    const history = useHistory()
    const [randomNum, setRandomNum] = useState(1)
    const [value, setValue] = useState(1)
    const [data, setData] = useState()
    const [btn1, setBtn1] = useState(false)
    const [btn2, setBtn2] = useState(false)
    const [btn3, setBtn3] = useState(false)
    const [btn4, setBtn4] = useState(false)
    const [clicked, setClicked] = useState(0)
    const [answer1, setAnswer1] = useState(2)
    const [answer2, setAnswer2] = useState(2)
    const [answer3, setAnswer3] = useState(2)
    const [answer4, setAnswer4] = useState(2)
    const [counter, setCounter] = useState(0)
    const [choose, setChoose] = useState(false)
    const [choosen, setChoosen] = useState(true)
    const [modal, setModal] = useState(false)
    const [myStyle,setMyStyle]=useState(false)


    useEffect(() => {
        dispatch(getQuestions(defaultNumber))
    }, [defaultNumber])


    useEffect(() => {
        dispatch(getCategory())
    }, [])


    const toMain = () => {
        history.push('/Main')
        setOpen(true)
        window.location.reload();
    }
    useEffect(() => {
        if (location.pathname === "/Main") {
            setOpen(true);
        } else {
            setOpen(false)
        }
    }, [location.pathname])

    const handleChange = (event, newValue) => {
        setValue(newValue)
        setBtn1(false)
        setBtn2(false)
        setBtn3(false)
        setBtn4(false)
        setChoose(false)
        setAnswer1(2)
        setAnswer2(2)
        setAnswer3(2)
        setAnswer4(2)

        if (finish === true) {
            if (btn2 === false && randomNum === 2) {
                setAnswer2(1)
            }
            if (btn3 === false && randomNum === 3) {
                setAnswer3(1)
            }
            if (btn1 === false && randomNum === 1) {
                setAnswer1(1)
            }
            if (btn4 === false && randomNum === 4) {
                setAnswer4(1)
            }
        }
    }

    const finishButton = () => {
        if (onOpened !== true) {

            if (clicked <= 1) {
                if (btn2 === false && randomNum === 2) {
                    setAnswer2(1)
                }
                if (btn3 === false && randomNum === 3) {
                    setAnswer3(1)
                }
                if (btn1 === false && randomNum === 1) {
                    setAnswer1(1)
                }
                if (btn4 === false && randomNum === 4) {
                    setAnswer4(1)
                }
                setModal(!modal);
                setFinish(true)
                setClicked(clicked + 1)
            }
        } else {
            if (btn2 === false && randomNum === 2) {
                setAnswer2(2)
            }
            if (btn3 === false && randomNum === 3) {
                setAnswer3(2)
            }
            if (btn1 === false && randomNum === 1) {
                setAnswer1(2)
            }
            if (btn4 === false && randomNum === 4) {
                setAnswer4(2)
            }
            setModal(modal);
            setFinish(false)
            setClicked(clicked)
        }
    }
    const nextTab = () => {
        if (value !== (number > 0 ? number : defaultNumber)) {
            setValue(value + 1);
        }
        if (value + 1) {
            setChoose(false)
            setAnswer1(2)
            setAnswer2(2)
            setAnswer3(2)
            setAnswer4(2)
        }
        if (finish === true) {
            if (btn2 === false && randomNum === 2) {
                setAnswer2(1)
            }
            if (btn3 === false && randomNum === 3) {
                setAnswer3(1)
            }
            if (btn1 === false && randomNum === 1) {
                setAnswer1(1)
            }
            if (btn4 === false && randomNum === 4) {
                setAnswer4(1)
            }
        }
    }
    const previousTab = () => {
        if (value !== 1) {
            setValue(value - 1)
        }
        if (value - 1) {
            setChoose(false)
            setAnswer1(2)
            setAnswer2(2)
            setAnswer3(2)
            setAnswer4(2)
        }
        if (finish === true) {
            if (btn2 === false && randomNum === 2) {
                setAnswer2(1)
            }
            if (btn3 === false && randomNum === 3) {
                setAnswer3(1)
            }
            if (btn1 === false && randomNum === 1) {
                setAnswer1(1)
            }
            if (btn4 === false && randomNum === 4) {
                setAnswer4(1)
            }
        }
    }
    const submit = () => {
        if (btn1 === true && randomNum === 1 || btn2 === true && randomNum === 2 || btn3 === true && randomNum === 3 || btn4 === true && randomNum === 4) {
            setCounter(counter + 1)
            setChoose(true)
            setBtn1(false)
            setBtn2(false)
            setBtn3(false)
            setBtn4(false)
            if (btn1 === true && randomNum === 1) {
                setAnswer1(1)
            }

            if (btn2 === true && randomNum === 2) {
                setAnswer2(1)
            }
            if (btn3 === true && randomNum === 3) {
                setAnswer3(1)
            }
            if (btn4 === true && randomNum === 4) {
                setAnswer4(1)
            }


        }
        if (btn1 === true && randomNum !== 1 || btn2 === true && randomNum !== 2 || btn3 === true && randomNum !== 3 || btn4 === true && randomNum !== 4) {
            setCounter(counter)
            setChoose(true)
            if (btn1 === true && randomNum !== 1) {
                setAnswer1(0)
                if (randomNum === 2) {
                    setAnswer2(1)
                }
                if (randomNum === 3) {
                    setAnswer3(1)
                }
                if (randomNum === 4) {
                    setAnswer4(1)
                }
            }
            if (btn2 === true && randomNum !== 2) {
                setAnswer2(0)
                if (randomNum === 1) {
                    setAnswer1(1)
                }
                if (randomNum === 3) {
                    setAnswer3(1)
                }
                if (randomNum === 4) {
                    setAnswer4(1)
                }
            }
            if (btn3 === true && randomNum !== 3) {
                setAnswer3(0)
                if (randomNum === 2) {
                    setAnswer2(1)
                }
                if (randomNum === 1) {
                    setAnswer1(1)
                }
                if (randomNum === 4) {
                    setAnswer4(1)
                }
            }
            if (btn4 === true && randomNum !== 4) {
                setAnswer4(0)
                if (randomNum === 2) {
                    setAnswer2(1)
                }
                if (randomNum === 3) {
                    setAnswer3(1)
                }
                if (randomNum === 1) {
                    setAnswer1(1)
                }
            }
        }
    }


    useEffect(() => {
        setData(questions)
    }, [getQuestions()])


    const btnclicked1 = () => {
        if (choose === true || finish === true) {
            setBtn1(false)
            setBtn2(false)
            setBtn3(false)
            setBtn4(false)
        } else {
            setChoose(false)
            setBtn1(!btn1)
            setBtn2(false)
            setBtn3(false)
            setBtn4(false)
        }
    }

    const btnclicked2 = () => {
        if (choose === true || finish === true) {
            setBtn1(false)
            setBtn2(false)
            setBtn3(false)
            setBtn4(false)
        } else {
            setChoose(false)
            setBtn1(false)
            setBtn2(!btn2)
            setBtn3(false)
            setBtn4(false)
        }
    }

    const btnclicked3 = () => {
        if (choose === true || finish === true) {
            setBtn1(false)
            setBtn2(false)
            setBtn3(false)
            setBtn4(false)
        } else {
            setChoose(false)
            setBtn1(false)
            setBtn2(false)
            setBtn3(!btn3)
            setBtn4(false)
        }
    }

    const btnclicked4 = () => {
        if (choose === true || finish === true) {
            setBtn1(false)
            setBtn2(false)
            setBtn3(false)
            setBtn4(false)
        } else {
            setChoose(false)
            setBtn1(false)
            setBtn2(false)
            setBtn3(false)
            setBtn4(!btn4)
        }
    }


    useEffect(() => {
        setRandomNum(
            Math.floor(Math.random() * 4) + 1
        )
    }, [value])


    const handleClick = (id) => {
        if (answer1===1 || answer1===0 || answer2===1 || answer2===0 || answer3===1 || answer3===0 || answer4===1 || answer4===0 ){
        setMyStyle(prevState => ({
            ...myStyle,
            [id]: !prevState[id]
    }))}

    }

    let clickAnswer = () => myStyle ? setMyStyle(false) : setMyStyle(true);
    let answerColor = myStyle ? "tabTrue" : "tabFalse";

    return (
        <>


                {/*<li className={`quizChoices ${answerColor}${index}`}*/}
                {/*    onClick={() => clickAnswer()} */}
            <div className="container-fluid" style={
                open ? {backgroundColor: "#02897A"} : {backgroundColor: "#0012ff"}
            }>
                <div className="container first-cont">
                    <p onClick={() => toMain()} className="tomain">FinalExam</p>
                    <p className={open ? "d-none" : "nowNum"}>{value}/{number}</p>
                    <button className={open ? "d-none" : ""} onClick={finishButton}>Finish</button>
                </div>
            </div>
            {open ?
                ""

                : <>
                    <div>
                        <Modal isOpen={modal} toggle={finishButton}>
                            <ModalHeader
                                toggle={finishButton}>Siz {number > 0 ? number : defaultNumber}dan </ModalHeader>
                            <ModalBody>
                                {counter} javobni tog'ri topdingiz
                            </ModalBody>
                            <ModalFooter>
                                <button className={"Go-home"} onClick={() => toMain()}><Link to={"/Main"}>Go Home</Link>
                                </button>
                                <Button color="secondary" onClick={finishButton}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div className="container">
                        <TabContext value={value}

                        >
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                <TabList onChange={handleChange} indicatorColor="primary"
                                         aria-label="lab API tabs example">
                                    {
                                        questions?.map((item, index) => (
                                            <Tab className={`Tabs`}
                                                 onClick={() => clickAnswer(index)}
                                                 label={index + 1}
                                                 value={index + 1}/>
                                        ))
                                    }
                                </TabList>
                            </Box>
                            <div className="row">
                                <div className="col-12">
                                    {
                                        questions?.map((item, index) =>
                                            (
                                                <TabPanel value={index + 1} tabIndex={index + 1}>
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h3>{decode(item.question)}</h3>
                                                        </div>
                                                        <div className="card-body">
                                                            <button
                                                                onClick={btnclicked1}
                                                                className={answer1 === 2 ? (btn1 ? "activebtn" : "answerbtn") : answer1 === 1 ? ("trueAnswer") : answer1 === 0 ? "falseAnswer" : ""}>{randomNum === 1 ? decode(item.correct_answer) : decode(item.incorrect_answers[0])}</button>
                                                            <button
                                                                onClick={btnclicked2}
                                                                className={answer2 === 2 ? (btn2 ? "activebtn" : "answerbtn") : answer2 === 1 ? ("trueAnswer") : answer2 === 0 ? "falseAnswer" : ""}>{randomNum === 2 ? decode(item.correct_answer) : decode(item.incorrect_answers[1])}</button>
                                                            <button
                                                                onClick={btnclicked3}
                                                                className={answer3 === 2 ? (btn3 ? "activebtn" : "answerbtn") : answer3 === 1 ? ("trueAnswer") : answer3 === 0 ? "falseAnswer" : ""}>{randomNum === 3 ? decode(item.correct_answer) : decode(item.incorrect_answers[2])}</button>
                                                            <button
                                                                onClick={btnclicked4}
                                                                className={answer4 === 2 ? (btn4 ? "activebtn" : "answerbtn") : answer4 === 1 ? ("trueAnswer") : answer4 === 0 ? "falseAnswer" : ""}>{randomNum === 1 ? decode(item.incorrect_answers[0]) : "" || randomNum === 3 ? decode(item.incorrect_answers[2]) : "" || randomNum === 2 ? decode(item.incorrect_answers[1]) : "" || randomNum === 4 ? decode(item.correct_answer) : decode(item.incorrect_answers[0])}</button>

                                                        </div>
                                                        <div className="card-footer d-flex justify-content-between">
                                                            <button className="previousbtn"
                                                                    onClick={previousTab}>Previous
                                                            </button>
                                                            <button className={"submitbtn"}
                                                                    onClick={submit}
                                                                    disabled={btn1 === false && btn2 === false && btn3 === false && btn4 === false || choose}>Submit
                                                            </button>
                                                            <button className={"nextbtn"} onClick={nextTab}>Next
                                                            </button>
                                                        </div>

                                                    </div>
                                                </TabPanel>
                                            ))
                                    }
                                </div>
                            </div>
                        </TabContext>
                    </div>
                </>}
        </>
    );
};

export default Header;