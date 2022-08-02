import React from 'react'
import './Card.css'



const Card = () => {
  return (
  <div className='card text-center'>
  <div className='overflow'>
    <h1> Our Best Sellers</h1>
    <img src= {`images/product3.jpg`} alt =""/>
    <div className="card-body text-dark"></div>
    <h4 className='card-title'>Grateful Dead Tee</h4>
    <p className="card-text text-secondary">$350</p>
    <a href ="#" className='btn btn-outline-success'>Buy Now</a> 
    </div>

    <div className='overflow'>
    <img src= {`images/product2.jpg`} alt =""/>
    <div className="card-body text-dark"></div>
    <h4 className='card-title'>Charlotte Hornets Tee</h4>
    <p className="card-text text-secondary">$50</p>
    <a href ="#" className='btn btn-outline-success'>Buy Now</a> 
    </div>

    <div className='overflow'>
    <img src= {`images/product1.jpg`} alt =""/>
    <div className="card-body text-dark"></div>
    <h4 className='card-title'>Anger Management Tour</h4>
    <p className="card-text text-secondary">$350</p>
    <a href ="#" className='btn btn-outline-success'>Buy Now</a> 
    </div>
  </div>
  


  )
}

export default Card


