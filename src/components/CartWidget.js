import React from "react";
import CartWidgetItem from './CartWidgetItem';

function CartWidget() {
  return (
    <div className='cart-widget'>
      <h1>Cart</h1>
      <ul className='cart-widget-list'>
        <CartWidgetItem name='Bread' price='1.69'/>
        <CartWidgetItem name='Oven' price='500.24'/>
        <CartWidgetItem name='Tires' price='300.31'/>
      </ul>
    </div>
  );
}
export default CartWidget;