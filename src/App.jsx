import { useState } from 'react'
import Learner from './components/Learner'
import data from './data/learners.js'
import Score from './components/Score.jsx'
import './App.css'

function App() {
  const[learnerData,setlearnerData]=useState(data)
  console.log(learnerData)
  return (
    <div>
      <h1>Learner details</h1>
      {
        learnerData.map((learner,index)=>(
          <Learner 
          key={index}
          {...learner}
           />
          

        ))
      }
   
   
    </div>
  )
}

export default App
