import React, { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Subjects } from './Components/Subjects';
import { Exams } from './Components/Exams';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { Route, Routes } from 'react-router-dom';
import { AddExam } from './Components/AddExam';
import { AddSubject } from './Components/AddSubject';
import { UpdateExam } from './Components/UpdateExam';
import { BackToTop } from './Components/BackToTop';
import { Home } from './Components/Home';
import { ViewOneExam } from './Components/ViewOneExam';
import {ViewQuestionsOfExam} from './Components/ViewQuestionsOfExam'
import { AddQuestionsToExam } from './Components/AddQuestionsToExam';
import { UpdateQuestion } from './Components/UpdateQuestion';
import { ExamsOfSubject } from './Components/ExamsOfSubject';
import { ResetPassword } from './Components/ResetPassword';
import { ResetPasswordButton } from './Components/ResetPasswordButton';
import { UserProfile } from './Components/UserProfile';
import { StartExam } from './Components/StartExam';
import { Contact } from './Components/Contact';
import { About } from './Components/About';

// import { Spinner } from './Components/Spinner';
function App() {
  return (
    <React.Fragment>
    
      {/* <div className="container-xxl bg-white p-0"> */}
      {/* <Spinner/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/exams' element={<Exams/>}></Route>
        <Route path='/subjects' element={<Subjects/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/exam/new' element={<AddExam/>}></Route>
        <Route path='/subject/new' element={<AddSubject/>}></Route>
        <Route path='/exams/:examId' element={<UpdateExam/>}></Route>
        <Route path='/exam/:examId' element={<ViewOneExam/>}></Route>
        <Route path='/exams/:examId/questions' element={<ViewQuestionsOfExam/>}></Route>
        <Route path='/exam/:examId/questions' element={<AddQuestionsToExam/>}></Route>
        <Route path='/exam/:examId/question/:questionId' element={<UpdateQuestion/>}></Route>
        <Route path='/subject/:subjectId/exams' element={<ExamsOfSubject/>}></Route>
        <Route path='/forgotPassword' element={<ResetPasswordButton/>}></Route>
        <Route path='/reset/:token' element={<ResetPassword/>}></Route>
        <Route path='/profile/:userId' element={<UserProfile/>}></Route>
        <Route path='/exam/:examId/:userId' element={<StartExam/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      
      <Footer/>
      <BackToTop/>
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
