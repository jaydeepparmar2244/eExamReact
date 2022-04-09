import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Subjects = () => {
    const [subjectsList, setsubjectsList] = useState([])
    const getSubjects = () => {
        axios.get('http://localhost:8080/subjects').then(res => {
            console.log(res.data.data)
            setsubjectsList(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getSubjects();
    }, [])

    return (
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp a" data-wow-delay="0.1s">
                        <h1 className="mb-3">Subjects</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    
                    <div className="row g-4">
                        {
                            subjectsList.map((subject => {
                                return (
                                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s" key={subject._id}>
                                        <Link className="cat-item d-block bg-light text-center rounded p-3" to={`/subject/${subject._id}/exams`}>
                                            <div className="rounded p-4">
                                                <div className="icon mb-3">
                                                    <img className="img-fluid" src='img/icon-apartment.png' alt="Icon" />
                                                </div>
                                                <h6>{subject.subjectName}</h6>
                                                <span>{subject.subjectDescription}</span>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }))
                        }
                    </div>
                </div>
            </div>
    )
}


