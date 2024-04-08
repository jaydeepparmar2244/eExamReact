import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UserProfile = () => {
  var userId = useParams().userId;
  const [userDetail, setuserDetail] = useState([])
  const [resultList, setresultList] = useState([])
  const [examList, setexamList] = useState([])
  const getUserDetail = () => {
    axios.get(`https://eexamsystem.onrender.com/users/${userId}`).then(res => {
      console.log(res.data.data)
      setuserDetail(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  const getResultsOfUser = () => {
    axios.get(`https://eexamsystem.onrender.com/results/${userId}`).then(res => {
      console.log(res.data.data)
      setresultList(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  const getExamsofAuthor = () =>{
    axios.get(`https://eexamsystem.onrender.com/user/${userId}/exams`).then(res=>{
      console.log(res.data.data)
      setexamList(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(() => {
    getUserDetail();
    getResultsOfUser();
    getExamsofAuthor();
  },)

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item active" aria-current="page">Your Dashboard</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} />
                <h5 className="my-3">{userDetail.firstName}</h5>
                <p className="text-muted mb-1">{localStorage.getItem('role')}</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">Follow</button>
                  <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning" />
                    <p className="mb-0">https://mdbootstrap.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: '#333333' }} />
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }} />
                    <p className="mb-0">@mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }} />
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userDetail.firstName} {userDetail.lastName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userDetail.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Gender</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userDetail.gender}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-12 mb-md-0">
                  <div className="card-body">
                  {localStorage.getItem('role') === 'Student'?
                  <>
                    <p className="mb-12"><span className="text-primary font-italic me-1">Your Results</span></p>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Exam Title</th>
                          <th scope="col">Subject</th>
                          <th scope="col">Total Marks</th>
                          <th scope="col">Your Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultList.map(result => {
                          return (
                            <tr>
                              <th scope="row">{result.exam.examName}</th>
                              <td>{result.exam.subject.subjectName}</td>
                              <td>{result.exam.totalMarks}</td>
                              <td>{result.marks}</td>
                              {/* <td>@mdo</td> */}
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                    </>
                  :<>
                  <p className="mb-12"><span className="text-primary font-italic me-1">Your Added Exams:</span></p>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Exam Title</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Total Marks</th>
                        <th scope="col">Total Questions</th>
                        <th scope='col'>Total Time(in Minutes)</th>
                        <th scope='col'>Active</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examList.map(exam => {
                        return (
                          <tr>
                            <th scope="row">{exam.examName}</th>
                            <td>{exam.subject.subjectName}</td>
                            <td>{exam.totalMarks}</td>
                            <td>{exam.totalQuestions}</td>
                            <td>{exam.examTime}</td>
                            <td>{(exam.isActive).toString()}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  </>}
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
