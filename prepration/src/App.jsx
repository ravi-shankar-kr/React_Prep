import React, { useState } from 'react'

const App = () => {
  const [a, setA] = useState(10)
  return (
    
    <div>
      <h1>number is {a}</h1>
      <button onClick={() => setA(a + 1)}>Increment</button>
    </div>
  )
}

export default App