import React from 'react'
import SQI from "./images/sqi.jpg"

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={SQI} alt="" />
      </div>
        <ul>
            <p>About</p>
            <p>Programmes</p>
            <p>Admissions</p>
            <p>E-portal</p>
            <p>SQI Schoolarship</p>
            <p>News</p>
        </ul>
    </nav>
  )
}

export default Navbar