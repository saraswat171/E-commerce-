import React, { useState } from 'react'
import './AddtoCart.css'
import { useLocation } from 'react-router-dom';
import Icon from '../../Components/Icon/Icon'
import mall from '../../Assets/icons/local_mall1.svg'
import add from '../../Assets/icons/Add.jpg'
import sub from '../../Assets/icons/minus.jpg'
import Variants from '../../Components/Variants/Variants';
function AddtoCart() {
  const location = useLocation();
  const [counter, setCounter] = useState(1);
  const { productInfo } = location.state || {};

  if (!productInfo) {

    return <div>No product information available.</div>;
  }

  return (
    <div className='addcart' >
  
      <h1 className='uppercase' >HOME/COLLECTIONS/CHAI/{productInfo.title}</h1>
      <div className='carditem'>
        <img src={productInfo.imgSrc} alt='product'></img>
        <div className='card-right'>
          <h1 className='card-right-heading'>{productInfo.title}</h1>
          <p className='paro'>A lovely warming Chai tea with ginger cinnamon flavours.
          </p>
          <Icon />
          <h1 className='price'>  {productInfo.price}</h1>
          <div className='variant'>
            <h1 className='variant-head'>Variants</h1>
            <Variants />
            <div className='lastcart'>
              <div className='counter'>

                <img className='counterbtn' src={add} alt='gff' onClick={() => setCounter(counter + 1)}></img>
                <h1 className='countertxt'>{counter}</h1>
                <img className={`counterbtn ${counter === 1 ? 'disabled' : ''}`} src={sub} alt='gff'
                  onClick={() => {

                    if (counter > 1) {
                      setCounter(counter - 1);
                    }
                  }}></img>
              </div>
              <button className='addbag'>
                <img className='addbagimg' src={mall} alt='hh'></img>
                <h1 className='addbagh1'>Add To Bag</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddtoCart