import React , { useState }from 'react'
import '../Card/Card.css'
function Admincard({name,image,price}) {
    let [prices , setPrice]=useState(price)
  return (
    <div className='card'  >
        <img src={image} alt='tea1'></img>
        <h1>{name}</h1>
        <button onClick={()=> setPrice(price-1)}>+</button>
        <h2>€ {price} <span id='para'>/ 50 g</span></h2>
        <button onClick={price-1}>+</button>
    </div>
  )
}

export default Admincard