import React from 'react'
import { Link } from 'react-router-dom'

export const Contact = () => {
    return (
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="bg-light rounded p-3">
                        <div className="bg-white rounded p-4" id='a'>
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                    <img className="img-fluid rounded w-100" src="img/exam/agent.jpeg" alt="" />
                                </div>
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="mb-4">
                                        <h1 className="mb-3">Contact Us to Collaborate For Your Institution!</h1>
                                        <p>Use Our Platform to test your students and evaluate themselves.</p>
                                    </div>
                                    <Link to="/#" className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Make A Call</Link>
                                    <Link to="/#" className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2"></i>Get Appoinment</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
