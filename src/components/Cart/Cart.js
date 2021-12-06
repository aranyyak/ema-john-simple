import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((num,prd)=>num+prd.price,0);
    let shipping = 0;
    if (total>40){
        shipping=0;
    }
    else if (total>20){
        shipping=4;
    }
    else if (total>0){
        shipping=12;
    }
    return (
        <div>
           <h3>Order Summary</h3>
           <h4>Items Ordered: {cart.length}</h4>
           <p>Product Price: {Math.round(total)}</p>
           <p>Shipping Cost: {Math.round(shipping)}</p>
           <p>Total Price: {Math.round(total+shipping)}</p>
           
        </div>
    );
};

export default Cart;