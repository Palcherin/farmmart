import React from 'react'
import './Components.css'

export const Footer = () => {
  return (
    <div className='footer-container'>
        
        <div className='footer'>
            <div className='about-section'>
            <h1>ABOUT FARMMART</h1>
            <p>Company information</p>
            <p>CSI</p>
            <p>Store Location</p>
            <p>Affillate Program</p>
            <p>Copyright</p>
            
            </div>
            <div className='services-section'>
              <h1>SERVICE</h1>
              <p>Contact Us</p>
              <p>Order Status</p>
              <p>Our Location</p>
              <p>FAQ’s</p>
            </div>
            <div className='adress-section'>
              <h1>POLICIES</h1>
              <p>Terms of Use</p>
              <p>Shipping & Returns</p>
              <p>Secure shopping</p>
              <p>News</p>
  
            </div>
            <div>
              <h1>SUBSCRIBE</h1>
              <input type='text' placeholder='Your email adress..' />
              <p>Be notified of our promotions and news. Enter email to subscribe</p>
              <button className='btn'>Send</button>
            </div>
        </div>
    </div>
  )
}
