import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <div className="container-fluid header bg-white p-0">
  <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
    <div className="col-md-6 p-5 mt-lg-5">
      <h1 className="display-5 animated fadeIn mb-4">Take <span className="text-primary"> Any Exam</span> And Evaluate Yourself!</h1>
      <p className="animated fadeIn mb-4 pb-2">ExamKiller is a place to self-evaluate yourself by taking exams of various subjects and categories.</p>
      <Link className="btn btn-primary py-3 px-5 me-3 animated fadeIn" to='/exams'>Explore Exams!</Link>
    </div>
    <div className="col-md-6 animated fadeIn">
      <div className="header-carousel">
        <div className="owl-carousel-item">
          <img className="img-fluid" src="img/exam/2152177.jpg" alt='Examkiller'/>
        </div>
        {/* <div className="owl-carousel-item">
          <img className="img-fluid" src="img/carousel-2.jpg" alt />
        </div> */}
      </div>
    </div>
  </div>
</div>

    )
}
