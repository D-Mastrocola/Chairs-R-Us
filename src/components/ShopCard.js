import { render } from '@testing-library/react';
import React from 'react';

function ShopCard(props) {
  return(
    <div className='shop-card'>
      <img src={props.imgSrc}/>
      <ul>
        <li>{props.name}</li>
        <li>${props.price}.00</li>
      </ul>
    </div>
  )
}

export default ShopCard;