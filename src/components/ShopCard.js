import React, { Component } from 'react';

class ShopCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    this.props.addToCart();
  }

  render() {
    return(
      <div className='shop-card'>
        <div className='shop-card-img' style={{backgroundImage: "url(" + this.props.imgSrc + ")"}}>
          <button className='add-to-cart-btn' onClick={() => this.addToCart()}>Add To Cart</button>
        </div>
        <ul>
          <li>{this.props.name}</li>
          <li>${this.props.price}.00</li>
        </ul>
      </div>
    )
  }
  
}

export default ShopCard;