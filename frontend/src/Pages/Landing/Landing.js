import React from 'react'
import './Landing.css'
import landingimage from '../../Assets/images/Landing Main Image.jpg'
function Landing() {
  return (
    <>
     <div className='landing-page'>
      <img className='landing-img' src={landingimage} alt='' ></img>
      <div className='landing-right'>
        <h1 className='landing-right-head'>Every day is unique, just like our tea</h1>
        <p className='landing-right-para'>Tea is an aromatic beverage prepared by pouring hot or boiling water over 
        cured or fresh leaves of Camellia sinensis, an evergreen shrub native to East Asia which probably originated
         in the borderlands of southwestern China and northern Myanmar. Tea is also made, but rarely, from the leaves
          of Camellia taliensis.</p>
          <button className='landing-right-img' >BROWES TEAS</button>

      </div>

    </div>
    </>
  )

   
}

export default Landing