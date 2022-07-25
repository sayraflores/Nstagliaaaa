import ProductTemp from './ProductTemp';
import React from 'react';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], loading: false } // telling server not to load data yet 
  }
  componentWillMount() {
    fetch('https://localhost:3001/Products')
      .then((response) => {
        return response.json();
      },
        (error) => {
          this.setState({ error: error });
          console.log(error.status);
        }
      )
      .then((data) => {
        this.setState({ products: data, loading: true }); // server will load products
        console.log(this.state);
      });
  }render() {
    return this.state.products.map((e) => (
  <ProductTemp
  key= {e.id}
  title = {e.title}
  price = {e.price}
  description = {e.description}
  image = {e.image}
  />
    )
    )
  }
}

export default Products;