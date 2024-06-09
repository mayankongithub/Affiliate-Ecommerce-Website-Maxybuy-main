import React from 'react'
import './item.css'
import product1 from '../../assets/product_1.png'
import { NavLink, useNavigate } from 'react-router-dom'
const Item = ({ id, name, image, newPrice, oldPrice, off = 50 }) => {
  const naviGate = useNavigate();

  function productDetails() {
    console.log("pd")
    naviGate('/productDetails', {state : { image, name, newPrice, oldPrice, off, id }})

  }
  return (

    <div image={image} onClick={()=>productDetails()} className="item">
      <div className="product-img">
        <img src={image} alt="product_1" />
      </div>
      <div className="product-name">

        <p>{name}</p>

      </div>

      <div className="price-rating">
        <div className="discount-price">
          <span>₹{newPrice}</span>
        </div>
        <div className="original-price">
          <span>₹{oldPrice}</span>
        </div>


        <div className="off">
          <span>{off}% OFF</span>
        </div>

      </div>
    </div>
  )
}

export default Item