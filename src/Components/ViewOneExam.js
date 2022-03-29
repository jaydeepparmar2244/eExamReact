import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const ViewOneExam = () => {
    var examId = useParams().examId
    const [exam, setexam] = useState('')
    const [questions, setquestions] = useState([])

    const getOneExam = () => {
        axios.get(`http://localhost:8080/exams/${examId}`).then(res => {
            console.log(res.data.data)
            setexam(res.data.data)
            setquestions(res.data.data.questions)
            console.log(res.data.data.questions)
        }).catch(err => {
            console.log(err)
        })
    }

    const deleteQuestion = (qId) => {
        axios.delete(`http://localhost:8080/exams/${examId}/questions/${qId}`).then(res=>{
            console.log(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
        getOneExam()
    }, [])

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
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">Set Timer</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <table className="table auto-index">
                    <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Question</th>
                            <th scope="col">Option-1</th>
                            <th scope="col">Option-2</th>
                            <th scope="col">Option-3</th>
                            <th scope="col">Option-4</th>
                            <th scope="col">Answer</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            questions.map((question) => {
                                return (
                                    <tr>
                                        <th scope="row" key={question._id}></th>
                                        <td>{question.questionName}</td>
                                        <td>{question.option1}</td>
                                        <td>{question.option2}</td>
                                        <td>{question.option3}</td>
                                        <td>{question.option4}</td>
                                        <td>{question.answer}</td>
                                        <td><Link to={`/exam/${exam._id}/question/${question._id}`} className='btn btn-dark'>Update</Link></td>
                                        <td><Link to={`/exam/${exam._id}`} className='btn btn-danger' onClick={(e) => { deleteQuestion(question._id) }}>Delete</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}
