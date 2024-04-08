import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export const ResetPasswordButton = () => {
    const [email, setemail] = useState('')
    var navigate = useNavigate()

    const resetPasswordLink = (e) => {
        e.preventDefault();
        var data = {
            email: email
        }
        axios.post('https://eexamsystem.onrender.com/forgotPassword', data).then(res => {
            console.log(res.data.data)
            toast.info(res.data.msg, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
            if(res.data.data!=null){
                navigate('/login')
            }
            
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <section className="vh-100 my-5">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
                            alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={resetPasswordLink}>
                            {/* <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
								<p className="lead fw-normal mb-0 me-3">Sign in with</p>
								<button type="button" className="btn btn-primary btn-floating mx-1">
									<i className="fab fa-facebook-f"></i>
								</button>

								<button type="button" className="btn btn-primary btn-floating mx-1">
									<i className="fab fa-twitter"></i>
								</button>

								<button type="button" className="btn btn-primary btn-floating mx-1">
									<i className="fab fa-linkedin-in"></i>
								</button>
							</div> */}

                            {/* <div className="divider d-flex align-items-center my-4">
								<p className="text-center fw-bold mx-3 mb-0">Or</p>
							</div> */}
                            <h3>Reset Password</h3>

                            <div className="form-outline mb-4">
                                <input type="email" id="email" name='email' className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" onChange={(e) => { setemail(e.target.value) }} />
                                <label className="form-label" for="email">Your Email address</label>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Email Me Link</button>

                            </div>
                            <ToastContainer
                                position="bottom-right"
                                autoClose={5000}
                                hideProgressBar
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />

                        </form>
                    </div>
                </div>
            </div>

        </section>

    )
}
