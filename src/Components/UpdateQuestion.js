import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateQuestion = () => {
    var examId = useParams().examId
    var questionId = useParams().questionId
    const [question, setquestion] = useState([])
    const [questionName, setquestionName] = useState(question.questionName)
    const [option1, setoption1] = useState(question.option1)
    const [option2, setoption2] = useState(question.option2)
    const [option3, setoption3] = useState(question.option3)
    const [option4, setoption4] = useState(question.option4)
    const [answer, setanswer] = useState(question.answer)
    var navigate = useNavigate()
    var auth = localStorage.getItem('email')

    const getQuestion = () => {
        axios.get(`http://localhost:8080/exams/${examId}/questions/${questionId}`).then(res=>{
            console.log(res.data.data)
            setquestion(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
      getQuestion()
    }, [])
    useEffect(() => {
        {
            if (!auth) {
                navigate('/login')
            }
        }
    }, [])
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        var data = {
            questionId:questionId,
            questionName:questionName,
            option1:option1,
            option2:option2,
            option3:option3,
            option4:option4,
            answer:answer
        }
        axios.put(`http://localhost:8080/exams/${examId}/questions/${questionId}`,data).then(res=>{
            console.log('question updated!',res.data.data)
        }).catch(err=>[
            console.log(err)
        ])
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

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Question</p>

                                        <form className="mx-1 mx-md-4" onSubmit={submitHandler}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="questionName" id="questionName" defaultValue={question.questionName} onChange={(e) => { setquestionName(e.target.value)}} className="form-control" />
                                                    <label className="form-label" for="questionName">Question</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="option1" id="option1" defaultValue={question.option1} onChange={(e) => { setoption1(e.target.value) }} className="form-control" />
                                                    <label className="form-label" for="option1">Option 1</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="option2" id="option2" defaultValue={question.option2} onChange={(e) => { setoption2(e.target.value) }} className="form-control" />
                                                    <label className="form-label" for="option2">Option 2</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="option3" id="option3" defaultValue={question.option3} onChange={(e) => { setoption3(e.target.value) }} className="form-control" />
                                                    <label className="form-label" for="option3">Option 3</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="option4" id="option4" defaultValue={question.option4} onChange={(e) => { setoption4(e.target.value) }} className="form-control" />
                                                    <label className="form-label" for="option4">Option 4</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                <select className="form-select" name="answer" id='answer' aria-label="Default select example" defaultValue={question.answer} onChange={(e) => { setanswer(e.target.value) }}>
                                                   {/* { 
                                                     subjectList.map((subject)=>{
                                                         return ( */}
                                                             <option value={option1}>{option1}</option>
                                                             <option value={option2}>{option2}</option>
                                                             <option value={option3}>{option3}</option>
                                                             <option value={option4}>{option4}</option>
                                                         {/* )
                                                     })
                                                   }     */}
                                                </select>
                                                <label className="form-label" for="subject">Answer</label>
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
