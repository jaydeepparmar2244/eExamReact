import axios from 'axios'
import React, { useState } from 'react'

export const AddSubject = () => {
    const [subjectName, setsubjectName] = useState('')
    const [subjectDescription, setsubjectDescription] = useState('')
    const [isActive, setisActive] = useState('')

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
        axios.post('http://localhost:8080/subjects',data).then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <section class="vh-100">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black">
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Subject</p>

                                        <form class="mx-1 mx-md-4" onSubmit={submitHandler}>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" name="subjectName" id="subjectName" onChange={(e)=>{subjectNameHandler(e)}} class="form-control" />
                                                    <label class="form-label" for="subjectName">Subject Name</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" name="subjectDescription" id="subjectDescription" onChange={(e)=>{subjectDescriptionHandler(e)}} class="form-control" />
                                                    <label class="form-label" for="subjectDescription">Subject Description</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="isActive" id="isActive" onChange={(e)=>{isActiveHandler(e)}} value="1" />
                                                    <label class="form-check-label" for="isActive">Active</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="isActive" id="isActive" onChange={(e)=>{isActiveHandler(e)}} value="0" />
                                                    <label class="form-check-label" for="isActive">InActive</label>
                                                </div>

                                                {/* <label htmlFor="gender" class="form-label">Status</label> */}
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
