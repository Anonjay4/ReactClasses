import React from 'react'

const Button = (props) => {
  return (
    <>
        <button onClick={props.anyFunction} className={props.sty}> <img src= {props.spotifyImg} className= {props.styling} alt="" /> </button>
    </>
  )
}

export default Button 