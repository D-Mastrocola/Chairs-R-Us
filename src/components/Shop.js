import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ShopCard from './ShopCard';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      product: {
      },
      view: 'shop'
    }
    this.addToCart = this.addToCart.bind(this);
    this.viewProduct = this.viewProduct.bind(this);
  }
  componentDidUpdate() {
    console.log('update')
    console.log(this.state.cart)
  }
  viewShop() {
    this.setState({
      view: 'shop'
    });
  }
  componentDidMount() {
    console.log('mount')
  }
  viewProduct(values) {
    this.setState({
      product: values,
      view: 'product'
    })
  }
  addToCart(values) {
    console.log(values)
  }
  viewCart() {
    this.setState({
      view: 'cart'
    })
  }
  render() {
    return this.state.view === 'shop' ? (
      <div className='app-container'>
        <header>
          <h1>Chairs R Us</h1>
          <nav>
            <a className='header-link' onClick={() => this.viewShop()}>Shop</a>
            <a className="header-link" onClick={() => this.viewCart()}>Cart</a>
          </nav>
        </header>
        <div className='shop-container'>
          <main className='shop'>
            <ShopCard viewProduct={this.viewProduct} price='69' name='Spongebob Chair' imgSrc='https://secure.img1-fg.wfcdn.com/im/93930736/resize-h800%5Ecompr-r85/1089/108993115/SpongeBob+SquarePants+High+Back+Upholstered+Kids+Desk+/+Activity+Chair.jpg' />
            <ShopCard viewProduct={this.viewProduct} price='200' name='Trent Chair' imgSrc='https://secure.img1-fg.wfcdn.com/im/50116484/resize-h800-w800%5Ecompr-r85/7143/71438596/Trent+25.2%2522+W+Side+Chair.jpg' />
            <ShopCard viewProduct={this.viewProduct} price='240' name='Sidera White Crosshatch Chair' imgSrc='https://cb2.scene7.com/is/image/CB2/SideraChairWhiteSHS17_1x1/?$web_zoom$&190905021443&wid=450&hei=450' />
            <ShopCard viewProduct={this.viewProduct} price='302' name='Racing Game Chair' imgSrc='https://secure.img1-fg.wfcdn.com/im/39470754/resize-h800%5Ecompr-r85/1232/123208412/Massage+PC+%2526+Racing+Game+Chair.jpg' />
            <ShopCard viewProduct={this.viewProduct} price='399' name='Comfy Lounge Chair' imgSrc='https://homedesignlover.com/wp-content/uploads/2013/01/2-main-street.jpg' />
          </main>
        </div>
      </div>
    ) : this.state.view === 'product' ? (
      <div>
        <header>
          <h1>Chairs R Us</h1>
          <nav>
            <a className='header-link' onClick={() => this.viewShop()}>Shop</a>
            <a className="header-link" onClick={() => this.viewCart()}>Cart</a>
          </nav>
        </header>
        <main className='product-view'>
          <button onClick={() => this.viewShop()} className='back-btn product-btn'>Back</button>
          <div>
            <h1>{this.state.product.name}</h1>
            <img class='product-img' src={this.state.product.imgSrc} />
            <p>${this.state.product.price}.99</p>
          </div>
          <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <button className='cart-btn product-btn' onClick={() => this.addToCart(this.state.product)}>Add To Cart</button>
        </main>
      </div>
    ) : (
          <div>
            <header>
              <h1>Chairs R Us</h1>
              <nav>
                <a className='header-link' onClick={() => this.viewShop()}>Shop</a>
                <a className="header-link" onClick={() => this.viewCart()}>Cart</a>
              </nav>
            </header>
            <main className='cart-view'>
              <div className='cart-container'>
                <h1>Cart</h1>
                <ul className='cart-list'>
                  {this.state.cart.map((e) => {
                    return <li className='cart-list-item'><img src={e.imgSrc}/><p>{this.state.product.name}</p><button className='remove-btn'>Remove</button></li>
                  })}
                </ul>
                <button>Checkout</button>
              </div>
            </main>
          </div>
        )
  }
  addToCart(values) {
    let newCart = this.state.cart.concat(values);
    this.setState(() => ({
      cart: newCart
    }));
  }

}
export default Shop;