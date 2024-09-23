import React from 'react'
import SecondComponent from './SecondComponent'

const FirstComponent = (props) => {
    console.log(props.data, props.name);
  return (
 <>
    <h1>FirstComponent: This is a child of App</h1>
    <SecondComponent/>
    <div>{props.data}</div>
 </>
  )
}

export default FirstComponent