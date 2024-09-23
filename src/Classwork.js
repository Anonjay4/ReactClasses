import React from 'react'
import { useState } from 'react'

const Classwork = () => {
    const[input1, setinput1] = useState("")
    const[input2, setinput2] = useState("")
    const [userarray, setuserarray] = useState([])
    let obj1

    const btnClick = ()=>{
        obj1 = {email: input1 , password: input2}
        console.log(obj1);
        setuserarray([...userarray , obj1])
        console.log(userarray);
        
    }
  return (
    <div>
        <input onChange={(e)=>setinput1(e.target.value) } type="text" />
        <input onChange={(e)=>setinput2(e.target.value) } type="text" />
        <button onClick={btnClick}>Click</button>
        {userarray.map((user)=>(
            <>
                <h1>{user.username}</h1>
                <h1>{user.email}</h1>
            </>
        ))}
    </div>
  )
}

export default Classwork