import React from 'react'

const ProductTemp = ({title, description, price, image}) => {
    return (
        <>
            <div class="items">
                <div class="card">
                    <img src={image} alt="clothing_item" style="width:100%"></img>
                    <h1> {title}</h1>
                    <p class="price">{price}</p>
                    <p>(description)</p>
                    <p><button>Add to Cart</button></p>
                </div>
            </div>
        </>

    )
}

export default ProductTemp