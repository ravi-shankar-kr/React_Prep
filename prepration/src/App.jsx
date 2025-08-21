import React, { useState } from 'react'
import './app.css'

const App = () => {
  const [a, setA] = useState(10)
  return (
    
    <div  >
      <h1 className='text-5xl font-semibold' >number is: {a}</h1>
      <button className='bg-blue-500 text-white py-2 px-4 rounded mx-2' onClick={() => setA(a + 1)}>Increment</button>
    </div>
  )
}

export default App