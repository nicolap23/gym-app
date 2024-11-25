import { useState } from 'react'
import Hero from './components/Hero'
import Gen from './components/Gen'
import Workout from './components/Workout.jsx'
import { generateWorkout } from './utils/functions.js'

function App() {

  function updateWorkout(){
    if(muscles.length < 1){

      return 

    }
    let newWorkout = generateWorkout({poison, muscles, goals})
    console.log(newWorkout)
    setWorkout(newWorkout)
    
    window.location.href='#workout'
  
  }

  const [workout , setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goals, setGoals] = useState('strength_power')

  return (
   
      <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sn:text-base'>

          <Hero/>
          <Gen poison={poison} 
          setPoison={setPoison}
          muscles={muscles}
          setMuscles={setMuscles}
          setGoals={setGoals}
          goals={goals}
          updateWorkout={updateWorkout}
          />
         {workout && (<Workout workout={workout} />)}
        
      </main>
  )
}

export default App
