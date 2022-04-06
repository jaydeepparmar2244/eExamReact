import axios from 'axios';
import React, { useState } from 'react'

export const Search = () => {
    const [examName, setexamName] = useState('')

    const searchHandler = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8080/exams/search',{params:{examName:examName}}).then(res=>{
            console.log(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    } 
  return (
         <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: "35px"}}>
             <form onSubmit={searchHandler}>
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-10">
                        <div className="row g-2">
                            <div className="col-md-12">
                                <input type="text" className="form-control border-0 py-3" name="exam" placeholder="Search Exam" onChange={(e)=>{setexamName(e.target.value)}}/>
                            </div>
                            {/* <div className="col-md-4">
                                <select className="form-select border-0 py-3">
                                    <option defaultValue>Property Type</option>
                                    <option value="1">Property Type 1</option>
                                    <option value="2">Property Type 2</option>
                                    <option value="3">Property Type 3</option>
                                </select>
                            </div> */}
                            {/* <div className="col-md-4">
                                <select className="form-select border-0 py-3">
                                    <option defaultValue>Location</option>
                                    <option value="1">Location 1</option>
                                    <option value="2">Location 2</option>
                                    <option value="3">Location 3</option>
                                </select>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button type='submit' className="btn btn-dark border-0 w-100 py-3">Search</button>
                    </div>
                    
                </div>
            </div>
            </form>
        </div>
  )
}
