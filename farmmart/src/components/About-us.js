import React from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

export const Aboutus = () => {
  return (

    <div className='about-container'>
      <div className='about-pic'>
        <img src='assets/cabbae.jpg' />
      </div>
      <div className='about-content'>
        <div className='about-intro'>
        <h1>More About Us</h1>
        </div>
        <div className='about'>
            
            <h1>Your number one online farm produce store</h1>
            <p>Farmmart is your number one online farm products store,providin you with all the solutions you need
            Live stress free with chemical free veetables and other produce bein supplied at your convinience
            We have different payment options to suite every ones need and convinience in buyin from us.
            Buy all kales seedlins,certified and treated from all possible pests and diseases,ready to be transplanted
            we have very quality maize produced undder proffessional care to provide you with the oriinal taste</p>

            <h3>Have any complaons or suestions?We'd love your feedback</h3>
        <Link to='/contact' >Reach Out </Link>
        </div>
        </div>
    </div>
  )
}
