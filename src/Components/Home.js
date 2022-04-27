import React from 'react'
import { About } from './About'
import { Contact } from './Contact'
import { Exams } from './Exams'
import { Header } from './Header'
import { Search } from './Search'
import { Subjects } from './Subjects'
import { Team } from './Team'
import { Testimonial } from './Testimonial'

export const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Search />
            {/* <Exams /> */}
            <About />
            <Subjects />
            <Contact />
            {/* <Team /> */}
            {/* <Testimonial /> */}
        </React.Fragment>
    )
}
