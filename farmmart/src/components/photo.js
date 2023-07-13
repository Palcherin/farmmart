import React from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

export const Photo = () => {
  return (
    <div className='cover-photo'>
        <div className='cover-contain'>
            <img src='assets/home-photo.jpg' alt='backround pic'/>
        </div>
        <div className='coverphoto-content'>
            <h1>WELCOME TO FARMMART</h1>
            <p>We offer you with all the farm products and services you need <br/>Visit our products section to order what you want </p>
            <div className='home-btn'>
            <Link to='/products' className='btn'>Browse Products</Link>
            <Link to='/contact' className='btn-lit'>Ask For Help</Link>
            </div>
        </div>
    </div>
  )
}
