import React, { useContext, useEffect } from 'react'
import './CartContainer.css'
import all_product from '../../../assets/all_product'
import { StoreContext } from '../../Store/storeContext'
const CartItem = ({id,itemCount}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [ ]);

    const { deleteItemFromCart} = useContext(StoreContext)
    let thisItem;
     
     all_product.forEach((e)=> {
        if(e.id==id){
            thisItem = e;
        }


    })
     
    console.log(thisItem)

    return (
        <div className="item-detail">
            <div className="img-title">
                <div className="item-img">
                    <img src={thisItem.image} alt="" />
                </div>
                <div className="item-title">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="item-price">
                <span>₹{thisItem.new_price}</span>
            </div>
            <div className="item-quantity">
                {itemCount}
            </div>
            <div className="item-total">
                <span>₹{thisItem.new_price*itemCount}</span>
            </div>
            <div className="item-remove" onClick={()=> deleteItemFromCart(id)} ><span>X</span></div>
        </div>
    )
}

export default CartItem