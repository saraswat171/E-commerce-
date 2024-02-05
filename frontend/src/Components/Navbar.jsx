import React, { useState, useEffect } from 'react'
import './Navbar.css'
import image from '../Assets/icons/psychiatry.svg'
import search from '../Assets/icons/Search.svg'
import person from '../Assets/icons/Person.svg'
import mall from '../Assets/icons/local_mall.svg'
import exit from '../Assets/icons/exit.png'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Navbar() {
    const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  axios.defaults.withCredentials=true;
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://localhost:6080/products');
        
        if (response.status === 200) {

          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication:', error.message);
        setAuthenticated(false);
      }
    };

    checkAuthentication();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:6080/logout');
      if (response.data.success) {
        localStorage.removeItem('User role');
        navigate('/login');
      } else {
        console.error('Logout failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
    
    return (
        <div className="nav">
            <div className="logo">
                <img src={image} alt=''></img>
                <h1>Brand Name</h1>
            </div>
            <div className='menu'>
                <Link className='navlink' to="/TeaCollections">TEA COLLECTIONS</Link>
                <Link className='navlink' to="/Accessories">ACCESSORIES</Link>
                <Link className='navlink' to="/Blog">BLOG</Link>

                <Link className='navlink' to="/Contact">CONTACT US</Link>

            </div>
            <div className='searchbar'>
                <button className='btn' ><img src={search} alt='Button'></img></button>
                {authenticated ? (
          <button className="btn" onClick={handleLogout}>
             <img src={exit} alt=""></img>
          </button>
        ) : (
          <button className="btn" onClick={() => navigate('/login')}>
            <img src={person} alt=""></img>
          </button>
        )}
                <button className='btn'><img src={mall} alt=''></img></button>

            </div>
        </div>
    )
}
export default Navbar;





// mport React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import image from '../Assets/icons/psychiatry.svg';
// import search from '../Assets/icons/Search.svg';
// import person from '../Assets/icons/Person.svg';
// import mall from '../Assets/icons/local_mall.svg';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Navbar() {
//   const [authenticated, setAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       try {
//         const response = await axios.get('http://localhost:6080/products');
//         if (response.status === 200) {
//           setAuthenticated(true);
//         } else {
//           setAuthenticated(false);
//         }
//       } catch (error) {
//         console.error('Error checking authentication:', error.message);
//         setAuthenticated(false);
//       }
//     };

//     checkAuthentication();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const response = await axios.post('http://localhost:6080/logout');
//       if (response.data.success) {
//         navigate('/login');
//       } else {
//         console.error('Logout failed:', response.data.message);
//       }
//     } catch (error) {
//       console.error('Error during logout:', error);
//     }
//   };

//   return (
//     <div className="nav">
//       <div className="logo">
//         <img src={image} alt=""></img>
//         <h1>Brand Name</h1>
//       </div>
//       <div className="menu">
//         <Link className="navlink" to="/TeaCollections">
//           TEA COLLECTIONS
//         </Link>
//         <Link className="navlink" to="/Accessories">
//           ACCESSORIES
//         </Link>
//         <Link className="navlink" to="/Blog">
//           BLOG
//         </Link>
//         <Link className="navlink" to="/Contact">
//           CONTACT US
//         </Link>
//       </div>
//       <div className="searchbar">
//         <button className="btn">
//           <img src={search} alt="Button"></img>
//         </button>
//         {authenticated ? (
//           <button className="btn" onClick={handleLogout}>
//             Logout
//           </button>
//         ) : (
//           <button className="btn" onClick={() => navigate('/login')}>
//             <img src={person} alt=""></img>
//           </button>
//         )}
//         <button className="btn">
//           <img src={mall} alt=""></img>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;