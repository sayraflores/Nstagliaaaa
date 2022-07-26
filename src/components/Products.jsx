import Axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'


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
  // const fetchProducts = () => {
  //   axios
  //   .get('http://localhost:3001/Products')
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   });
  // };
  return (
    <> {items.map((val,index) => {
      return(
        
        <div key={index}>
          <img src={val.image} alt ="photo"/>
          <h2>{val.title}</h2>
          <p>{val.price}</p>
          <p>{val.description}</p>
        </div>
      
      )
    })}
    <div>Productsmngjrg</div>
    </>
  )
}
export default Products;