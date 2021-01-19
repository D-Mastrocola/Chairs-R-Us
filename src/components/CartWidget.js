import React, { Component } from "react";
import CartWidgetItem from './CartWidgetItem';

class CartWidget extends Component {
  render() {
    return (
      <div className='cart-widget'>
        <h1>Cart</h1>
        <ul className='cart-widget-list'>
        </ul>
      </div>
    );
  }
}
export default CartWidget;