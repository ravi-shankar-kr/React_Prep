import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  const getData = async() =>{
     const response = await axios.get(' https://picsum.photos/v2/list?page=2&limit=100')
     setData(response.data)

  }
  return (
    <div className='p-5'>
      <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl m-2 rounded px-2 py-1 active:scale-95'>Get Data</button>
      <div className='p-5 m-5 bg-gray-200'>
        {data.map( function(elem, idx){
          return  <div kay={idx} className='bg-gray-500 w-full text-black flex intems-center rounded p-5 m-5 justify-between'>
            <img className='h-20 ' src={elem.download_url} alt="" />
            <h1 className='justify-content'>{elem.author}</h1>
            
          </div>
        })}
      </div>
    </div>
  )
}

export default App