import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  return (
    <>
  <div className='navbar'> 
   <i className="fa-solid fa-magnifying-glass"></i>
   <a href = ""><img className='logo' src ={`images/blacklogo.png`} alt =""></img></a>
 
    <ul>
    <li><Link to='/Home'>Home</Link></li>
      <li><Link to='/Shop'>Shop</Link></li>
      <li><Link to='/Contact'>Contact</Link></li>
      <li><Link to='/Faq'>FAQ</Link></li>
    </ul>



    </div>
    </>
  )
}

export default Navbar;