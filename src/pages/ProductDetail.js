import React from 'react'
import ImageSlider from "../components/DetailPage/ImageSlider";
import RightSec from "../components/DetailPage/RightSec";


const ProductDetail = () => {
  return (
    <div className="flex gap-10 custom_product_detail">
      <ImageSlider/>
      <RightSec/>
    </div>
  )
}

export default ProductDetail