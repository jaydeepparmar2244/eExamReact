import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export const Login = () => {
	const [email, setemail] = useState('')
	const [password, setpassword] = useState('')
	var navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		var data = {
			email: email,
			password: password
		}
		await axios.post('https://eexamsystem.onrender.com/login', data).then(res => {
			console.log(res.data)
			if (res.data.status == 200) {
				localStorage.setItem('userId',res.data.data._id)
				localStorage.setItem('email',res.data.data.email);
				localStorage.setItem('role',res.data.data.role.roleName);
				localStorage.setItem('firstName',res.data.data.firstName)
				localStorage.setItem('lastName',res.data.data.lastName)
				toast.success(res.data.msg, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: 0,
				});
				setTimeout(() => {
					navigate('/')
				}, 1000);
			}
			else{
				toast.error(res.data.msg, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: 0,
				});
				setTimeout(() => {
					navigate('/login')
				}, 2000);
			}
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
						<form onSubmit={submitHandler}>
							<div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
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
							</div>

							<div className="divider d-flex align-items-center my-4">
								<p className="text-center fw-bold mx-3 mb-0">Or</p>
							</div>

							{/* <!-- Email input --> */}
							<div className="form-outline mb-4">
								<input type="email" id="email" name='email' className="form-control form-control-lg"
									placeholder="Enter a valid email address" onChange={(e) => { setemail(e.target.value) }} />
								<label className="form-label" for="email">Email address</label>
							</div>

							{/* <!-- Password input --> */}
							<div className="form-outline mb-3">
								<input type="password" id="password" name='password' className="form-control form-control-lg"
									placeholder="Enter password" onChange={(e) => { setpassword(e.target.value) }} />
								<label className="form-label" for="password">Password</label>
							</div>

							<div className="d-flex justify-content-between align-items-center">
								{/* <!-- Checkbox --> */}
								<div className="form-check mb-0">
									<input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
									<label className="form-check-label" for="form2Example3">
										Remember me
									</label>
								</div>
								<Link to="/forgotPassword" className="text-body">Forgot password?</Link>
							</div>

							<div className="text-center text-lg-start mt-4 pt-2">
								<button type="submit" className="btn btn-primary btn-lg"
									style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
								<p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup"
									className="link-danger">Register</Link></p>
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
