import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'


const Header = () => {
  return (
    <div className='bg-emerald-600 text-white flex justify-between p-4'>
         <h2 className='text-2xl'> Ravi <input type="text" className='text-black' /> </h2>
         <div className='flex gap-10 text-lg underline'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/products">Products</Link>
         </div>
    </div>
  )
}

export default Header