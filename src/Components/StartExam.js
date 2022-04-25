import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {CountdownTimer} from './CountdownTimer';
import { ExpiredNotice } from './ExpiredNotice';

export const StartExam = () => {
    var examId = useParams().examId
    var userId = useParams().userId
    const [exam, setexam] = useState('')
    const [questions, setquestions] = useState([])
    const [currentQuestion, setcurrentQuestion] = useState(0)
    const [showScore, setshowScore] = useState(false)
    const [score, setscore] = useState(0)
    const examMinutes = exam.examTime    
    const [hours, minutes, seconds] = CountdownTimer(examMinutes)
    
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
        }
        if (nextQuestion < questions.length) {
            setcurrentQuestion(nextQuestion);
        }
        else {
            setshowScore(true)
            submitExam(score)
        }
    }

    const previousQuestionButton = () =>{
        if(currentQuestion != 0){
            setcurrentQuestion(currentQuestion-1)
        }
    }

    const nextQuestionButton = () =>{
        if(currentQuestion != questions.length-1){
            setcurrentQuestion(currentQuestion+1)
        }
        else{
            setshowScore(true)
            submitExam(score)
        }
    }
        const submitExam = (score) =>{
            var data = {
               user: userId,
               exam: examId,
               marks: score
           }
           axios.post('http://localhost:8080/results',data).then(res=>{
               console.log(res.data.data)
           }).catch(err=>{
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
                            <li className="nav-item me-2">
                                <Link className="btn btn-outline-primary" to={`/exam/${examId}/questions`}>Add Questions</Link>
                            </li>
                            <li className="me-2">
                                <p className="btn btn-primary">Total Time: {exam.examTime} Minutes</p>
                            </li>
                            {(hours + minutes + seconds <= 0)?<ExpiredNotice />:
                                  <>{hours}:{minutes}:{seconds}</>
                            }
                            <h2></h2>
                        </ul>
                    </div>
                </div>
                <div>
                    {showScore ? (
                        <div className='score-section'>You scored {score} out of {exam.totalMarks} </div>
                    ) : (
                        <>
                            {questions.slice(questions.length-1).map(question => {
                                return (
                                    <>
                                        <div className='question-section'>
                                            <div className='question-count' key={questions[currentQuestion]._id}>
                                                <h6>Question {currentQuestion + 1}.</h6>
                                                <h6>{questions[currentQuestion].questionName}</h6>
                                            </div>
                                            <h6>{questions[currentQuestion].marks} Marks</h6>

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
                <div className="text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                            <li className="me-2">
                                <button className="btn btn-primary" onClick={() => previousQuestionButton()}>Previous Question</button>
                            </li>
                            {currentQuestion+1==questions.length?<li className="me-2">
                                <button className="btn btn-primary" onClick={() => nextQuestionButton()}>Submit Exam</button>
                            </li>:<li className="me-2">
                                <button className="btn btn-primary" onClick={() => nextQuestionButton()}>Next Question</button>
                            </li>}
                            
                        </ul>
                    </div>
            </div>
        </div>
    )
}
