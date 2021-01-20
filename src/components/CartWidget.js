import React, { Component } from "react";
import CartWidgetItem from './CartWidgetItem';

class CartWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: props.cart
    }
    console.log(this.state.cart)
  }
  render() {
    return (
      <div className='cart-widget'>
        <h1>Cart</h1>
        <ul className='cart-widget-list'>
          {this.state.cart.map((element) =>
            <li>{element.name}</li>
          )}
        </ul>
      </div>
    );
  }
}
export default CartWidget;