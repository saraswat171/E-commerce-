import React, { useState } from 'react'
import './Register.css'
import '../Login/Login.css'
import mailicon from '../../Assets/icons/Leading Icon.svg'
import passicon from '../../Assets/icons/password-icon.svg'
import nameimg from '../../Assets/icons/NAMEIMG.png'
import axios from 'axios'

function Register() {
    const [name , setName] =useState();
    const [email , setEmail] =useState();
    const [password , setPassword] =useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('', {name,email,password})
        .then(result=>console.log(result))
        .catch(err=> console.log(err))
    }

    return (
        <div className='register'>
            <form onSubmit={handleSubmit}>
                <div className='hero-left'>
                    <div className='hero-head'>
                        <h1>New User Sign Up Here!</h1>
                        <p>Welcome! Sign Up for better experience.</p>
                    </div>
                    <div className='hero-input'>
                        <div className='email-content'>
                            <div className='mailbox'>
                                <img src={nameimg} alt='mailbox'></img>
                                <input type='text' name='name' id='name' placeholder='Enter your name' onChange={(e)=> setName(e.target.value)} ></input>
                            </div>
                        </div>
                    </div>
                    <div className='hero-input'>
                        <div className='email-content'>
                            <div className='mailbox'>
                                <img src={mailicon} alt='mailbox'></img>
                                <input type='email' name='email' id='email' placeholder='Email Address'onChange={(e)=> setEmail(e.target.value)} ></input>
                            </div>
                        </div>
                    </div>

                    <div className='hero-input'>
                        <div className='email-content'>
                            <div className='mailbox'>
                                <img src={passicon} alt='password'></img>
                                <input type='password' name='password' id='passwors' placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)}></input>
                            </div>
                        </div>
                    </div>

                   
                    <button className='signin'>SIGN UP</button>
                </div>
            </form>
        </div>
    )
}

export default Register