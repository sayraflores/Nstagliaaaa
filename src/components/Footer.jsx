import React from 'react'
import '../App.css'

const Footer = () => {
  return (

<div className='newsletter'>
<ul className='social-icons'>

<a href='https://www.facebook.com/shopnstalgia'>
<i class = "fab fa-facebook"></i></a>

<a href='https://www.instagram.com/_nstalgia/'>
<i class = "fab fa-instagram"></i></a>

<a href='https://twitter.com/_nstalgia'>
<i class = "fab fa-twitter"></i></a>

</ul>
  <div className='newsletter-text'>
        <h1 class>Join Our Newsletter</h1>
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