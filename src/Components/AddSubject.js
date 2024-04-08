import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AddSubject = () => {
    const [subjectName, setsubjectName] = useState('')
    const [subjectDescription, setsubjectDescription] = useState('')
    const [isActive, setisActive] = useState('true')
    var auth = localStorage.getItem('email')
    var navigate = useNavigate()
    useEffect(() => {
        {
            if (!auth) {
                navigate('/login')
            }
        }
    }, [])
    

    const subjectNameHandler = (e) => {
        setsubjectName(e.target.value)
    }
    const subjectDescriptionHandler = (e) => {
        setsubjectDescription(e.target.value)
    }
    const isActiveHandler = (e) => {
        setisActive(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        var data = {
            subjectName:subjectName,
            subjectDescription:subjectDescription,
            isActive:isActive
        }
        axios.post('https://eexamsystem.onrender.com/subjects',data).then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <section className="vh-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Subject</p>

                                        <form className="mx-1 mx-md-4" onSubmit={submitHandler}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="subjectName" id="subjectName" onChange={(e)=>{subjectNameHandler(e)}} className="form-control" />
                                                    <label className="form-label" for="subjectName">Subject Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" name="subjectDescription" id="subjectDescription" onChange={(e)=>{subjectDescriptionHandler(e)}} className="form-control" />
                                                    <label className="form-label" for="subjectDescription">Subject Description</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="isActive" id="isActive" onChange={(e)=>{isActiveHandler(e)}} value="1" />
                                                    <label className="form-check-label" for="isActive">Active</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="isActive" id="isActive" onChange={(e)=>{isActiveHandler(e)}} value="0" />
                                                    <label className="form-check-label" for="isActive">InActive</label>
                                                </div>

                                                {/* <label htmlFor="gender" className="form-label">Status</label> */}
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
