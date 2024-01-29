import React from 'react'
import './Card.css'
// import tea1 from '../../Assets/images/tea1.jpg'
import { useNavigate } from 'react-router-dom'
function Card({ name, description, price, image }) {
  
 
  const navigate =useNavigate();
  const handleCardClick = () => {
    const productInfo = {
      imgSrc: image, 
      title: name,
      price: price,
      quantity: '50 g',
      description :description,
    };

    navigate('/AddtoCart', { state: { productInfo } });
  };
  return (
    <div className='card' onClick={handleCardClick }>
        <img src={image} alt='tea1'></img>
        <h1>{name}</h1>
        
        <h2> € {price} <span id='para'>/ 50 g</span></h2>
    </div>
  )
}

export default Card