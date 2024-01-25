import React from 'react'
import './Card.css'
import tea1 from '../../Assets/images/tea1.jpg'
function Card() {
  return (
    <div className='card'>
        <img src={tea1} alt='tea1'></img>
    </div>
  )
}

export default Card