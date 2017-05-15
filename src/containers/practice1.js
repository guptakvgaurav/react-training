/**
 * Created by ttn on 09/05/17.
 */

import React from 'react';
import Cart from '../components/cart.component';
import InputToCart from '../components/input-to-cart.component';

class CartItem {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
}

export default class Practice1 extends React.Component {
    constructor(props) {
        super(props);
        this.items = [ new CartItem('Mango', 2, 10), new CartItem('Apple', 4, 20), new CartItem('Banana', 6, 4), {name: 'Guava', qty: 2, price: 21}];
    }
    render () {
        return (
            <div>
                <InputToCart></InputToCart>
                <Cart items={this.items}></Cart>
            </div>
        );
    }
}