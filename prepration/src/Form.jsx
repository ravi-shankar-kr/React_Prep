import React, { useState } from 'react'

const Form = () => {

    const [username, setUsername] = useState('')

    const submitHandler = (e) => {   
        e.preventDefault()
        console.log(username)
        
        setUsername('')
    }
    
  return (
    <div > 
        <form 
        onSubmit={(e) =>{
            submitHandler(e)
        }} >
            <input
                value={username}
                onChange={(e) =>{
                    setUsername(e.target.value)
                }}
                 
             className='bg-gray-200 p-5  rounded-2xl shadow-lg w-full max-w-md space-y-6 border border-blue-600' type="text" placeholder='Enter your user name' />
            <button className='rounded bg-blue-500 text-white py-2 px-4 m-2 hover:bg-black'>Submit</button>
        </form>
    </div>
  )
}

export default Form;