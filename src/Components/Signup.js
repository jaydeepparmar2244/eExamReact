import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export const Signup = () => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [gender, setgender] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [role, setrole] = useState('620dd220953533bffb9841d1')
    const [roleList, setroleList] = useState([])

    let navigate = useNavigate()

    const getRoles = () => {
        axios.get('http://localhost:8080/roles').then(res => {
            console.log(res.data.data)
            setroleList(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getRoles()
    }, [])


    const firstNameHandler = (e) => {
        setfirstName(e.target.value)
    }
    const lastNameHandler = (e) => {
        setlastName(e.target.value)
    }
    const genderHandler = (e) => {
        setgender(e.target.value)
    }
    const emailHandler = (e) => {
        setemail(e.target.value)
    }
    const passwordHandler = (e) => {
        setpassword(e.target.value)
    }
    const roleHandler = (e) => {
        setrole(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        var data = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            email: email,
            password: password,
            role: role,
        }
        await axios.post('http://localhost:8080/users', data).then(res => {
            console.log(res.data.data)
            localStorage.setItem('userId', res.data.data._id)
            localStorage.setItem('email', res.data.data.email);
            localStorage.setItem('role', res.data.data.role.roleName);
            localStorage.setItem('firstName', res.data.data.firstName)
            localStorage.setItem('lastName', res.data.data.lastName)
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
            }, 2000);
        }).catch(err => {
            console.log(err)
            toast.error(err, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
            setTimeout(() => {
                navigate('/signup')
            }, 2000);
        })
        navigate('/exams')
    }


    return (
        <section>
            <div className="container h-100 my-4">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4" onSubmit={submitHandler} encType="multipart/form-data">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    {firstName.length > 0 && firstName.length <= 3 ? "Firstname must be of minimum 3 characters!" : ""}
                                                    <input type="text" name="firstName" id="firstName" className="form-control" onChange={(e) => { firstNameHandler(e) }} />
                                                    <label className="form-label" for="firstName">Your First Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    {lastName.length > 0 && lastName.length <= 3 ? "Lastname must be of minimum 3 characters!" : ""}
                                                    <input type="text" name="lastName" id="lastName" className="form-control" onChange={(e) => { lastNameHandler(e) }} />
                                                    <label className="form-label" for="lastName">Your Last Name</label>
                                                </div>
                                            </div>
                                            {gender.length <= 0 ? "Select Your Gender!" : ""}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="gender" id="gender" value="female" onChange={(e) => { genderHandler(e) }} />
                                                    <label className="form-check-label" for="gender">Female</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="gender" id="gender" value="male" onChange={(e) => { genderHandler(e) }} />
                                                    <label className="form-check-label" for="gender">Male</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="gender" id="gender" value="other" onChange={(e) => { genderHandler(e) }} />
                                                    <label className="form-check-label" for="gender">Other</label>
                                                </div>
                                                {/* <label htmlFor="gender" className="form-label">Gender :</label> */}
                                            </div>


                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    {email.includes('@') ? "" : "Enter Correct Email ID"}
                                                    <input type="email" id="email" name='email' className="form-control" onChange={(e) => { emailHandler(e) }} required />
                                                    <label className="form-label" for="email">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    {password.includes('@') || password.includes('#') || password.includes('$') || password.includes('%') || password.includes('^') || password.includes('*') ? "" : "Password Must Have A Special Character"}
                                                    <br />{/\d/.test(password) ? "" : "Password Must Have A Number"}
                                                    <br />{/[a-zA-Z]/.test(password) ? "" : "Password Must Have A Alphabet"}
                                                    <input type="password" id="password" name='password' className="form-control" onChange={(e) => { passwordHandler(e) }} />
                                                    <label className="form-label" for="password">Set Password</label>
                                                </div>
                                            </div>


                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <select className="form-select" name="role" id='role' aria-label="Default select example" onChange={(e) => { roleHandler(e) }}>
                                                    {/* <option value='#' disabled>Select</option>   */}
                                                    {
                                                        roleList.map((role) => {
                                                            return (
                                                                <option value={role._id} key={role._id}>{role.roleName}</option>
                                                            )
                                                        })
                                                        // <option value='620dd220953533bffb9841d1'>Student</option>
                                                        // <option value="621312ddc32ebeb25d1d1de0">Faculty</option>
                                                    }
                                                </select>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
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
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="img/exam/eeexamm.png" className="img-fluid" alt="Sample image" />
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
