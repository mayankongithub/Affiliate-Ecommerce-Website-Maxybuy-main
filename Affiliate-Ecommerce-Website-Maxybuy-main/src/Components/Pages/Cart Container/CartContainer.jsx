import React, { useContext, useEffect, useState } from 'react';
import './CartContainer.css';
import CartItem from './cartItem';
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../../Store/storeContext';
import all_product from '../../../assets/all_product'
const CartContainer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const { items ,data} = useContext(StoreContext);
    const shippingFee = 50; // Set shipping fee
    let subtotal = 0;

    // Calculate subtotal
    
    
    
      subtotal = 0;
      for (let i = 0; i < items.length; i++) {
        let id = items[i].id;
        let noOfitem = items[i].itemCount;

        all_product.forEach((e)=> {
            if(e.id==id){
                subtotal +=e.new_price*noOfitem;
               
            }
    
    
        })

    }
    const total = subtotal + shippingFee; // Calculate total price
    console.log(total)
    console.log(subtotal)

    return (
        <div className="cart-container">
            <div className="cartItems flex items-center justify-center">
                {items.length === 0 ? (
                    <h1 className=' font-extrabold p-5 bg-[#28253b] text-white rounded-md m-10 text-[50px]'>Cart is Empty</h1>
                ) : (
                    <div className="items-list">
                        <div className="ptpqtr">
                            <div className="product-title">
                                <h3>Product</h3>
                                <h3 className='ttttt'>Title</h3>
                                <h3></h3>
                            </div>
                            <h3>Price</h3>
                            <h3>Quantity</h3>
                            <h3>Total</h3>
                            <h3>Remove</h3>
                        </div>
                    </div>
                )}

                {items.length !== 0 && items.map(e => <CartItem key={e.id} id={e.id} itemCount={e.itemCount} />)}

                {items.length !== 0 && (
                    <div className="cart-price">
                        <div className="left-calc">
                            <div className="calculation">
                                <div className="subtotal">
                                    <span>Subtotal</span>
                                    <span>{subtotal}</span>
                                </div>
                                <div className="shipping-fee">
                                    <span>Shipping Fee</span>
                                    <span>{shippingFee}</span>
                                </div>
                                <div className="total-price">
                                    <span>Total</span>
                                    <span>{total}</span>
                                </div>
                            </div>
                            <div className="proceed-to-checkout">
                                <button>Proceed TO Checkout</button>
                            </div>  
                        </div>
                        <div className="right-promo-code">
                            <div className='pc'>
                                <p>If you have a promo code, Enter it here</p>
                                <div className="input-btn">
                                    <input type="text" name="" id="" />
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartContainer;
