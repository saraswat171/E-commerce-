import React from 'react'
import './Landing.css'
import landingimage from '../../Assets/images/Landing Main Image.jpg'
function Landing() {
  return (
    <div className='landing-page'>
          <img className='landing-img' src={landingimage} alt='' ></img>
          <div className='landing-right'>
            <h1 className='landing-right-head'>Every day is unique, just like our tea</h1>

          </div>

    </div>
  )
}

export default Landing