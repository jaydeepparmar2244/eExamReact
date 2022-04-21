import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { StartExam } from './StartExam'

export const ViewOneExam = () => {
    var examId = useParams().examId
    var userId = localStorage.getItem('userId')
    const [exam, setexam] = useState('')

    const getOneExam = () => {
        axios.get(`http://localhost:8080/exams/${examId}`).then(res => {
            console.log(res.data.data)
            setexam(res.data.data)
        }).catch(err => {
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
                                <Link className="btn btn-outline-primary" to={`/exams/${examId}/questions`}>View Questions</Link>
                            </li>
                            <li className="nav-item me-2">
                                <li className="btn btn-outline-primary">Total Time: {exam.examTime} Minutes</li>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <h3>Exam Instructions</h3>
                            <h6>-  You must use a functioning webcam and microphone.<br/>
                               -  No cell phones or other secondary devices in the room or test area.<br/>
                               -  Your desk/table must be clear or any materials except your test-taking device.<br/>
                               -  No one else can be in the room with you.<br/>
                               -  No talking .<br/>
                               -  The testing room must be well-lit and you must be clearly visible.<br/>
                               -  No dual screens/monitors.<br/>
                               -  Do not leave the camera.<br/>
                               -  No use of additional applications or internet.
                               </h6>
                    </div>
                    <div className='col-lg-7 text-start text-lg-end wow slideInRight'>
                    <Link className='btn btn-primary' to={`/exam/${examId}/${userId}`}>Start Exam</Link>
                    </div>
                </div>

            </div>
        </div>
  )
}
