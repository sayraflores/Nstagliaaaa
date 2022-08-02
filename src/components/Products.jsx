import Axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'


const Products = () => {
  const [items, setProducts] = useState([]); //
  useEffect(() => {
    Axios
      .get('http://localhost:3001/Shop')
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      });


  }, []);
  const Fillylow = () => {
    Axios.get('http://localhost:3001/lowtohigh').then(
      (response) => {
        setProducts(response.data);
      }
    );
  }

  const Fillyhigh = () => {
    Axios.get('http://localhost:3001/hightolow').then(
      (response) => {
        setProducts(response.data);
      }
    );
  }

  const Fillyselect = () => {
    Axios.get('http://localhost:3001/Shop').then(
      (response) => {
        setProducts(response.data);
      }
    );
  };

  const filly2 = (param) => {
    if (param.target.value === 'low') {
      Fillylow()
    }
    if (param.target.value === 'high') {
      Fillyhigh()
    }
    if (param.target.value === 'select') {
      Fillyselect()
    }

  }



  return (
    <div className='item-container'>
      <>
      <div className= "FilterContainer">
<label for = "tees">Sort:</label>
<select name = "tees" onChange={filly2}>
  <option value = "select">Select</option> 
  <option value = 'low'>High-Low</option>
  <option value ='high'>Low-High</option>
</select>
     </div>

      {items.map((val, index) => {
      return (
        <div className='card_items' key={index}>
          <img className='card_image' src={val.image} alt="" />
          <h2 className='card_title'>{val.title}</h2>
          <p className='card_price'>{val.price}</p>
          <p className='card_description'>{val.description}</p>
          <p className='button'><button>Add to Cart</button></p>
        </div>

      );
      })}
      </>
      </div>
  )
    }
export default Products;