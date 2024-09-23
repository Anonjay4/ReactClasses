import './App.css';
import { IoMdHome } from "react-icons/io";
import Image from "./images/communication.png";
import React from 'react';


const Body = () => {
  let myStyle = {
    backgroundColor: "blue",
    fontSize: "40px",
  }
  return (
    <div className="App">
      <img className='img' src={Image} alt="" />

      <h1
      style={{
        backgroundColor: "brown",
        fontSize:"20px",
      }}>
        Hello World
      </h1>

      <h2 style={myStyle}>React Class</h2>

      <h3 className='tea'>External Styling</h3>
      <div className='container submit'>react</div>
      <button className='btn btn-primary'>submit</button>


    </div>
  )
}

export default Body