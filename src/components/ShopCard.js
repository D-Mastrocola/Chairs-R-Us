import React from 'react';

function ShopCard(props) {
  let cardStyle = {
    backgroundImage: "url(" + props.imgSrc + ")"
  };
  console.log(cardStyle.backgroundImage);
  return(
    <div className='shop-card'>
      <div className='shop-card-img' style={cardStyle}>

      </div>
      <ul>
        <li>{props.name}</li>
        <li>${props.price}.00</li>
      </ul>
    </div>
  )
}

export default ShopCard;