import axios from 'axios'
import React, { useState } from 'react'

export const ResetPasswordButton = () => {
    const [email, setemail] = useState('')

    const resetPasswordLink = (e) => {
        e.preventDefault();
        var data = {
            email:email
        }
        axios.post('http://localhost:8080/forgotPassword',data).then(res => {
            console.log(res.data.data)
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

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Reset Password</p>

                                        <form className="mx-1 mx-md-4" onSubmit={resetPasswordLink}>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" name="email" id="email" className="form-control" onChange={(e) => { setemail(e.target.value) }} />
                                                    <label className="form-label" htmlFor="email">Enter Your Email ID</label>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Email Me Password Reset Link</button>
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
