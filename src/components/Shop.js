import { render } from '@testing-library/react';
import React, { Component } from 'react';
import CartWidget from './CartWidget';
import ShopCard from './ShopCard';

class Shop extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      checkout: false
    }
    this.addToCart = this.addToCart.bind(this);
  }
  render() {
    return (
      <main className='shop'>
        <ShopCard  addToCart={this.addToCart} price='69' name='Spongebob Chair' imgSrc='https://secure.img1-fg.wfcdn.com/im/93930736/resize-h800%5Ecompr-r85/1089/108993115/SpongeBob+SquarePants+High+Back+Upholstered+Kids+Desk+/+Activity+Chair.jpg'/>
        <ShopCard addToCart={this.addToCart} price='200' name='Trent Chair' imgSrc='https://secure.img1-fg.wfcdn.com/im/50116484/resize-h800-w800%5Ecompr-r85/7143/71438596/Trent+25.2%2522+W+Side+Chair.jpg'/>
        <ShopCard addToCart={this.addToCart} price='240' name='Sidera White Crosshatch Chair' imgSrc='https://cb2.scene7.com/is/image/CB2/SideraChairWhiteSHS17_1x1/?$web_zoom$&190905021443&wid=450&hei=450'/>
        <ShopCard addToCart={this.addToCart} price='302' name='Racing Game Chair' imgSrc='https://secure.img1-fg.wfcdn.com/im/39470754/resize-h800%5Ecompr-r85/1232/123208412/Massage+PC+%2526+Racing+Game+Chair.jpg'/>
        <ShopCard addToCart={this.addToCart} price='399' name='Comfy Lounge Chair' imgSrc='https://homedesignlover.com/wp-content/uploads/2013/01/2-main-street.jpg'/>
        <CartWidget />
      </main>
    )
  }
  addToCart(name, imgSrc) {
    console.log(name + '\n' + imgSrc)
  }
  
}
export default Shop;