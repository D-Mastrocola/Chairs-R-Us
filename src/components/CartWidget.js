import React, { Component } from "react";
import CartWidgetItem from './CartWidgetItem';

function CartWidget(props) {
  console.log(props.cart)
  return (
    <div className='cart-widget'>
      <h1>Cart</h1>
      <ul className='cart-widget-list'>
        {props.cart.map((e, index) =>
          <li className='cart-widget-list-item' key={index.toString()}><img src={e.imgSrc}/> <h4>{e.name}</h4></li>
        )}
      </ul>
    </div>
  );
}
export default CartWidget;