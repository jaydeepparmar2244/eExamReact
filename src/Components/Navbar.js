import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {

    const logout = () =>{
        localStorage.clear();
    }
  return (
        <div className="container-fluid nav-bar bg-transparent bg-white">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <Link to="/" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src='img/exam/logo.png' alt="Icon" style={{width: "30px", height: "30px"}}/>
                    </div>
                    <h1 className="m-0 text-primary">ExamKiller</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/exams" className="nav-item nav-link">Exams</Link>
                        <Link to="/subjects" className="nav-item nav-link">Subjects</Link>
                        <Link to="/exam/new" className="nav-item nav-link">Add Exam</Link>
                        <Link to="/subject/new" className="nav-item nav-link">Add Subject</Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Error</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                        
                    </div>
                    <div className='m-3'>
                    <Link to="/login" className="btn btn-primary px-3 d-none d-lg-flex">Login</Link>
                    </div>
                    <div>
                    <Link to="/signup" className="btn btn-primary px-3 d-none d-lg-flex">Sign Up</Link>
                    </div>
                    <div className='m-3'>
                    <Link to="/" className="btn btn-primary px-3 d-none d-lg-flex" onClick={logout}>Logout</Link>
                    </div>
                </div>
            </nav>
        </div>
  )
}
