import React, { useState } from 'react'
import { Link,NavLink,useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';


export const Navbar = () => {
    var navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        toast.success("You're Logged Out!", {
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
    }
    

    return (
        <div className="container-fluid nav-bar bg-transparent bg-white">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <Link to="/" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src='/img/exam/logo.png' alt="Icon" style={{ width: "30px", height: "30px" }} />
                    </div>
                    <h1 className="m-0 text-primary">ExamKiller</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <NavLink exact to="/" activeClassName="nav-item nav-link active" className="nav-item nav-link">Home</NavLink>
                        <NavLink exact to="/exams" activeClassName="nav-item nav-link active" className="nav-item nav-link">Exams</NavLink>
                        <NavLink exact to="/subjects" activeClassName="nav-item nav-link active" className="nav-item nav-link">Subjects</NavLink>
                        <NavLink exact to="/contact" activeClassName="nav-item nav-link active" className="nav-item nav-link">Contact US</NavLink>
                        <NavLink exact to="/about" activeClassName="nav-item nav-link active" className="nav-item nav-link">About US</NavLink>
                        {localStorage.getItem('role')==='Admin'?<Link to="/subject/new" className="nav-item nav-link">Add Subject</Link>:""}
                    </div>
                
                        {localStorage.getItem('userId')===null?<><div className='m-3'>
                        <Link to="/login" className="btn btn-primary px-3 d-none d-lg-flex">Login</Link>
                        </div>
                        <div>
                        <Link to="/signup" className="btn btn-primary px-3 d-none d-lg-flex">Sign Up</Link>
                        </div></>: <><Link to={`/profile/${localStorage.getItem('userId')}`}>
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src='/img/exam/logo.png' alt="Icon" style={{ width: "30px", height: "30px" }} />
                        {localStorage.getItem('firstName')}
                    </div>
                    </Link><div className='m-3'><Link to="/" className="btn btn-primary px-3 d-none d-lg-flex" onClick={logout}>Logout</Link>
                        </div></>}
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
                        {/* {console.log(localStorage.getItem('isLoggedIn'))} */}
                </div>
            </nav>
        </div>
    )
}
