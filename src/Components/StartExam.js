import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom';

export const StartExam = () => {
    var examId = useParams().examId
    var userId = useParams().userId
    const [exam, setexam] = useState('')
    const [questions, setquestions] = useState([])
    const [currentQuestion, setcurrentQuestion] = useState(0)
    const [showScore, setshowScore] = useState(false)
    const [score, setscore] = useState(0)
    const [examSubmitted, setexamSubmitted] = useState(false)
    var examTime = exam.examTime;
    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');


    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60));
        // const hours = Math.floor((total / 1000 * 60 * 60)%24);
        return {
            total, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let { total, minutes, seconds }
            = getTimeRemaining(e);
        if (total == 0) {
            setshowScore(true)
            submitExam(score)
        }
        if (total >= 0) {

            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the begining of the variable
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    const clearTimer = (e) => {

        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('00:00:10');

        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }


    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + examTime * 60);
        return deadline;
    }

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, [examTime]);


    const getOneExam = () => {
        axios.get(`http://localhost:8080/exams/${examId}`).then(res => {
            console.log(res.data.data)
            setexam(res.data.data)
            setquestions(res.data.data.questions)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getOneExam()
    }, [])

    const handleAnswerButton = (option) => {
        const nextQuestion = currentQuestion + 1;
        if (option == questions[currentQuestion].answer) {
            setscore(score + questions[currentQuestion].marks)
            console.log(score)
        }
        if (nextQuestion < questions.length) {
            setcurrentQuestion(nextQuestion);
        }
        else {
            setshowScore(true)
            submitExam(score)
        }
    }

    // const previousQuestionButton = () => {
    //     if (currentQuestion != 0) {
    //         setcurrentQuestion(currentQuestion - 1)
    //     }
    // }

    const nextQuestionButton = () => {
        if (currentQuestion != questions.length - 1) {
            setcurrentQuestion(currentQuestion + 1)
        }
        else {
            setshowScore(true)
            submitExam(score)
        }
    }

    const submitExam = (score) => {
        // alert("You sure want to submit?")
        setexamSubmitted(true)
        var data = {
            user: userId,
            exam: examId,
            marks: score
        }
        axios.post('http://localhost:8080/results', data).then(res => {
            console.log(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">{exam.examName}</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                            <li className="me-2">
                                <h1 className="btn btn-primary">Time Remaining: {timer}</h1>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    {showScore ? (
                        <div className='d-grid gap-2 col-6'>
                            <h5>Thank You For Taking Exam!</h5>
                            <h3 className='text-success'>You scored {score} out of {exam.totalMarks}</h3> </div>
                    ) : (
                        <>
                            {questions.slice(questions.length - 1).map(question => {
                                return (
                                    <>
                                        <div>
                                            <div className='row' key={questions[currentQuestion]._id}>
                                                <h6 className='col-6'>Question {currentQuestion + 1}.</h6>
                                                <h6 className='text-center col-3'>{questions[currentQuestion].marks} Marks</h6>
                                                <h6>{questions[currentQuestion].questionName}</h6>
                                            </div>

                                        </div>
                                        <div className="d-grid gap-2 col-6">
                                            <button className='btn btn-primary text-start px-4' onClick={() => handleAnswerButton(questions[currentQuestion].option1)}>A) {questions[currentQuestion].option1}</button>
                                            <button className='btn btn-primary text-start px-4' onClick={() => handleAnswerButton(questions[currentQuestion].option2)}>B) {questions[currentQuestion].option2}</button>
                                            <button className='btn btn-primary text-start px-4' onClick={() => handleAnswerButton(questions[currentQuestion].option3)}>C) {questions[currentQuestion].option3}</button>
                                            <button className='btn btn-primary text-start px-4' onClick={() => handleAnswerButton(questions[currentQuestion].option4)}>D) {questions[currentQuestion].option4}</button>
                                        </div>
                                    </>
                                )
                            })}
                        </>
                    )}
                </div>
                {examSubmitted == true ? "" : <>
                    {currentQuestion <= questions.length ?
                        <div className="text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                {/* {currentQuestion != 0 ?
                            <li className="me-2">
                                <button className="btn btn-primary" onClick={() => previousQuestionButton()}>Previous Question</button>
                            </li> : ""} */}
                                {currentQuestion + 1 == questions.length ? <li className="me-2">
                                    <button className="btn btn-dark" onClick={() => nextQuestionButton()}>Submit Exam</button>
                                </li> : <li className="me-2">
                                    <button className="btn btn-primary" onClick={() => nextQuestionButton()}>Next Question</button>
                                </li>}

                            </ul>
                        </div> : ""
                    }
                </>}
            </div>
        </div>
    )
}
