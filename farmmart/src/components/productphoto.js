import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'

export const Productphoto = () => {
  return (
    <div className='cover-photo'>
        <div className='cover-contain'>
            <img src='assets/product-photo.jpg' alt='product-photo'/>
        </div>
        <div className='coverphoto-content1'>
            <h1>BROWSE AVAILABLE PRODUCTS</h1>
            <p>We have products in all categories: vegetables,grains,seeds and seedlings.<br/> We are concerned when you dont etables,grains,seeds and seedlings. We are concerned<br/> when you dont get what you are looking for. Talk to us about what you need</p>
            <div className='home-btn'>
                <Link to='/contact' className='btn'>Talk To Us</Link>
                <Link to='/about' className='btn-lit'>More About Us</Link>
            </div>
        </div>
    </div>
  )
}
