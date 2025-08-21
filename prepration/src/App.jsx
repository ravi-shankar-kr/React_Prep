import React, { useState } from 'react'
import './app.css'
import Form from './Form.jsx'

const App = () => {
  const [a, setA] = useState(10)
  return (
    
    <div className=' m-2'  >
      <Form />
      <h1 className='text-5xl font-semibold' >number is: {a}</h1>
      <button className='bg-blue-500 text-white py-1 px-4 rounded mx-2 hover:bg-black' onClick={() => setA(a + 1)}>Increment</button>
    </div>
  )
}

export default App