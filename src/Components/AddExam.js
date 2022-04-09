import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const AddExam = () => {
    const [examName, setexamName] = useState('')
    const [totalQuestions, settotalQuestions] = useState('')
    const [isActive, setisActive] = useState('true')
    const [subject, setsubject] = useState('6244443a29312c4ecc04197b')
    const [author, setauthor] = useState(localStorage.getItem('userId'))
    const [subjectList, setsubjectList] = useState([])
    var auth = localStorage.getItem('email')
    var navigate = useNavigate()

    const getSubjects = () => {
        axios.get('http://localhost:8080/subjects').then(res=>{
            console.log(res.data.data)
            setsubjectList(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
      getSubjects()
      {
          if(!auth){
              navigate('/login')
          }
      }
    }, [])
    

    const examNameHandler = (e) => {
        setexamName(e.target.value)
    }
    const totalQuestionsHandler = (e) => {
        settotalQuestions(e.target.value)
    }
    const isActiveHandler = (e) => {
        setisActive(e.target.value)
    }
    const subjectHandler = (e) => {
        setsubject(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        var data = {
            examName: examName,
            totalQuestions: totalQuestions,
            isActive: isActive,
            subject: subject,
            author:author
        }
        axios.post('http://localhost:8080/exams', data).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
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

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Exam</p>

                                        <form className="mx-1 mx-md-4" onSubmit={submitHandler}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="examName" id="examName" onChange={(e) => { examNameHandler(e) }} className="form-control" />
                                                    <label className="form-label" htmlFor="examName">Exam Title</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="number" name="totalQuestions" id="totalQuestions" onChange={(e) => { totalQuestionsHandler(e) }} className="form-control" />
                                                    <label className="form-label" htmlFor="totalQuestions">Total Questions</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="isActive" id="isActive" onChange={(e) => { isActiveHandler(e) }} value="1" />
                                                    <label className="form-check-label" htmlFor="isActive">Active</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="isActive" id="isActive" onChange={(e) => { isActiveHandler(e) }} value="0" />
                                                    <label className="form-check-label" htmlFor="isActive">InActive</label>
                                                </div>

                                                {/* <label htmlFor="gender" className="form-label">Status</label> */}
                                            </div>

                                            {/* <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="subject" name='subject' className="form-control" onChange={(e) => { subjectHandler(e) }} />
                                                    <label className="form-label" for="subject">Subject Id</label>
                                                </div>
                                            </div> */}

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                <select className="form-select" name="role" id='role' aria-label="Default select example" onChange={(e) => { subjectHandler(e) }}>
                                                   { 
                                                     subjectList.map((subject)=>{
                                                         return (
                                                             <option value={subject._id} key={subject._id}>{subject.subjectName}</option>
                                                         )
                                                     })
                                                   }    
                                                </select>
                                                <label className="form-label" htmlFor="subject">Subject</label>
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
