import React from 'react'

const Navbar = () => {
  return (

    <>
    <nav className='flex items-center justify-between p-4 bg-gray-200 text-2xl'>
        <h2>Ravi</h2>
                <div className='flex space-x-4 text-xl' >
            <h4 >About</h4>
            <h4>Contacts</h4>
            <h4>Services</h4>
            <h4>Your Account</h4>
          </div>
         
       </nav>
        <hr /> 
    </>
  )
}

export default Navbar