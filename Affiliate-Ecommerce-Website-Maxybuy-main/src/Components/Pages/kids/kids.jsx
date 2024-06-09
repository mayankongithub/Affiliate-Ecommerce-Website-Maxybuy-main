import React, { useEffect } from 'react'
import ProductsShow from '../ProductsShow/productsShow'
import AllImgList from '../../../assets/all_img_list'
const Kids = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductsShow banner={AllImgList.bannerKids} category={'kid'} />
  )
}

export default Kids