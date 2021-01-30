import React, { Component } from 'react';

class ShopCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      imgSrc: this.props.imgSrc,
      view: 'card'
    };
    this.addToCart = this.addToCart.bind(this);
    this.viewProduct = this.viewProduct.bind(this);
  }

  addToCart() {
    this.props.addToCart(this.state);
  }
  viewProduct() {
    this.props.viewProduct(this.state);
  }

  render() {
    return this.state.view === 'card' ? (
      <div className='shop-card'>
        <div className='shop-card-img' style={{backgroundImage: "url(" + this.state.imgSrc + ")"}}>
          <button className='add-to-cart-btn' onClick={() => this.viewProduct()}>Add To Cart</button>
        </div>
        <ul>
          <li>{this.props.name}</li>
          <li>${this.props.price}.00</li>
        </ul>
      </div>
    ) : (
      <div></div>
    )
  }
  
}

export default ShopCard;