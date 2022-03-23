import './App.css';
import React from 'react';
import { Navbar } from './Components/Navbar';
import { Header } from './Components/Header';
import { Search } from './Components/Search';
import { Subjects } from './Components/Subjects';
import { About } from './Components/About';
import { Exams } from './Components/Exams';
import { Contact } from './Components/Contact';
import { Team } from './Components/Team';
import { Testimonial } from './Components/Testimonial';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { Route, Routes } from 'react-router-dom';
import { AddExam } from './Components/AddExam';
import { AddSubject } from './Components/AddSubject';
import { UpdateExam } from './Components/UpdateExam';
// import { Spinner } from './Components/Spinner';

function App() {
  // componentDidMount(); {
  //   new WOW.WOW({
  //     live: false
  // }).init();
  // }
  return (
    <React.Fragment>
      {/* <div className="container-xxl bg-white p-0"> */}
      {/* <Spinner/> */}
      <Navbar/>
      {/* <Header/>
      <Search/>
      <Category/>
      <About/>
      <Exams/>
      <Contact/>
      <Team/>
      <Testimonial/>
      <Footer/> */}
      <Routes>
        <Route path='/exams' element={<Exams/>}></Route>
        <Route path='/subjects' element={<Subjects/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/exam/new' element={<AddExam/>}></Route>
        <Route path='/subject/new' element={<AddSubject/>}></Route>
        <Route path='/exams/:examId' element={<UpdateExam/>}></Route>
      </Routes>
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
