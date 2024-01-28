import React from 'react'
import './Icon.css'
import global from "../../Assets/icons/language.jpg"
import redeem from "../../Assets/icons/redeem.jpg"
import eco from '../../Assets/icons/eco.jpg'
function Iconcom ({image , title}){
    return(
     <div className='iconcom'>
           <img className='iconimg' src={image} alt='iii'></img> 
        <h1 className='icontitle'>{title}</h1>
     </div>
    )
}
function Icon() {
  return (
    <div className='icondiv'>
          <Iconcom image={global} title='Origin: Iran'/>
          <Iconcom image={redeem} title='Organic'/>
          <Iconcom image={eco} title='Vegan'/>
    </div>
    
  )
}

export default Icon