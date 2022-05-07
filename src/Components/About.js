import React from 'react'
// import ReactWOW from 'react-wow'

export const About = () => {
  return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" alt='' src="img/exam/e-e-exam.png"/>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4">Best Place To Self-Evaluate Yourself!</h1>
                        <p className="mb-4">ExamKiller is our new journey of aiming to provide students to provide mock exams to self-evaluate themselves.</p>
                        <p><i className="fa fa-check text-primary me-3"></i>100+ Exams</p>
                        <p><i className="fa fa-check text-primary me-3"></i>25+ Subjects</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Better graphic representation to show where you lacks</p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="/#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
  )
}
