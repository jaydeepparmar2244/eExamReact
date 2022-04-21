import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const StartExam = () => {
    var examId = useParams().examId
    var userId = useParams().userId
    const [exam, setexam] = useState('')
    const getOneExam = () => {
        axios.get(`http://localhost:8080/exams/${examId}`).then(res => {
            console.log(res.data.data)
            setexam(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getOneExam()
    }, [])

     // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(exam.examTime);
  
    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the begining of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next   
        // const time = `00:${exam.examTime}:00`;
        setTimer('00:00:20')
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + exam.examTime*60);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
    

  return (
    <div className="container-xxl py-5">
    <div className="container">
        <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
                <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                    <h1 className="mb-3">{exam.examName}</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                </div>
            </div>
            <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                    <li className="nav-item me-2">
                        <Link className="btn btn-outline-primary" to={`/exam/${examId}/questions`}>Add Questions</Link>
                    </li>
                    <li className="nav-item me-2">
                        <li className="btn btn-outline-primary">Total Time: {exam.examTime} Minutes</li>
                        <h2>{timer}</h2>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</div>
  )
}
