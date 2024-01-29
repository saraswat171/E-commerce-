import React from 'react'
import './Instructions.css'
import kettle from '../../Assets/icons/kettle.jpg'
import drop from '../../Assets/icons/water_voc.jpg'
import alarm from '../../Assets/icons/alarm.jpg'
import eclpse from '../../Assets/icons/Ellipse 2.jpg'
function Icons({ image, title, icondescription }) {
    return (
        <>
        <div className='instruct-iconcom'>
            <img className='instruct-iconimg' src={image} alt='iii'></img>
            <h1 className='instruct-icontitle'>{title} : <span id='instruct-icondescription'>{icondescription}</span></h1>
            
        </div>
       
        </>
    )
}
function Infotea( {teatitle , teadescrip}){
    return (
             <div className='teadiv'>
                <h1 className='instruct-icontitle'>{teatitle}</h1>
                <h2 id='instruct-icondescription'>{teadescrip}</h2>

             </div>
    )
}

function Instructions() {
    return (
        <div className='instruct'>
            <div className='instruct-right'>
                <h1 className='instruct-right-heading' >Steeping instructions</h1>

                <Icons
                    image={kettle}
                    title='SERVING SIZE'
                    icondescription='2 tsp per cup, 6 tsp per pot'
                />
                 <div className='line'></div>
                 <Icons
                    image={drop}
                    title='WATER TEMPERATURE'
                    icondescription='100°C'
                />
                 <div className='line'></div>
                 <Icons
                    image={alarm}
                    title='STEPPING TIME'
                    icondescription='3-5 minutes'
                />
                 <div className='line'></div>
                 <Icons
                    image={eclpse}
                    title='COLOR AFTER 3 MINUTES'
                    icondescription=''
                />
                 
            </div>


            <div className='instruct-left'>
                <h1 className='instruct-left-heading' >About this tea</h1>
               <div className='instruct-leftteadiv'>
                <Infotea 
                  teatitle='flavour' 
                   teadescrip='Spicy'
                />
                <div className='linev'></div>
                <Infotea 
                  teatitle='Qualities' 
                   teadescrip='Smoothing'
                />
                <div className='linev'></div>
                <Infotea 
                  teatitle='caffeine' 
                   teadescrip='Medium'
                />
                <div className='linev'></div>
                <Infotea 
                  teatitle='allergens' 
                   teadescrip='Nuts-free'
                />
                
               </div>
               <h1 className='ingredient'>Ingredient</h1>
               <p className='ingredientpara'>Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper, Cinnamon sticks, Cardamom, Cinnamon pieces.</p>

            </div>


        </div>
    )
}

export default Instructions