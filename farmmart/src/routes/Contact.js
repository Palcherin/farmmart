import React from 'react'
import { Contactform } from '../components/Contactform'
import { Heropic } from '../components/Heropic'

export const Contact = () => {
  return (
    <div>
      
      <Heropic img='assets/contactintropic1.jpg' heading='REACH OUT TO US' text='You have any inquiries? Dont hesitate to send us an email,or fill the form below. We will respond back as soon as we can'/>
      <Contactform/>
      
    </div>
  )
}
