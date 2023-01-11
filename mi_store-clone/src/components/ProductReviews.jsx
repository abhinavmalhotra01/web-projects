import React from 'react'
import ProductReviewCard from "./ProductReviewCard.jsx"
import "../stylesheets/ProductReviews.css"

const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {productReviews.map((item,index)=>(
            <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.image} index={index} key={item.image} />        
        ))}
    </div>
  )
}

export default ProductReviews