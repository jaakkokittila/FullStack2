import React from 'react'

const Course = (props) =>(
    
    <div>
        <p><b>{props.name}</b></p>
        <div>{props.parts}</div>
        <div>Total of {props.total} exercises</div>
    </div>
  
)

export default Course