import React from 'react'
import { useState } from 'react'

const Password = () => {
    const [pass , setpass] = useState(false)
   function changePass () {
        if (pass === true){
            setpass(false)
        }else{
            setpass(true)
        }

    }
  return (
    <>
        <label htmlFor="">Password:</label>
        <input type={pass ? "text" : "password"} />
        <button onClick={changePass}>Show</button>
    </>
  )
}

export default Password