import axios from 'axios'
import React, { useState } from 'react'
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

    const submitHandler = (e) => {
        var question = {
            questionName:questionName,
            option1:option1,
            option2:option2,
            option3:option3,
            option4:option4,
            answer:answer
        }
        e.preventDefault()
        axios.post(`http://localhost:8080/exams/${examId}/questions`,question).then(res=>{
            console.log(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
        navigate(`/exam/${examId}`)
    }
  return (
     <section class="vh-100" >
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black">
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Question</p>

                                        <form class="mx-1 mx-md-4" onSubmit={submitHandler}>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" name="questionName" id="questionName" onChange={(e) => { setquestionName(e.target.value)}} class="form-control" />
                                                    <label class="form-label" for="questionName">Question</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" name="option1" id="option1" onChange={(e) => { setoption1(e.target.value) }} class="form-control" />
                                                    <label class="form-label" for="option1">Option 1</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" name="option2" id="option2" onChange={(e) => { setoption2(e.target.value) }} class="form-control" />
                                                    <label class="form-label" for="option2">Option 2</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" name="option3" id="option3" onChange={(e) => { setoption3(e.target.value) }} class="form-control" />
                                                    <label class="form-label" for="option3">Option 3</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" name="option4" id="option4" onChange={(e) => { setoption4(e.target.value) }} class="form-control" />
                                                    <label class="form-label" for="option4">Option 4</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                <select class="form-select" name="answer" id='answer' aria-label="Default select example" onChange={(e) => { setanswer(e.target.value) }}>
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
                                                <label class="form-label" for="subject">Answer</label>
                                                </div>
                                            </div>

                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" class="btn btn-primary btn-lg">Add</button>
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
