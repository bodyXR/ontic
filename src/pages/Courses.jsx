import React from 'react'
import header from '../assets/header.png'
import coursesPage from '../assets/coursesPage.png'
import Footer from '../componenets/Footer'

const Courses = () => {
  return (
    <div>
      <img src={header} alt="" />
      <img src={coursesPage} alt="" style={{marginTop:'30px'}} />
      <Footer/>
    </div>
  )
}

export default Courses
