import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export const ExamsOfSubject = () => {
    var subjectId = useParams().subjectId;
    const [subject, setsubject] = useState('')
    const [examList, setexams] = useState([])
    var navigate  = useNavigate()
    var auth = localStorage.getItem('email')
    const getSubject = () => {
        axios.get(`http://localhost:8080/subjects/${subjectId}`).then(res => {
            console.log(res.data.data)
            setsubject(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }
    const getExams = () => {
        axios.get(`http://localhost:8080/subjects/${subjectId}/exams`).then(res => {
            console.log(res.data.data)
            setexams(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const deleteExam = (examId) => {
        if (!auth) {
            navigate('/login')
        }
        else {
            axios.delete(`http://localhost:8080/exams/${examId}`).then(res => {
                console.log(res.data.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        getExams()
        getSubject()
    },)



    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">{subject.subjectName} Exams</h1>
                            <p>various exams from basic to advanced level of subject {subject.subjectName} </p>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                            </li>
                            <li className="nav-item me-0">
                                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">For Rent</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            {
                                examList.map((exam => {
                                    return (
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s" key={exam._id}>
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <Link to={`/exam/${exam._id}`}><img className="img-fluid" src='/img/exam/exam.png' alt="" /></Link>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{subject.subjectName}</div>
                                                {/* <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{exam.totalMarks}</div> */}
                                            </div>
                                            <div className="p-4 pb-0">
                                                <Link className="d-block h5 mb-2" to={`/exam/${exam._id}`}>{exam.examName}</Link>
                                                <h6 className="text-primary mb-3">{exam.totalMarks} Marks</h6>
                                                <p><i className="fa fa-question text-primary me-2"></i>{exam.totalQuestions} Questions</p>
                                                {/* {localStorage.getItem('userId')} */}
                                            </div>
                                            <div className="d-flex border-top">
                                               {/* {exam.author._id} */}
                                               
                                                {localStorage.getItem('userId')=== exam.author._id || localStorage.getItem('role') === 'Admin' ?<>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-edit text-primary me-2"></i><Link to={`/exams/${exam._id}`}>Update Exam</Link></small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-trash text-primary me-2"></i><Link to='/exams' onClick={(e) => { deleteExam(exam._id) }}>Delete Exam</Link></small></>:""}
                                                <ToastContainer
                                                    position="bottom-right"
                                                    autoClose={5000}
                                                    hideProgressBar
                                                    newestOnTop={false}
                                                    closeOnClick
                                                    rtl={false}
                                                    pauseOnFocusLoss
                                                    draggable
                                                    pauseOnHover
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }))
                            }
                            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                <Link className="btn btn-primary py-3 px-5" to='/exams'>Browse All Exams</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
