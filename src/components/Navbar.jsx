import React from 'react'
import '../App.css'
import blogo from '../images/whitelogo.png';

const Navbar = () => {
  return (
    
  <div className='navbar'>  
 <img  className='logo' src ={blogo} alt =""></img>
    <ul>
      <li> <a href ="index.html">Home</a></li>
      <li> <a href ="products.html">Shop</a></li>
      <li> <a href ="contact.html">Contact</a></li> 
      <li> <a href ="contact.html">FAQ'S</a></li> 

    </ul>
    </div>
  )
}

export default Navbar;