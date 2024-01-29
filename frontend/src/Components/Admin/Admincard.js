import React from 'react'
import '../Card/Card.css'
function Admincard({name,image,price,stock}) {
    
  return (
    <div className='card'  >
        <img src={image} alt='tea1'></img>
        <h1>{name}</h1>
       
        <h2>Prices: € {price} <span id='para'>/ 50 g</span></h2>
        <h2>Stocks : {stock} </h2>
        
    </div>
  )
}

export default Admincard