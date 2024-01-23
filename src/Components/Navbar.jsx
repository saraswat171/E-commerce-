import './Navbar.css'
import image from '../Assets/icons/psychiatry.svg'
import search from '../Assets/icons/Search.svg'
import person from '../Assets/icons/Person.svg'
import mall from '../Assets/icons/local_mall.svg'
import {Link} from 'react-router-dom'
function Navbar(){
    return(
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
                  <button className='btn'><img src={search} alt='Button'></img></button>
                  <button className='btn'><img src={person} alt=''></img></button>
                  <button className='btn'><img src={mall} alt=''></img></button>

            </div>
        </div>
    )
} 
export default Navbar;