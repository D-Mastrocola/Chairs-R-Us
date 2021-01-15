import React from 'react';

function CartWidgetItem(props) {
  return(
    <li className='cart-widget-list-item'><div className='placeholder-img'></div><div className='cart-item-name'>{props.name}</div><p>${props.price}</p></li>
  );
}

export default CartWidgetItem;