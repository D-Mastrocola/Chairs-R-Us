import React from 'react';

function ShopCard(props) {
  return(
    <div className='shop-card'>
      <div className='shop-card-img' style={{backgroundImage: "url(" + props.imgSrc + ")"}}>
        <button className='add-to-cart-btn'>Add To Cart</button>
      </div>
      <ul>
        <li>{props.name}</li>
        <li>${props.price}.00</li>
      </ul>
    </div>
  )
}

export default ShopCard;