import React from 'react'
import './Promotion.css'

const Promotion = () => {
  return (
    <div className="promotion">
        <div className="images">
        <img className='promo-image' src={require("../../images/a.jpg")} alt="s" />
        <img className='promo-image' src={require("../../images/b.jpg")} alt="s" />
        <img className='promo-image' src={require("../../images/c.jpg")} alt="s" />
        <img className='promo-image' src={require("../../images/d.jpg")} alt="s" />
        <img className='promo-image' src={require("../../images/b.jpg")} alt="s" />
        <img className='promo-image' src={require("../../images/c.jpg")} alt="s" />
        <img className='promo-image' src={require("../../images/d.jpg")} alt="s" />
        </div>  
    </div>
  )
}

export default Promotion
