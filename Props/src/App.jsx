import React from 'react'
import Card from './components/Card'
 

const App = () => {

  const user = [
  {
    "image": "https://randomuser.me/api/portraits/men/32.jpg",
    "name": "Ravi Kashyap",
    "city": "Delhi",
    "age": 22
  },
  {
    "image": "https://randomuser.me/api/portraits/women/44.jpg",
    "name": "Anjali Sharma",
    "city": "Mumbai",
    "age": 25
  },
  {
    "image": "https://randomuser.me/api/portraits/men/58.jpg",
    "name": "Amit Verma",
    "city": "Bengaluru",
    "age": 28
  },
  {
    "image": "https://randomuser.me/api/portraits/women/21.jpg",
    "name": "Priya Singh",
    "city": "Kolkata",
    "age": 24
  },
  {
    "image": "https://randomuser.me/api/portraits/men/73.jpg",
    "name": "Arjun Mehta",
    "city": "Chennai",
    "age": 30
  }
]


  
  return (
      <div>
        <div className='p-10 '>
          {user.map (function (elem, idx) {
            return  <Card 
                key={idx} 
                image={elem.image} 
                name={elem.name} 
                city={elem.city} 
                age={elem.age} 
              />
              
          }) }
        </div>
      </div>
  )
}
 
export default App;