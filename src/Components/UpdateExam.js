import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateExam = () => {
    const examId = useParams().examId
    const [exam, setexam] = useState([])
    const [examName, setexamName] = useState(exam.examName)
    const [totalQuestions, settotalQuestions] = useState(exam.totalQuestions)
    const [totalMarks, setTotalMarks] = useState(exam.totalMarks)
    const [isActive, setisActive] = useState(exam.isActive)
    const [subject, setsubject] = useState(exam.subject)
    const [author, setAuthor] = useState(exam.author)
    const [subjectList, setsubjectList] = useState([])

    var navigate = useNavigate()
    var auth = localStorage.getItem('userId')

    const getExams = () =>{
        axios.get(`https://eexamsystem.onrender.com/exams/${examId}`).then(res=>{
            console.log(res.data.data)
            setexam(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    const getSubjects = () => {
        axios.get('https://eexamsystem.onrender.com/subjects').then(res=>{
            console.log(res.data.data)
            setsubjectList(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
      getExams()
    }, [])
    
    useEffect(() => {
        getSubjects()
    }, [])

    useEffect(() => {
        {
            if (!auth) {
                navigate('/login')
            }
        }
    }, [])
    
    const examNameHandler = (e) =>{
        setexamName(e.target.value)
    }
    const totalQuestionsHandler = (e) => {
        settotalQuestions(e.target.value)
    }
    const totalMarksHandler = (e) =>{
        setTotalMarks(e.target.value)
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
            totalMarks:totalMarks,
            isActive:isActive,
            subject:subject,
            author:author
        }
        axios.put(`https://eexamsystem.onrender.com/exams/${examId}`,data).then(res=>{
            console.log(res.data.data)
            navigate('/exams')

            console.log('Exam Updated!')
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
        <section className="vh-100" style={{backgroundColor: "#eee"}}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Exam</p>

                                        <form className="mx-1 mx-md-4" onSubmit={submitHandler}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="examName" id="examName" className="form-control" defaultValue={exam.examName} onChange={(e)=>{examNameHandler(e)}}/>
                                                    <label className="form-label" htmlFor="examName">Exam Title</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="number" name="totalQuestions" id="totalQuestions" defaultValue={exam.totalQuestions} onChange={(e)=>{totalQuestionsHandler(e)}} className="form-control" />
                                                    <label className="form-label" htmlFor="totalQuestions">Total Questions</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="number" name="totalMarks" id="totalMarks" defaultValue={exam.totalMarks} onChange={(e)=>{totalMarksHandler(e)}} className="form-control" />
                                                    <label className="form-label" htmlFor="totalMarks">Total Marks</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="isActive" id="isActive" onChange={(e)=>{isActiveHandler(e)}} value="1" defaultValue={exam.isActive}/>
                                                    <label className="form-check-label" htmlFor="isActive">Active</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="isActive" id="isActive" onChange={(e)=>{isActiveHandler(e)}} value="0" defaultValue={exam.isActive}/>
                                                    <label className="form-check-label" htmlFor="isActive">InActive</label>
                                                </div>
                                                {/* <label htmlFor="gender" className="form-label">Status</label> */}
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <select className="form-select" name="subject" id='subject' defaultValue={exam.subject} onChange={(e)=>{subjectHandler(e)}}>
                                                {
                                                    subjectList.map((subj)=>{
                                                        return(
                                                            <option value={subj._id} key={subj._id}>{subj.subjectName}</option>
                                                        )
                                                    })
                                                    
                                                }    
                                                </select>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Update</button>
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
