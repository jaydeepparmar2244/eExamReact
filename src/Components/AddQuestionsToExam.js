import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const AddQuestionsToExam = () => {
    var navigate = useNavigate()

    const examId = useParams().examId;
    const [questionName, setquestionName] = useState('')
    const [option1, setoption1] = useState('')
    const [option2, setoption2] = useState('')
    const [option3, setoption3] = useState('')
    const [option4, setoption4] = useState('')
    const [answer, setanswer] = useState('')
    const [marks, setmarks] = useState(0)
    var auth = localStorage.getItem('email')

    useEffect(() => {
        {
            if (!auth) {
                navigate('/login')
            }
        }
    }, [])

    const submitHandler = (e) => {
        var question = {
            questionName: questionName,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
            answer: answer,
            marks:marks
        }
        e.preventDefault()
        axios.post(`https://eexamsystem.onrender.com/${examId}/questions`, question).then(res => {
            console.log(res.data.data)
            navigate(`/exams/${examId}/questions`)
        }).catch(err => {
            console.log(err)
        })
        navigate(`/exam/${examId}`)
    }
    return (
        <section className="vh-100" >
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Question</p>

                                        <form className="mx-1 mx-md-4" onSubmit={submitHandler}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="questionName" id="questionName" onChange={(e) => { setquestionName(e.target.value) }} className="form-control" />
                                                    <label className="form-label" htmlFor="questionName">Question</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="option1" id="option1" onChange={(e) => { setoption1(e.target.value) }} className="form-control" />
                                                    <label className="form-label" htmlFor="option1">Option 1</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="option2" id="option2" onChange={(e) => { setoption2(e.target.value) }} className="form-control" />
                                                    <label className="form-label" htmlFor="option2">Option 2</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="option3" id="option3" onChange={(e) => { setoption3(e.target.value) }} className="form-control" />
                                                    <label className="form-label" htmlFor="option3">Option 3</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="option4" id="option4" onChange={(e) => { setoption4(e.target.value) }} className="form-control" />
                                                    <label className="form-label" htmlFor="option4">Option 4</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <select className="form-select" name="answer" id='answer' aria-label="Default select example" onChange={(e) => { setanswer(e.target.value) }}>
                                                        {/* { 
                                                     subjectList.map((subject)=>{
                                                         return ( */}
                                                        <option>Select Answer</option>
                                                        <option value={option1}>{option1}</option>
                                                        <option value={option2}>{option2}</option>
                                                        <option value={option3}>{option3}</option>
                                                        <option value={option4}>{option4}</option>
                                                        {/* )
                                                     })
                                                   }     */}
                                                    </select>
                                                    <label className="form-label" htmlFor="subject">Answer</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="number" name="marks" id="marks" onChange={(e) => { setmarks(e.target.value) }} className="form-control" />
                                                    <label className="form-label" htmlFor="marks">Marks of Question</label>
                                                </div>
                                            </div>


                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Add</button>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
