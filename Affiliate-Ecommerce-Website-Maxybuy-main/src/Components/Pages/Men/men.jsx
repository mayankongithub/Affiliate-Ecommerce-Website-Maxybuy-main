import React, { useEffect } from 'react'
import ProductsShow from '../ProductsShow/productsShow'
import AllImgList from '../../../assets/all_img_list'
function Men() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<ProductsShow banner={AllImgList.bannerMens} category={'men'} />
  )
}

export default Men