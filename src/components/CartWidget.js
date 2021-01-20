import React, { Component } from "react";
import CartWidgetItem from './CartWidgetItem';

function CartWidget(props) {
  console.log(props.cart)
  return (
    <div className='cart-widget'>
      <h1>Cart</h1>
      <ul className='cart-widget-list'>
        {props.cart.map((e, index) =>
          <li key={index.toString()}>{e.name}</li>
        )}
      </ul>
    </div>
  );
}
export default CartWidget;