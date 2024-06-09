import React, { useEffect } from 'react'
import './productDetails.css'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../Store/storeContext'
const ProductDetails = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ ]);

  const {setLoged, loged, menu, setMenuState, items } = useContext(StoreContext);

  let location = useLocation();
  let { image, name, newPrice, oldPrice, off, id } = location.state || {};
  const { addToCart } = useContext(StoreContext)



  return (
    <div className=" full-page-section">
      <div className="centre-page-section justify-between flex-col mt-[88px] max-h-[900px]">

        <div className="flex w-11/12 h-4/5">
          <div className="left-img-details flex w-2/4 gap-4 h-full mt-2.5">
            <div className="h-full flex flex-col items-center justify-around gap-4 w-1/4 rounded-md">


              <div className="mini-img">
                <img src={image} alt="" />
              </div>

              <div className="mini-img">
                <img src={image} alt="" />
              </div>

              <div className="mini-img">
                <img src={image} alt="" />
              </div>

              <div className="mini-img">
                <img src={image} alt="" />
              </div>


            </div>
            <div className="img-display">
              <img src={image} alt="" />
            </div>

          </div>
          <div className="flex items-center  justify-center h-full w-3/5">
            <div className="details  h-4/5 w-4/5 mr-12 flex flex-col justify-around pr-20">
              <div className="product-name-details">
                <h1>{name}</h1>
              </div>
              <div className="rating">
                <span>🔸🔸🔸🔸🔸({off})</span>
              </div>
              <div className="price">
                <span className='old-price'>₹{oldPrice}</span>
                <span className='new-price'>₹{newPrice}</span>
              </div>
              <div className="para-about">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa quasi commodi ratione.</p>
              </div>
              <div className="sizes">
                <h4>Select Size</h4>
                <div className="sizes-btn">
                  <div className="s size-btn hover:bg-[#28253b] hover:text-white transition-all">S</div>
                  <div className="m  size-btn hover:bg-[#28253b] hover:text-white transition-all">M</div>
                  <div className="l  size-btn  hover:bg-[#28253b] hover:text-white transition-all">L</div>
                  <div className="xl  size-btn  hover:bg-[#28253b] hover:text-white transition-all">XL</div>
                  <div className="xxl  size-btn  hover:bg-[#28253b] hover:text-white transition-all">XXL</div>
                </div>
              </div>
              <div className="add-to-cart" onClick={() =>  addToCart(id) }>
                Add to cart
              </div>
              <div className="category-tag">
                <p>Category<span>: Lorem, ipsum dolor.</span></p>
                <p>Tags<span>: Lorem ipsum dolor sit.</span></p>
              </div>
            </div>

          </div>


        </div>
        <div className="lower">

          <div className="description">Description</div>
          <div className="review">Review(24)</div>
        </div>

      </div>


    </div>
  )
}

export default ProductDetails