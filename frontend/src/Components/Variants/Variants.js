import React from 'react'
import './Variants.css'
import cont from '../../Assets/icons/Rectangle 132.jpg'
import sampler from '../../Assets/icons/Group 24.jpg'
import vectr from '../../Assets/icons/Vector.jpg'
function Vari({gram ,quantity,imgg}){
   return (
    <div className='vari'>
        <img className='variimg' src={imgg} alt='bb'></img>
        <h4 className='varitext' >{gram} {quantity} </h4>
        {/* <h4 className='varitxt'>{gram}{quantity}</h4> */}
    </div>
   ) 
}
function Variants() {
  return (
    <div className='varit'>
        <Vari gram={50} quantity='g bag' imgg={cont}/>
        <Vari gram={100} quantity='g bag' imgg={cont}/>
        <Vari gram={170} quantity='g bag' imgg={vectr}/>
        <Vari gram={250} quantity='g bag' imgg={cont}/>
        <Vari gram={1} quantity='kg bag' imgg={cont}/>
        <Vari gram={''} quantity='Sampler' imgg={sampler}/>

    </div>
  )
}

export default Variants