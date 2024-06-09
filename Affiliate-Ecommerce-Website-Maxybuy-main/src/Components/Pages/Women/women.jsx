import React, { useEffect } from 'react'
import ProductsShow from '../ProductsShow/productsShow'
import AllImgList from '../../../assets/all_img_list'
const Women = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ ]);

  return (
    <ProductsShow banner={AllImgList.bannerWomen}  category={'women'}/>
  )
}

export default Women