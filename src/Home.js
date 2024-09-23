import React from 'react'
import { useState } from 'react'

const Home = ()=>{
    let name = 'Ayo'
    const [username, setusername] = useState ("Kola")
    const [input1, setinput1] = useState ("")
    console.log(input1);
    

    const handleClick = () => {
        name = "Tolu"
        console.log(name);
        setusername("Bola")
    }
    return(
        <>
            <h1>{name}</h1>
            <p>{username}</p>
            <button onClick={handleClick}>Click</button>
            <input onChange={(e)=>setinput1(e.target.value) } type="text" />
        </>
    )
}

export default Home