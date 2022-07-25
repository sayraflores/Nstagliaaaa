import React from 'react'
import './Footer.css'

const Footer = () => {
  return (

<div className='newsletter'>
<ul className='social-icons'>

<a href='https://www.facebook.com/shopnstalgia'>
<i className= "fab fa-facebook"></i></a>

<a href='https://www.instagram.com/_nstalgia/'>
<i className = "fab fa-instagram"></i></a>

<a href='https://twitter.com/_nstalgia'>
<i className = "fab fa-twitter"></i></a>

</ul>
  <div className='newsletter-text'>
        <h1>Join Our Newsletter</h1>
        <p>Subsribe to get 10% off on your order!</p>
  </div>
<form action = '?'>
<input type='email' placeholder='Enter your email'></input>
<button type = 'submit'>Submit</button>
</form>


</div>


  
   
  )
}

export default Footer;