 import React from 'react'

const Card = (props) => {
  return (
    <div className='mr-7 text-black inline-block p-6 text-center rounded shadow-lg bg-white'>
      <img 
        className='ml-8 h-32 w-32 rounded-full mb-3 object-cover' 
        src={props.image} 
        alt={props.name} 
      />
      <h1 className='text-2xl font-semibold mb-2'>{props.name}</h1> 
      <h2 className='text-gray-600'>{props.city}, {props.age}</h2>
      <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium hover:bg-emerald-800'>
        Add Friend
      </button>
    </div>
  )
}

export default Card
