import ReactDOM from 'react-dom'
import React from 'react'
import Course from './components/Course.js'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  



  return (
    <div>
      {courses.map(course => <Course key={course.name} name={course.name} 
      total={course.parts.reduce((sum, course) =>  sum + course.exercises, 0 )}
      parts={course.parts.map(part=> <div key={part.id} >{part.name} {part.exercises} </div>)}
       />)}
    </div>
  )
}





ReactDOM.render(<App />, document.getElementById('root'))