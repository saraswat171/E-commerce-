import React, {  useState } from 'react'
import './Login.css'
import mailicon from '../../Assets/icons/Leading Icon.svg'
import passicon from '../../Assets/icons/password-icon.svg'
import expand from '../../Assets/icons/expand_more.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [role , setRole]=useState('null');
    const navigate = useNavigate()
    axios.defaults.withCredentials=true;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };

        try {
            const response = await axios.post('http://localhost:6080/logininfo', data);
            console.log("res", response);

            localStorage.setItem('User role' , response.data);
           
            if (response.data === "Admin") {
                console.log(response.data)
                navigate('/Dashboard');
            }
            else if(response.data === "User"){
                navigate('/');
            }
            else {
                alert(response.data)
            }
        }
        catch (error) {
           
            console.error('Error:', error);
        }

    }
 
    // useEffect(()=>{

    // },[role]);
    return (
        <div className='hero'>
            <form onSubmit={handleSubmit}>
                <div className='hero-left'>
                    <div className='hero-head'>
                        <h1>Already a customer?</h1>
                        <p>Welcome back! Sign in for faster checkout.</p>
                    </div>

                    <div className='hero-input'>
                        <div className='email-content'>
                            <div className='mailbox'>
                                <img src={mailicon} alt='mailbox'></img>
                                <input type='email' name='email' id='email' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                        </div>
                    </div>

                    <div className='hero-input'>
                        <div className='email-content'>
                            <div className='mailbox'>
                                <img src={passicon} alt='password'></img>
                                <input type='password' name='password' id='passwors' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                        </div>
                    </div>

                    <div className='forget'>
                        <div className='remember'>
                            <input type='checkbox' name='' id='checkbox'></input>
                            <p>Please remember me</p>
                        </div>
                        <button className='btnn'>Forget Password?</button>
                    </div>
                    <button className='signin'>SIGN IN</button>
                </div>
            </form>
            <div className='hero-r'>
                <div className='hero-right'>
                    <div className='heading'>
                        <h1>New to our company?</h1>
                        <p>Create an account for the best experience</p>
                    </div>
                    <div className='benif'>
                        <div className='benefits'>
                            <img src={expand} alt=''></img>
                            <p>Modify and track your orders</p>
                        </div>
                        <div className='benefits'>
                            <img src={expand} alt=''></img>
                            <p>Faster checkout</p>
                        </div>
                        <div className='benefits'>
                            <img src={expand} alt=''></img>
                            <p>Get a 10% discount for new customer</p>
                        </div>
                        <div className='benefits'>
                            <img src={expand} alt=''></img>
                            <p>Faster Delivery</p>
                        </div>
                    </div>
                    <button className='create' > <Link to='/Register' >CREATE AN ACCOUNT</Link></button>
                </div>
                <div className='hero-b'>
                    <div className='heading'>
                        <h1>Guest checkout</h1>
                        <p>No ready to become a customer?</p>
                    </div>
                    <button className='create-btn'>CHECKOUT AS A GUEST</button>
                </div>

            </div>
        </div>
    )
}

export default Login;





