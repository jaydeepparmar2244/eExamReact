import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UpdateExam = () => {
    const examId = useParams().examId
    const [exam, setexam] = useState([])
    const [examName, setexamName] = useState('')
    const [totalQuestions, settotalQuestions] = useState('')
    const [isActive, setisActive] = useState('')
    const [subject, setsubject] = useState('')

    const getExams = () =>{
        axios.get(`http://localhost:8080/exams/${examId}`).then(res=>{
            console.log(res.data.data)
            setexam(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
      getExams()
    }, [])
    
    const examNameHandler = (e) =>{
        setexamName(e.target.value)
    }
    const totalQuestionsHandler = (e) => {
        settotalQuestions(e.target.value)
    }
    const isActiveHandler = (e) =>{
        setisActive(e.target.value)
    }
    const subjectHandler =(e)=>{
        setsubject(e.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        var data = {
            examId:examId,
            examName:examName,
            totalQuestions:totalQuestions,
            isActive:isActive,
            subject:subject
        }
        axios.put(`http://localhost:8080/exams/${examId}`,data).then(res=>{
            console.log(res.data.data)
            console.log('Exam Updated!')
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div>
        <section class="vh-100" style={{backgroundColor: "#eee"}}>
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black">
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Exam</p>

                                        <form class="mx-1 mx-md-4" onSubmit={submitHandler}>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" name="examName" id="examName" class="form-control" defaultValue={exam.examName} onChange={(e)=>{examNameHandler(e)}}/>
                                                    <label class="form-label" for="examName">Exam Title</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="number" name="totalQuestions" id="totalQuestions" onChange={(e)=>{totalQuestionsHandler(e)}} class="form-control" defaultValue={exam.totalQuestions}/>
                                                    <label class="form-label" for="totalQuestions">Total Questions</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="isActive" id="isActive" onChange={(e)=>{isActiveHandler(e)}} value="1" defaultValue={exam.isActive}/>
                                                    <label class="form-check-label" for="isActive">Active</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="isActive" id="isActive" onChange={(e)=>{isActiveHandler(e)}} value="0" defaultValue={exam.isActive}/>
                                                    <label class="form-check-label" for="isActive">InActive</label>
                                                </div>

                                                {/* <label htmlFor="gender" class="form-label">Status</label> */}
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" id="subject" name='subject' class="form-control" onChange={(e)=>{subjectHandler(e)}} defaultValue={exam.subject}/>
                                                    <label class="form-label" for="subject">Subject Id</label>
                                                </div>
                                            </div>

                                            {/* <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <select class="form-select" name="role" id='role' aria-label="Default select example" >
                                                    <option value='620dd220953533bffb9841d1'>Student</option>
                                                    <option value="621312ddc32ebeb25d1d1de0">Faculty</option>
                                                </select>
                                            </div> */}

                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" class="btn btn-primary btn-lg">Update</button>
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
    </div>
  )
}
